import React, { useState } from "react";
import { motion } from "framer-motion";

interface User {
  name: string;
  id: string;
  email: string;
  phone: string;
  role: "Buyer" | "Seller";
  status: "Active" | "Blocked";
  joinDate: string;
  totalBookings: number;
}

interface UserInfoProps {
  status?: "Active" | "Blocked";
  user?: User;
}

export const UserDetails: React.FC<UserInfoProps> = ({ user, status }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = {
    name: user?.name || "John Smith",
    id: user?.id || "U001",
    email: user?.email || "john.smith@email.com",
    phone: user?.phone || "+1 234 567 8901",
    role: user?.role || "Buyer",
    status: status || user?.status || "Active",
    joinDate: user?.joinDate || "2024-01-15",
    totalBookings: user?.totalBookings ?? 0,
  };

  const infoBlocks = [
    { label: "Name", value: data.name },
    { label: "User ID", value: data.id },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Role", value: data.role, type: "badge" },
    { label: "Status", value: data.status, type: "badge" },
    { label: "Join Date", value: data.joinDate },
    { label: "Total Bookings", value: data.totalBookings },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white p-5 sm:p-6 md:p-8 rounded-[10px] border border-[#F1F5F9] shadow-sm w-full max-w-[650px] font-inter mx-auto md:mx-0"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-5 sm:gap-y-6 md:gap-y-8">
        {infoBlocks.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={idx}
              className="flex flex-col gap-0.5 md:gap-1 cursor-pointer select-none"
              onClick={() => setActiveIndex(idx)}
            >
              <p
                className={`transition-colors duration-200 text-[10px] md:text-[11px] tracking-wider uppercase ${
                  isActive
                    ? "font-bold text-[#FF6B35]"
                    : "text-gray-400 font-medium"
                }`}
              >
                {item.label}
              </p>

              {item.type === "badge" ? (
                <div className="flex mt-0.5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] md:text-[11px] transition-all duration-200 ${
                      isActive
                        ? "ring-1 ring-[#FF6B35] font-bold"
                        : "font-medium"
                    } ${
                      item.value === "Seller" || item.value === "Active"
                        ? "bg-[#E7F9ED] text-green-700"
                        : item.value === "Buyer"
                          ? "bg-[#F1F5F9] text-[#64748B]"
                          : item.value === "Blocked"
                            ? "bg-[#FEE2E2] text-[#EF4444]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ) : (
                <p
                  className={`transition-all duration-200 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-tight break-words ${
                    isActive
                      ? "text-[#FF6B35] font-bold"
                      : "text-[#1E293B] font-medium"
                  }`}
                >
                  {item.value}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
