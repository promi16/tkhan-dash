import React from "react";
import {
  LayoutGrid,
  Users,
  CheckCircle,
  CreditCard,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, Variants } from "framer-motion";

export interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface SidebarProps {
  onItemClick?: () => void;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutGrid, label: "Dashboard", href: "/admin-dashboard/dashboard" },
  { icon: Users, label: "Users", href: "/admin-dashboard/users" },
  {
    icon: CheckCircle,
    label: "Seller Approval",
    href: "/admin-dashboard/seller-approval",
  },
  { icon: CreditCard, label: "Payments", href: "/admin-dashboard/payments" },
  { icon: HelpCircle, label: "Support", href: "/admin-dashboard/support" },
];

const AdminSidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const location = useLocation();

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={mobileMenuVariants}
      className="flex flex-col bg-white border-r border-b border-gray-100 font-inter overflow-hidden shrink-0 w-full mb-20"
      style={{
        boxShadow: "4px 4px 15px rgba(0,0,0,0.02)",
        height: "auto",
        minHeight: "799px",
      }}
    >
      <div className="p-8 mb-2">
        <Link to="/admin-dashboard/dashboard">
          <div className="flex flex-col items-start">
            <h1 className="text-[#FF6B35] text-[28px] font-semibold tracking-tight leading-none">
              Karoo
            </h1>
            <p className="text-[13px] font-semibold text-gray-700 mt-1 tracking-wider">
              Admin Panel
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={onItemClick}
              className="relative block"
            >
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 px-5 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "text-[#FF6B35] bg-[#FFEDE6]"
                    : "text-gray-700 hover:bg-[#FF6B35]/5 hover:text-[#FF6B35]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#FF6B35] rounded-l-full"
                  />
                )}
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={
                    isActive
                      ? "text-[#FF6B35] cursor-pointer"
                      : "text-gray-800 group-hover:text-[#FF6B35] cursor-pointer"
                  }
                />
                <span className="text-[15px] font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <hr className="border-gray-100 mx-6" />
        <div className="p-4">
          <div className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-2xl relative">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] font-bold overflow-hidden border border-[#FF6B35]/20">
              A
            </div>
            <div className="overflow-hidden text-left">
              <p className="text-sm font-medium text-gray-800 truncate">
                Admin User
              </p>
              <p className="text-[11px] text-gray-400 truncate">
                admin@platform.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
