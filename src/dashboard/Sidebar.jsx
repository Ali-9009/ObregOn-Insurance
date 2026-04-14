import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Policy", icon: <FileText size={20} />, path: "/policy" },
    { name: "Billing", icon: <CreditCard size={20} />, path: "/billing" },
    { name: "Setting", icon: <Settings size={20} />, path: "/setting" },
  ];

  const linkClass =
    "w-full py-2 px-3 rounded-full flex items-center gap-2 text-sm";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* MOBILE + TABLET TOGGLE (NORMAL FLOW, NOT FIXED) */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white p-2 rounded-sm shadow-md"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full bg-[#fbfbfb] rounded-xl p-6 shadow-md
          w-64 transform transition-transform duration-300 z-50 overflow-auto

          ${open ? "translate-x-0" : "-translate-x-full"}

          lg:relative lg:translate-x-0 lg:block lg:h-auto lg:shadow-none
        `}
      >
        {/* PROFILE */}
        <div className="flex items-center gap-3 mb-6 border border-(--primary-color) rounded-full p-1">
          <div className="w-12 h-12 text-3xl rounded-full bg-(--primary-color) text-white flex items-center justify-center font-bold">
            C
          </div>
          <div>
            <p className="text-sm font-semibold">Carlos Fonte</p>
            <p className="text-xs text-gray-500">example@gmail.com</p>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${linkClass} ${isActive
                  ? "bg-(--primary-color) text-white"
                  : "hover:bg-gray-100 text-gray-700"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          <button className="flex items-center gap-2 text-(--primary-color) pt-4">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}