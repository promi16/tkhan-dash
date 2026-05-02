import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

import StatsCards from "../../components/AdminDashboard/SellerApproval/StatsCards";
import ApplicationTable from "../../components/AdminDashboard/SellerApproval/ApplicationTable";
import ReviewDetail from "../../components/AdminDashboard/SellerApproval/ReviewDetail";
import RejectModal from "../../components/AdminDashboard/SellerApproval/RejectModal";

const SellerApprovalPage: React.FC = () => {
  const [view, setView] = useState<"list" | "detail">("list");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isApprove, setIsApprove] = useState(true);

  const handleFinalReject = () => {
    setIsModalOpen(false);
    setStatusMessage("Application Rejected Successfully!");
    setIsApprove(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setView("list");
    }, 2500);
  };

  const handleApproveSuccess = () => {
    setStatusMessage("Application Approved Successfully!");
    setIsApprove(true);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setView("list");
    }, 2500);
  };

  return (
    <div className=" mt-8 ml-8 mr-8 bg-[#FBFBFB] min-h-screen font-['Inter'] selection:bg-orange-100 selection:text-[#E25822]">
      <AnimatePresence mode="wait">
        {view === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-medium mb-1 text-black tracking-tight">
              Seller Approval (KYC)
            </h2>
            <p className="text-gray-500 font-light mb-10 text-shadow">
              Review and manage groomer applications
            </p>

            <StatsCards />
            <ApplicationTable onReviewClick={() => setView("detail")} />
          </motion.div>
        ) : (
          <ReviewDetail
            key="detail"
            onBack={() => setView("list")}
            onRejectClick={() => setIsModalOpen(true)}
            onApproveSuccess={handleApproveSuccess}
          />
        )}
      </AnimatePresence>

      <RejectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleFinalReject}
      />

      {/* Success/Toast Notification */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-10 py-5 rounded-full shadow-2xl flex items-center gap-4 font-black z-[200] text-white ${
              isApprove ? "bg-[#10B981]" : "bg-[#EF4444]"
            }`}
          >
            {isApprove ? <CheckCircle size={28} /> : <XCircle size={28} />}
            {statusMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SellerApprovalPage;
