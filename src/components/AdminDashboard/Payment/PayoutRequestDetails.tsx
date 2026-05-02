import { ArrowLeft, X, CheckCircle2, XCircle } from "lucide-react";

export const PayoutRequestDetails = ({
  onBack,
  onOpenModal,
}: {
  onBack: () => void;
  onOpenModal: (type: "approve" | "reject") => void;
}) => (
  <div className="max-w-[850px] w-full font-['Inter']">
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-[#94A3B8] mb-6 hover:text-[#1E293B] transition-all group"
    >
      <ArrowLeft
        size={22}
        className="ml-1 md:ml-3 cursor-pointer group-hover:-translate-x-1 transition-transform"
      />{" "}
    </button>

    <p className="ml-3 mb-3 text-[16px] md:text-[19px] font-bold">
      Payout Request Details
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
      <div className="xl:col-span-4 w-full">
        <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-[#E3E3E4]">
          <div className="min-w-[800px]">
            <div className="p-3 md:p-4 border-b border-[#DBE0E5] bg-gray-50 flex justify-between items-center">
              <h2 className="text-[16px] md:text-[20px] pl-2 md:pl-4 font-bold text-[#1E293B]">
                Payout Request Details
              </h2>
              <X
                size={22}
                className="text-[#94A3B8] cursor-pointer mr-2 md:mr-4"
                onClick={onBack}
              />
            </div>

            <div className="p-5 md:p-8 space-y-6 md:space-y-8 bg-white">
              <div className="flex justify-start items-start gap-4">
                <div className="pb-4 w-full max-w-3xl items-baseline gap-3">
                  <p className="text-[11px] md:text-[12px] font-medium text-gray-500 uppercase whitespace-nowrap">
                    Request ID
                  </p>
                  <p className="text-[15px] md:text-[18px] font-bold text-[#1E293B]">
                    PR001
                  </p>
                </div>

                <span className="mt-1 px-3 md:px-4 py-1 md:py-1.5 bg-[#FFF0EB] text-[#9F2D00] rounded-full text-[11px] md:text-[12px] font-medium whitespace-nowrap">
                  Pending
                </span>
              </div>

              <hr className="text-gray-200" />

              <div className="space-y-4">
                <h4 className="text-[13px] md:text-[15px] ml-1 -mt-5 mb-5 md:mb-7 font-medium text-gray-500">
                  Groomer Profile
                </h4>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 ml-1 p-4 md:p-5 w-[775px] rounded-md">
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#94A3B8]">
                      Name
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                      Sarah Johnson
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#94A3B8]">
                      Groomer ID
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                      U002
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#94A3B8]">
                      Completed Bookings
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                      5
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#94A3B8]">
                      Total Earnings
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#00A63E]">
                      $1,000
                    </p>
                  </div>
                </div>
              </div>

              <hr className="text-gray-200 -mt-4" />
              <p className="text-[13px] md:text-[15px] text-gray-500">
                Payout Information
              </p>
              <div className="bg-[#FFF0EB] p-6 md:p-8 rounded-md w-[775px]">
                <p className="text-[15px] md:text-[18px] mb-2 text-gray-500 font-light">
                  Requested Amount
                </p>
                <p className="text-[32px] md:text-[45px] font-medium text-[#FF6B35] leading-none">
                  $500
                </p>
              </div>

              <div className="flex w-[775px] gap-70">
                <div>
                  <p className="mb-1 text-[13px] md:text-[14px] text-gray-500">
                    Payment Method
                  </p>
                  <p className="text-[14px] md:text-[16px] font-medium">
                    Bank Transfer
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[13px] md:text-[14px] text-gray-500">
                    Request Date
                  </p>
                  <p className="text-[14px] md:text-[16px] font-medium">
                    2026-04-15
                  </p>
                </div>
              </div>

              <hr className="text-gray-200" />

              <div className="w-[775px]">
                <h3 className="text-[14px] md:text-[16px] font-medium text-[#64748B] mb-4 md:mb-6">
                  Account Details
                </h3>
                <div className="bg-[#F8FAFC] rounded-xl p-5 md:p-6 space-y-4 md:space-y-6">
                  <div>
                    <p className="text-[13px] md:text-[15px] text-[#94A3B8] mb-1">
                      Account Holder
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                      Sarah Johnson
                    </p>
                  </div>
                  <div>
                    <p className="text-[13px] md:text-[15px] text-[#94A3B8] mb-1">
                      Bank Name
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B]">
                      Chase Bank
                    </p>
                  </div>
                  <div>
                    <p className="text-[13px] md:text-[15px] text-[#94A3B8] mb-1">
                      Account Number
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#1E293B] tracking-widest">
                      ****7890
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 md:gap-4 pt-4 border-t border-gray-200 w-[775px]">
                <button
                  onClick={() => onOpenModal("approve")}
                  className="flex w-[150px] justify-center items-center cursor-pointer gap-2 px-4 md:px-5 py-2.5 md:py-3.5 bg-[#17B26A] text-white text-[13px] md:text-[14px] font-bold rounded-xl hover:bg-[#0E9358] transition-all shadow-sm active:scale-95"
                >
                  <CheckCircle2 size={20} />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => onOpenModal("reject")}
                  className="flex w-[150px] justify-center items-center cursor-pointer gap-2 px-4 md:px-3 py-2 md:py-1.5 bg-[#E7000B] text-white text-[13px] md:text-[14px] font-bold rounded-xl hover:bg-[#DC2626] transition-all"
                >
                  <XCircle size={20} />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
