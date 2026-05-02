import React, { useState } from "react";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { Ticket } from "../../../pages/Admin/SupportPage";

interface Message {
  sender: "User" | "Admin";
  timestamp: string;
  text: string;
}

const ConversationDetails: React.FC<{ ticket: Ticket; onBack: () => void }> = ({
  ticket,
  onBack,
}) => {
  const [inputText, setInputText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "User",
      timestamp: "2026-04-15 10:30 AM",
      text: "The service was not completed as expected.",
    },
    {
      sender: "Admin",
      timestamp: "2026-04-15 02:15 PM",
      text: "We apologize for the inconvenience. We have contacted the service provider and issued a partial refund.",
    },
    {
      sender: "User",
      timestamp: "2026-04-15 03:45 PM",
      text: "Thank you for the quick resolution!",
    },
    {
      sender: "Admin",
      timestamp: "2026-04-15 02:15 PM",
      text: "We apologize for the inconvenience. We have contacted the service provider and issued a partial refund.",
    },
  ]);

  const handleSend = () => {
    if (!inputText.trim()) {
      alert("Please write something first!");
      return;
    }

    const newMessage: Message = {
      sender: "Admin",
      timestamp: new Date().toLocaleString(),
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="w-full ml-35 h-full p-6 animate-in fade-in duration-300">
      <button
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-gray-600 mb-2 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2 cursor-pointer" />
      </button>

      <h2 className="text-xl font-light mb-4">Conversation Details</h2>

      <div className="border border-[#E3E3E4] bg-white rounded-xl p-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 border-b border-gray-100 pb-6">
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-[12px] uppercase text-gray-500 font-light mb-1">
                Ticket ID
              </p>
              <p className="font-medium text-sm">{ticket.id}</p>
              <hr className="text-gray-200 mt-5 w-[790px]" />
            </div>

            <div className="md:col-start-1 md:row-start-2">
              <p className="text-[12px] uppercase text-gray-500 font-light mb-1">
                User
              </p>
              <p className="font-medium text-sm">{ticket.user}</p>
            </div>
            <div className="md:row-start-2">
              <p className="text-[12px] uppercase text-gray-500 font-light mb-1">
                Related Booking
              </p>
              <p className="font-medium text-sm">{ticket.booking}</p>
            </div>
            <div className="md:row-start-3">
              <p className="text-[12px] uppercase text-gray-500 font-light mb-1">
                Date Reported
              </p>
              <p className="font-medium text-sm">{ticket.date}</p>
            </div>
            <div className="md:row-start-3">
              <p className="text-[12px] uppercase text-gray-500 font-light mb-1">
                Status
              </p>
              <span className="inline-block bg-[#FFF7ED] text-[#C2410C] text-[12px] px-3 py-1 rounded-lg font-medium">
                Open
              </span>
            </div>
          </div>
          <div className="flex md:justify-end items-start">
            <button className="flex items-center cursor-pointer gap-2 bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0E9F6E] transition-colors">
              <CheckCircle size={16} /> Mark as solved
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[13px] uppercase text-gray-500 font-light mb-1">
            Issue Summary
          </p>
          <p className="font-medium text-sm">{ticket.issue}</p>
        </div>
        <hr className="text-gray-200 mb-7" />
        <p className="text-[14px] text-gray-800 font-bold mb-4">Conversation</p>

        <div className="bg-[#F9FAFB] rounded-xl p-4 mb-6">
          <div
            className="space-y-4 max-h-[500px] overflow-y-auto pr-2 
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-[#F1F1F1]
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-[#C1C1C1]
            [&::-webkit-scrollbar-thumb]:rounded-full
            hover:[&::-webkit-scrollbar-thumb]:bg-[#A1A1A1]
            transition-colors"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "Admin" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-4 text-sm ${
                    msg.sender === "Admin"
                      ? "bg-[#FFF5F2] border border-[#FFD8CA]"
                      : "bg-white border border-[#E3E3E4]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[11px]">{msg.sender}</span>
                    <span className="text-[10px] text-gray-400">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-[14px] text-gray-800 font-medium mb-2">
            Send Reply
          </p>
          <div className="relative group">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your reply here..."
              className="w-full h-32 p-4 bg-white border border-[#E3E3E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F26522]/20 resize-none transition-all text-sm"
            />
            <button
              onClick={handleSend}
              className="absolute bottom-4 cursor-pointer right-4 flex items-center gap-2 bg-[#FFB08E] hover:bg-[#F26522] text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              <Send size={16} /> Send
            </button>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 animate-in fade-in zoom-in duration-200">
          <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Message sent successfully!
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Your reply has been added to the conversation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationDetails;
