import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ApproveButton: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleApprove = (): void => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="relative inline-block">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute -top-14 left-0 right-0 flex justify-center z-50"
          >
            <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl border border-green-100 text-[12px] font-bold shadow-xl flex items-center gap-2 whitespace-nowrap">
              <CheckCircle size={16} className="text-green-500" />
              Application Approved Successfully!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleApprove}
        disabled={showSuccess}
        className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-sm active:scale-95 
          ${
            showSuccess
              ? "bg-green-100 text-green-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
          }`}
      >
        <CheckCircle size={19} strokeWidth={2.5} />
        <span className="tracking-tight">
          {showSuccess ? "Approved" : "Approve Application"}
        </span>
      </button>
    </div>
  );
};

export default ApproveButton;
