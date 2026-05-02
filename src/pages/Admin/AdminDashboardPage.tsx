import { motion } from "framer-motion";
import { Users, UserCheck, Calendar, DollarSign } from "lucide-react";
import "../../index.css";
import { StatsCard } from "@/components/AdminDashboard/Dashboard/StatsCard";
import { ChartsSection } from "@/components/AdminDashboard/Dashboard/ChartsSection";
import { RecentUsers } from "@/components/AdminDashboard/Dashboard/RecentUsers";

const chartData = Array.from({ length: 7 }).map((_, i) => ({
  name: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" },
  ),
  bookings: Math.floor(Math.random() * 50) + 20,
  revenue: Math.floor(Math.random() * 5000) + 8000,
}));

const AdminDashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F9FAFB] min-h-screen w-full flex flex-col p-4 md:p-8 lg:p-10 overflow-x-hidden"
    >
      {/* --- Responsive Stats Cards Section --- */}
      {/* Change: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value="2,847"
          icon={Users}
          color="orange"
        />
        <StatsCard
          title="Active Sellers"
          value="1,243"
          icon={UserCheck}
          color="orange"
        />
        <StatsCard
          title="Today's Bookings"
          value="47"
          icon={Calendar}
          color="orange"
        />
        <StatsCard
          title="Today's Revenue"
          value="$12,450"
          icon={DollarSign}
          color="orange"
        />
      </div>

      <div className="w-full">
        <ChartsSection data={chartData} />
      </div>

      <div className="mt-8 w-full">
        <RecentUsers />
      </div>
    </motion.div>
  );
};

export default AdminDashboardPage;
