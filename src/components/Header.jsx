import React from "react";
const avatar = "/download.jpg";

export default function Header({ theme, setTheme, setIsOpen }) {
  return (
    <header className="flex items-center justify-between">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-2xl mr-3"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <h2 className="text-3xl font-bold text-white">Overview</h2>

      <div className="flex items-center gap-3">
        <input
          className="hidden md:block rounded-md px-3 py-2 bg-[#0f1720]/20 text-gray-200"
          placeholder="Search here..."
        />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md bg-white/10"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

