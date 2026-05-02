import React from "react";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

const StatsCards: React.FC = () => {
  const stats = [
    {
      label: "Pending Review",
      count: "3",
      sub: "Requires action",
      icon: <AlertCircle size={22} />,
      color: "text-[#F54900]",
      countColor: "text-[#F54900]",
      bg: "bg-[#FFF7ED]",
    },
    {
      label: "Approved",
      count: "2",
      sub: "Active groomers",
      icon: <CheckCircle size={22} />,
      color: "text-[#00A63E]",
      countColor: "text-[#00A63E]",
      bg: "bg-[#F0FDF4]",
    },
    {
      label: "Rejected",
      count: "1",
      sub: "Not qualified",
      icon: <XCircle size={22} />,
      color: "text-[#E7000B]",
      countColor: "text-[#E7000B]",
      bg: "bg-[#FEF2F2]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-['Inter']">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-[14px] border border-gray-100 shadow-sm flex justify-between items-center transition-all hover:shadow-md"
        >
          <div>
            <p className="text-md whitespace-nowrap text-gray-500 font-light mb-1">
              {item.label}
            </p>

            <h4
              className={`text-3xl font-extrabold mb-1 tracking-tight ${item.countColor}`}
            >
              {item.count}
            </h4>
            <p className="text-[14px] whitespace-nowrap text-gray-400 font-light">
              {item.sub}
            </p>
          </div>
          <div className={`p-3.5 rounded-2xl ${item.bg} ${item.color}`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
