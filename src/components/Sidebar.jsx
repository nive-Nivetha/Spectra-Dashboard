import React from "react";
import {
  FaThLarge,
  FaChartBar,
  FaAddressBook,
  FaEnvelope,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* BACKDROP FOR MOBILE */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          w-64
          bg-[#0f1720]
          text-white
          p-5
          rounded-r-2xl lg:rounded-2xl
          transform transition-transform duration-300
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo / Close Button */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
              S
            </div>
            <div className="font-bold text-xl">SPECTRA</div>
          </div>

          {/* Mobile close button */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 text-gray-300 flex-1">
          <div className="p-3 rounded-lg bg-[#111827] flex items-center gap-3 cursor-pointer">
            <FaThLarge /> <span>Dashboard</span>
          </div>

          <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#1a2433] transition">
            <FaChartBar /> <span>Analytics</span>
          </div>

          <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#1a2433] transition">
            <FaAddressBook /> <span>Contacts</span>
          </div>

          <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#1a2433] transition">
            <FaEnvelope /> <span>Mail</span>
          </div>

          <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#1a2433] transition">
            <FaCalendarAlt /> <span>Calendar</span>
          </div>

          <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-[#1a2433] transition">
            <FaCog /> <span>Settings</span>
          </div>
        </nav>

        {/* Logout */}
        <div className="pt-6 border-t border-gray-700 mt-auto flex">
          <div className="flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer ml-0">
            <FaSignOutAlt /> <span>Log out</span>
          </div>
        </div>

      </aside>
    </>
  );
}

