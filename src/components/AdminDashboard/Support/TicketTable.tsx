import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Ticket } from "../../../pages/Admin/SupportPage";

const MOCK_DATA: Ticket[] = [
  {
    id: "T001",
    user: "John Smith",
    booking: "B001",
    issue: "Service quality issue",
    status: "Replied",
    date: "2026-04-15",
  },
  {
    id: "T002",
    user: "Mike Davis",
    booking: "B002",
    issue: "Payment not processed",
    status: "Open",
    date: "2026-04-16",
  },
  {
    id: "T003",
    user: "James Taylor",
    booking: "B003",
    issue: "Seller cancelled last minute",
    status: "Open",
    date: "2026-04-16",
  },
  {
    id: "T004",
    user: "Sarah Johnson",
    booking: "B004",
    issue: "Buyer not responding",
    status: "Open",
    date: "2026-04-15",
  },
  {
    id: "T005",
    user: "Emily Brown",
    booking: "B005",
    issue: "Refund request",
    status: "Open",
    date: "2026-04-14",
  },
];

const TicketTable: React.FC<{ onSelectTicket: (t: Ticket) => void }> = ({
  onSelectTicket,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = MOCK_DATA.filter((ticket) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      ticket.id.toLowerCase().includes(searchLower) ||
      ticket.user.toLowerCase().includes(searchLower) ||
      ticket.issue.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="w-full">
      <div className="p-4 bg-white rounded-t-xl border border-[#E3E3E4]">
        <div className="relative max-w-2xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-[#F9FAFB] border border-[#E3E3E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 text-sm transition-all"
          />
        </div>
      </div>

      <div className="block md:hidden bg-white border-x border-b border-[#E3E3E4] rounded-b-xl overflow-hidden">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => onSelectTicket(ticket)}
              className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 active:bg-gray-50"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold text-[#F26522]">
                  {ticket.id}
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {ticket.user}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    ticket.status === "Replied"
                      ? "bg-[#E6F9F1] text-[#00A360]"
                      : "bg-[#FFF7ED] text-[#C2410C]"
                  }`}
                >
                  {ticket.status}
                </span>
                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-gray-500 text-sm italic">
            No tickets found
          </div>
        )}
      </div>

      <div className="hidden md:block w-full overflow-x-auto bg-white rounded-b-xl shadow-sm border-x border-b border-[#E3E3E4]">
        <table className="min-w-[1000px] w-full text-sm table-fixed">
          {" "}
          <thead className="border-b border-[#DBE0E5] bg-gray-50/50">
            <tr className="text-left text-gray-500">
              <th className="w-28 px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                Ticket ID
              </th>
              <th className="px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                User
              </th>
              <th className="px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                Booking
              </th>
              <th className="px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                Issue
              </th>
              <th className="w-32 px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                Status
              </th>
              <th className="w-32 px-6 py-4 uppercase text-[11px] font-semibold tracking-wider">
                Date
              </th>
              <th className="w-40 px-6 py-4 uppercase text-[11px] font-semibold tracking-wider text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E3E3E4]">
            {filteredTickets.map((ticket) => (
              <tr
                key={ticket.id}
                onClick={() => onSelectTicket(ticket)}
                className={`group cursor-pointer transition-colors duration-200 ${
                  ticket.status === "Replied" ? "bg-[#FFF8F6]/40" : "bg-white"
                } hover:bg-[#FFF5F2]`}
              >
                <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                  {ticket.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-[#1A1A1A]">
                  {ticket.user}
                </td>
                <td className="px-6 py-4 text-gray-600">{ticket.booking}</td>
                <td className="px-6 py-4 text-gray-600 truncate">
                  {ticket.issue}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-medium inline-block min-w-[70px] text-center ${
                      ticket.status === "Replied"
                        ? "bg-[#E6F9F1] text-[#00A360]"
                        : "bg-[#FFF7ED] text-[#C2410C]"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 italic">
                  {ticket.date}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTicket(ticket);
                    }}
                    className="px-5 py-2 cursor-pointer whitespace-nowrap rounded-lg border border-transparent text-[#1A1A1A] font-medium hover:bg-[#F26522] hover:text-white transition-all text-sm active:scale-95"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
