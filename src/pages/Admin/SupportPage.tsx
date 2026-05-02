import React, { useState } from "react";
import SupportHeader from "../../components/AdminDashboard/Support/SupportHeader";
import TicketTable from "../../components/AdminDashboard/Support/TicketTable";
import ConversationDetails from "../../components/AdminDashboard/Support/ConversationDetail";

export type TicketStatus = "Replied" | "Open";

export interface Ticket {
  id: string;
  user: string;
  booking: string;
  issue: string;
  status: TicketStatus;
  date: string;
}

const SupportPage: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] font-inter pt-4">
      {!selectedTicket ? (
        <div className="w-full pl-5 pr-70">
          <SupportHeader />
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
            <div className="xl:col-span-4 w-full">
              <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-[#E3E3E4]">
                <TicketTable onSelectTicket={setSelectedTicket} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="-ml-30 -mt-7 rounded-xl"
          style={{ width: "896px", minHeight: "1040px" }}
        >
          <ConversationDetails
            ticket={selectedTicket}
            onBack={() => setSelectedTicket(null)}
          />
        </div>
      )}
    </div>
  );
};

export default SupportPage;
