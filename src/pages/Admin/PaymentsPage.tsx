import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { PayoutRequestTable } from "../../components/AdminDashboard/Payment/PayoutRequestTable";
import { PayoutRequestDetails } from "../../components/AdminDashboard/Payment/PayoutRequestDetails";
import { PaymentHistoryTable } from "../../components/AdminDashboard/Payment/PaymentHistoryTable";
import { PaymentDetails } from "../../components/AdminDashboard/Payment/PaymentDetails";
import { ActionModal } from "../../components/AdminDashboard/Payment/ActionModal";

interface Payment {
  id: string;
  ref: string;
  amt: string;
  method: string;
  status: string;
  date: string;
}

type View =
  | "LIST_REQUEST"
  | "DETAIL_REQUEST"
  | "LIST_HISTORY"
  | "DETAIL_HISTORY";

export default function PaymentsPage() {
  const [view, setView] = useState<View>("LIST_REQUEST");
  const [activeTab, setActiveTab] = useState<"payout" | "history">("payout");

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "approve" | "reject";
  }>({ isOpen: false, type: "approve" });

  const isListView = view === "LIST_REQUEST" || view === "LIST_HISTORY";

  const handleConfirmAction = (type: "approve" | "reject") => {
    if (type === "approve") {
      toast.success("Payout request approved successfully!", {
        duration: 3000,
        position: "top-center",
        style: { background: "#10B981", color: "#fff", fontWeight: "600" },
      });
    } else {
      toast.error("Payout request has been rejected.", {
        duration: 3000,
        position: "top-center",
        style: { background: "#EF4444", color: "#fff", fontWeight: "#600" },
      });
    }

    setModal({ ...modal, isOpen: false });
    setTimeout(() => setView("LIST_REQUEST"), 500);
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50 font-['Inter'] pt-3 px-4 md:pl-5 md:pr-8">
      <Toaster />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-full overflow-x-hidden"
        >
          {isListView && (
            <div className="mb-6 md:mb-10">
              <h1 className="text-[24px] md:text-[32px] font-bold text-[#1E293B] tracking-tight">
                Payment Management
              </h1>
              <p className="text-[#64748B] text-[14px] md:text-[16px]">
                Track and manage all transactions
              </p>

              <div className="flex gap-6 md:gap-10 mt-6 md:mt-10 overflow-x-auto no-scrollbar border-b border-[#F1F5F9]">
                <button
                  onClick={() => {
                    setActiveTab("payout");
                    setView("LIST_REQUEST");
                  }}
                  className={`pb-4 cursor-pointer text-[14px] md:text-[16px] whitespace-nowrap font-medium transition-all relative ${activeTab === "payout" ? "text-[#FF6B35]" : "text-[#94A3B8] hover:text-[#64748B]"}`}
                >
                  Pay-out request
                  {activeTab === "payout" && (
                    <motion.div
                      layoutId="tab"
                      className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#FF6B35] rounded-t-full"
                    />
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveTab("history");
                    setView("LIST_HISTORY");
                  }}
                  className={`pb-4 cursor-pointer text-[14px] md:text-[16px] whitespace-nowrap font-medium transition-all relative ${activeTab === "history" ? "text-[#FF6B35]" : "text-[#94A3B8] hover:text-[#64748B]"}`}
                >
                  Payment History
                  {activeTab === "history" && (
                    <motion.div
                      layoutId="tab"
                      className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#FF6B35] rounded-t-full"
                    />
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="w-full">
            {view === "LIST_REQUEST" && (
              <PayoutRequestTable
                onViewDetails={() => setView("DETAIL_REQUEST")}
              />
            )}
            {view === "DETAIL_REQUEST" && (
              <PayoutRequestDetails
                onBack={() => setView("LIST_REQUEST")}
                onOpenModal={(type) => setModal({ isOpen: true, type })}
              />
            )}

            {view === "LIST_HISTORY" && (
              <PaymentHistoryTable
                onViewDetails={(row: Payment) => {
                  setSelectedPayment(row);
                  setView("DETAIL_HISTORY");
                }}
              />
            )}

            {view === "DETAIL_HISTORY" && (
              <PaymentDetails
                onBack={() => {
                  setView("LIST_HISTORY");
                  setSelectedPayment(null);
                }}
                data={selectedPayment!}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <ActionModal
        isOpen={modal.isOpen}
        type={modal.type}
        onClose={() => setModal({ ...modal, isOpen: false })}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
}
