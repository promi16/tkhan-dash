import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-5 md:p-8 rounded-[14px] border border-gray-100 flex items-center justify-between shadow-sm font-inter w-full min-w-0 h-full"
    >
      <div className="flex flex-col gap-1.5 overflow-hidden">
        <p className="text-[#9ca3af] text-[13px] md:text-[15px] font-normal tracking-tight truncate">
          {title}
        </p>

        <h3 className="text-[24px] md:text-[32px] font-semibold text-[#0f2f1d] leading-tight">
          {value}
        </h3>
      </div>

      <div className="p-3 md:p-4 rounded-[12px] flex items-center justify-center bg-[#FFF4EF] text-[#FF6B35] shrink-0 ml-4">
        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
      </div>
    </motion.div>
  );
};
