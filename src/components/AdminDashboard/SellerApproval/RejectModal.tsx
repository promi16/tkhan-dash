import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, XCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RejectModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-['Inter']">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-[20px] p-10 w-full max-w-lg shadow-2xl relative z-10 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-medium tracking-tight">
                Reject Application Note
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={28} />
              </button>
            </div>
            <textarea
              className="w-full h-44 bg-[#F5F6F7] border-none rounded-[15px] p-6 focus:ring-2 ring-red-500/20 outline-none resize-none mb-10 text-xl font-light placeholder:text-gray-400 tracking-tight required"
              placeholder="Please resubmit your NID...."
            />
            <div className="flex justify-end">
              <button
                onClick={onConfirm}
                className="bg-red-600 text-white px-10 py-3 rounded-xl font-medium flex items-center gap-4 hover:bg-red-700 active:scale-95 transition-all shadow-2xl shadow-red-100  cursor-pointer "
              >
                <XCircle size={24} /> Reject Application
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RejectModal;
