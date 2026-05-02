import { ArrowLeft, X } from "lucide-react";

interface Payment {
  id: string;
  ref: string;
  amt: string;
  method: string;
  status: string;
  date: string;
}

export const PaymentDetails = ({
  onBack,
  data,
}: {
  onBack: () => void;

  data?: Payment | null;
}) => {
  const details = data || {
    id: "P001",
    ref: "B001",
    amt: "$150",
    method: "Credit Card",
    status: "Paid",
    date: "2026-04-16",
  };

  return (
    <div className="max-w-[800px] font-['Inter'] w-full px-2 sm:px-0">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#94A3B8] mb-4 md:mb-6 hover:text-[#1E293B] transition-all group"
      >
        <ArrowLeft
          size={25}
          className="cursor-pointer group-hover:-translate-x-1 ml-1 md:ml-3 transition-transform"
        />{" "}
      </button>
      <p className="ml-2 -mt-2 mb-4 md:mb-5 font-medium text-lg md:text-xl">
        Payment Details
      </p>
      <div className="bg-white rounded-[12px] border border-[#F1F5F9] shadow-sm overflow-hidden">
        <div className="p-4 md:p-6 border-b border-[#F1F5F9] flex justify-between items-center">
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#1E293B]">
            Payment Details
          </h2>
          <X
            size={24}
            className="text-[#94A3B8] cursor-pointer"
            onClick={onBack}
          />
        </div>
        <div className="px-5 md:px-10 py-5 md:py-7 space-y-6 md:space-y-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[14px] md:text-[16px] font-light text-gray-700 mb-1">
                Transaction ID
              </p>
              <p className="text-[16px] md:text-[18px] font-bold text-[#1E293B]">
                {details.id}
              </p>
            </div>

            <span
              className={`px-4 py-1.5 rounded-full text-[11px] md:text-[12px] font-bold ${
                details.status === "Paid"
                  ? "bg-[#ECFDF5] text-[#10B981]"
                  : "bg-[#FEF2F2] text-[#EF4444]"
              }`}
            >
              {details.status}
            </span>
          </div>
          <hr className="text-gray-200" />
          <div className="bg-gray-50 px-4 md:px-8 pb-6 md:pb-8">
            <div className="pt-4 md:pt-5 rounded-2xl text-left">
              <p className="text-[14px] md:text-[16px] text-[#64748B] font-light mb-1">
                Amount
              </p>
              <p className="text-[32px] md:text-[48px] font-medium text-[#1E293B]">
                {details.amt}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-y-6 md:gap-y-10 border-t border-gray-200 pt-6 md:pt-8">
              <div>
                <p className="text-[12px] md:text-[14px] text-gray-500 font-light mb-1">
                  Booking Reference
                </p>
                <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                  {details.ref}
                </p>
              </div>
              <div>
                <p className="text-[12px] md:text-[14px] text-gray-500 font-light  mb-1">
                  Payment Method
                </p>
                <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                  {details.method}
                </p>
              </div>
              <div>
                <p className="text-[12px] md:text-[14px] text-gray-500 font-light mb-1">
                  Date
                </p>
                <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                  {details.date}
                </p>
              </div>
              <div>
                <p className="text-[12px] md:text-[14px] text-gray-500 font-light mb-1">
                  Status
                </p>

                <p
                  className={`text-[12px] md:text-[14px] font-medium -ml-2 w-fit px-3 py-1 rounded-3xl ${
                    details.status === "Paid"
                      ? "text-[#016630] bg-green-100"
                      : "text-[#F04438] bg-red-100"
                  }`}
                >
                  {details.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
