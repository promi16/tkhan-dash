import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onReviewClick: () => void;
}

const ApplicationTable: React.FC<Props> = ({ onReviewClick }) => {
  const [searchTerm] = useState("");

  const data = [
    {
      id: "APP001",
      name: "Rachel Martinez",
      exp: "5 years",
      email: "rachel.m@email.com",
      phone: "+1 555 123 4567",
      date: "2026-04-16",
      status: "Pending",
    },
    {
      id: "APP005",
      name: "Amanda Foster",
      exp: "4 years",
      email: "amanda.f@email.com",
      phone: "+1 555 567 8901",
      date: "2026-04-16",
      status: "Pending",
    },
    {
      id: "APP002",
      name: "Marcus Thompson",
      exp: "3 years",
      email: "marcus.t@email.com",
      phone: "+1 555 234 5678",
      date: "2026-04-15",
      status: "Pending",
    },
    {
      id: "APP003",
      name: "Sophia Chen",
      exp: "7 years",
      email: "sophia.chen@email.com",
      phone: "+1 555 345 6789",
      date: "2026-04-14",
      status: "Approved",
    },
    {
      id: "APP004",
      name: "David Rodriguez",
      exp: "1 year",
      email: "david.r@email.com",
      phone: "+1 555 456 7890",
      date: "2026-04-13",
      status: "Rejected",
    },
    {
      id: "APP006",
      name: "Kevin Park",
      exp: "6 years",
      email: "kevin.p@email.com",
      phone: "+1 555 678 9012",
      date: "2026-04-12",
      status: "Approved",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm),
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
      <div className="xl:col-span-4 w-full">
        <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-[#E3E3E4]">
          <table className="min-w-[800px] w-full text-sm border-separate border-spacing-0 font-['Inter']">
            <thead className="border-b border-[#DBE0E5] bg-gray-50">
              <tr>
                <th className="px-8 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9]">
                  Application ID
                </th>
                <th className="px-6 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9]">
                  Groomer Name
                </th>
                <th className="px-6 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9]">
                  Email / Phone
                </th>
                <th className="px-6 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9]">
                  Submission Date
                </th>
                <th className="px-6 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9] text-center">
                  Status
                </th>
                <th className="px-8 py-5 whitespace-nowrap text-gray-500 text-[11px] font-medium uppercase tracking-wider bg-[#F9F9F9] md:text-center lg:text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="relative">
              <AnimatePresence mode="wait">
                {filteredData.length > 0 ? (
                  filteredData.map((app, i) => {
                    const isFirstThree = i < 3 && searchTerm === "";
                    const rowBg = isFirstThree ? "bg-[#FFF9F5]" : "bg-white";

                    return (
                      <motion.tr
                        key={app.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative group transition-colors"
                      >
                        <td
                          className={`px-8 py-6 font-medium text-sm ${rowBg} ${isFirstThree ? "text-[#E25822]" : "text-gray-900"}`}
                        >
                          {app.id}
                        </td>
                        <td className={`px-6 py-6 ${rowBg}`}>
                          <div className="font-medium whitespace-nowrap text-sm text-gray-900">
                            {app.name}
                          </div>
                          <div className="text-[12px] text-gray-500 font-light mt-0.5">
                            {app.exp} experience
                          </div>
                        </td>
                        <td className={`px-6 py-6 ${rowBg}`}>
                          <div className="text-md font-light text-gray-900">
                            {app.email}
                          </div>
                          <div className="text-[12px] text-gray-500 font-light mt-0.5">
                            {app.phone}
                          </div>
                        </td>
                        <td
                          className={`px-6 py-6 text-sm font-light text-black ${rowBg}`}
                        >
                          {app.date}
                        </td>
                        <td className={`px-6 py-6 text-center ${rowBg}`}>
                          <span
                            className={`px-4 py-1.5 rounded-full text-[13px] font-medium tracking-tight ${
                              app.status === "Approved"
                                ? "bg-[#E6F9F1] text-[#10B981]"
                                : app.status === "Rejected"
                                  ? "bg-[#FEEBEB] text-[#E11D48]"
                                  : "bg-[#FFF0E6] text-[#E25822]"
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>

                        <td className={`px-8 py-6 text-right ${rowBg}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onReviewClick}
                            className=" text-gray-900 px-5 py-2 rounded-lg font-medium text-sm hover:bg-[#E25822] hover:text-white transition-all whitespace-nowrap duration-200 cursor-pointer "
                          >
                            Review Application
                          </motion.button>
                        </td>

                        {i !== filteredData.length - 1 && (
                          <td
                            colSpan={6}
                            className="absolute bottom-0 left-8 right-8 h-px bg-gray-200 p-0 pointer-events-none"
                          />
                        )}
                      </motion.tr>
                    );
                  })
                ) : (
                  <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td colSpan={6} className="py-20 text-center bg-white">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <Search size={32} className="text-gray-300" />
                        <h3 className="text-gray-900 font-bold text-lg">
                          Result Not Found
                        </h3>
                        <p className="text-gray-400 text-sm">
                          We couldn't find any application matching "
                          {searchTerm}"
                        </p>
                      </div>
                    </td>
                  </motion.tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTable;
