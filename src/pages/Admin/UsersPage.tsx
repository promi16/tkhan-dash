import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { UserTable } from "@/components/AdminDashboard/Users/UserTable";
import { UserDetails } from "@/components/AdminDashboard/Users/UserDetails";
import { UserBookings } from "@/components/AdminDashboard/Users/UserBookings";
import { UserFeedback } from "@/components/AdminDashboard/Users/UserFeedback";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Details");
  const [isBlocked, setIsBlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const users = [
    {
      id: "U001",
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 234 567 8901",
      role: "Buyer" as const,
      status: "Active" as const,
      joinDate: "2024-01-15",
      totalBookings: 12,
    },
    {
      id: "U002",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 234 567 8902",
      role: "Seller" as const,
      status: "Active" as const,
      joinDate: "2024-02-20",
      totalBookings: 8,
    },
  ];

  const selectedUserData = useMemo(() => {
    return users.find((u) => u.id === selectedUser);
  }, [selectedUser, users]);

  const tabs = ["User Details", "Bookings", "User Feedback"];

  const handleBlockToggle = () => {
    setIsBlocked(!isBlocked);
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-[1485px] mx-auto px-4 sm:px-6">
      <AnimatePresence mode="wait">
        {showModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-auto text-center"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isBlocked ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"}`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {isBlocked
                  ? `Unblock ${selectedUserData?.name}?`
                  : `Block ${selectedUserData?.name}?`}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to {isBlocked ? "unblock" : "block"} this
                user?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 bg-gray-100 rounded-xl font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBlockToggle}
                  className={`flex-1 py-3 text-white rounded-xl font-medium cursor-pointer ${isBlocked ? "bg-green-600" : "bg-red-600"}`}
                >
                  {isBlocked ? "Unblock" : "Confirm"}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {!selectedUser ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8 mt-4">
              <h1 className="text-2xl font-semibold text-[#0f2f1d]">
                User Management
              </h1>
              <p className="text-gray-700 font-light">
                Manage all platform users
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <div className="overflow-x-auto">
                <UserTable onViewDetails={(id) => setSelectedUser(id)} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-4"
          >
            <button
              onClick={() => {
                setSelectedUser(null);
                setActiveTab("Details");
              }}
              className="mb-6 p-2 hover:bg-gray-100 rounded-full text-gray-400 cursor-pointer"
            >
              <ArrowLeft size={24} />
            </button>

            <div className="flex items-center border-b border-gray-100 mb-8 overflow-x-auto scrollbar-hide no-scrollbar">
              <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 min-w-max pb-[2px]">
                {/* Tabs Rendering */}
                {tabs.map((tab) => {
                  const tabKey = tab.split(" ").pop()!;
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tabKey)}
                      className={`pb-4 font-bold text-sm whitespace-nowrap relative transition-colors cursor-pointer ${
                        isActive
                          ? "text-[#FF6B35]"
                          : "text-gray-400 hover:text-[#1E293B]"
                      }`}
                    >
                      {tab}
                      {isActive && (
                        <motion.div
                          layoutId="tabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF6B35] rounded-t-full"
                        />
                      )}
                    </button>
                  );
                })}

                {activeTab !== "Details" && (
                  <div className="pb-4">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowModal(true)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-[10px] md:text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                        isBlocked
                          ? "bg-green-100 !text-green-700 border border-green-200"
                          : "bg-[#E10000]"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                      </svg>
                      {isBlocked ? "Unblock User" : "Block User"}
                    </motion.button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "Details" && (
                    <UserDetails user={selectedUserData} />
                  )}
                  {activeTab === "Bookings" && (
                    <UserBookings user={selectedUserData} />
                  )}
                  {activeTab === "Feedback" && <UserFeedback />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UsersPage;
