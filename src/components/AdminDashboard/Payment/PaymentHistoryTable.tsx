import { useState } from "react";
import { CreditCard, Wallet, Banknote, Search } from "lucide-react";
import { motion } from "framer-motion";

export interface Payment {
  id: string;
  ref: string;
  amt: string;
  method: string;
  status: string;
  date: string;
}

export const PaymentHistoryTable = ({
  onViewDetails,
}: {
  onViewDetails: (row: Payment) => void;
}) => {
  const paymentData: Payment[] = [
    {
      id: "P001",
      ref: "B001",
      amt: "$150",
      method: "Credit Card",
      status: "Paid",
      date: "2026-04-16",
    },
    {
      id: "P002",
      ref: "B002",
      amt: "$200",
      method: "PayPal",
      status: "Rejected",
      date: "2026-04-16",
    },
    {
      id: "P003",
      ref: "B003",
      amt: "$120",
      method: "Credit Card",
      status: "Paid",
      date: "2026-04-15",
    },
    {
      id: "P004",
      ref: "B004",
      amt: "$300",
      method: "Debit Card",
      status: "Paid",
      date: "2026-04-15",
    },
    {
      id: "P005",
      ref: "B005",
      amt: "$150",
      method: "Credit Card",
      status: "Paid",
      date: "2026-04-15",
    },
    {
      id: "P006",
      ref: "B006",
      amt: "$250",
      method: "PayPal",
      status: "Paid",
      date: "2026-04-15",
    },
    {
      id: "P007",
      ref: "B007",
      amt: "$400",
      method: "Credit Card",
      status: "Paid",
      date: "2026-04-14",
    },
    {
      id: "P008",
      ref: "B008",
      amt: "$350",
      method: "Debit Card",
      status: "Paid",
      date: "2026-04-15",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPayments = paymentData.filter((row) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      row.id.toLowerCase().includes(searchLower) ||
      row.ref.toLowerCase().includes(searchLower)
    );
  });

  const getIcon = (method: string) => {
    if (method === "PayPal")
      return <Wallet size={16} className="text-[#94A3B8]" />;
    if (method.includes("Card"))
      return <CreditCard size={16} className="text-[#94A3B8]" />;
    return <Banknote size={16} className="text-[#94A3B8]" />;
  };

  return (
    <div className="w-full font-['Inter']">
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 -mt-5 gap-5">
        <div className="xl:col-span-4 w-full">
          <div className="w-full bg-white rounded-xl shadow-sm border border-[#E3E3E4] overflow-hidden">
            <div className="p-4 md:p-6 border-b border-gray-200 flex items-center gap-3">
              <div className="relative flex-1 max-w-[1300px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search size={18} className="text-[#94A3B8]" />
                </span>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by transaction ID or booking ID..."
                  className="w-full pl-11 pr-4 py-3 bg-[#F8FAFC] md:bg-white border border-[#E3E3E4] rounded-xl text-[13px] md:text-[14px] text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#FF6B35] transition-all"
                />
              </div>
            </div>

            <div className="w-full overflow-x-auto p-4 md:p-7">
              <table className="min-w-[800px] w-full text-sm">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr className="whitespace-nowrap">
                    {[
                      "Transaction ID",
                      "Booking Reference",
                      "Amount",
                      "Payment Method",
                      "Status",
                      "Date",
                      "Actions",
                    ].map((head) => (
                      <th
                        key={head}
                        className="px-8 py-4 text-[10px] sm:text-[11px] md:text-[12px] font-medium text-[#64748B] uppercase text-left tracking-wider"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPayments.length > 0 ? (
                    filteredPayments.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-orange-50/50 transition-colors duration-200 group"
                      >
                        <td className="px-8 py-5 font-semibold text-[#1E293B] text-[12px] sm:text-[13px] md:text-[14px]">
                          {row.id}
                        </td>
                        <td className="px-8 py-5 text-gray-700 font-medium text-[12px] sm:text-[13px] md:text-[14px]">
                          {row.ref}
                        </td>
                        <td className="px-8 py-5 font-bold text-[#1E293B] text-[12px] sm:text-[13px] md:text-[14px]">
                          {row.amt}
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2 text-black font-light text-[12px] sm:text-[13px] md:text-[14px]">
                            {getIcon(row.method)}
                            {row.method}
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span
                            className={`px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] md:text-[12px] font-medium ${row.status === "Paid" ? "bg-[#ECFDF5] text-[#016630]" : "bg-[#FEF2F2] text-[#F04438]"}`}
                          >
                            {row.status}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-gray-700 font-medium text-[12px] whitespace-nowrap sm:text-[13px] md:text-[14px]">
                          {row.date}
                        </td>
                        <td className="px-8 py-5">
                          <motion.button
                            onClick={() => onViewDetails(row)}
                            initial={{ color: "#1E293B" }}
                            whileHover={{ color: "white", scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="text-gray-800 px-5 py-2 rounded-lg font-medium text-[12px] sm:text-[13px] md:text-sm hover:bg-orange-500 hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer"
                          >
                            View Details
                          </motion.button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-8 py-10 text-center text-gray-400 italic"
                      >
                        No transactions found matching "{searchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
