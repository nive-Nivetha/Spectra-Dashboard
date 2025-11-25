import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import clsx from "clsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={clsx("min-h-screen", theme === "dark" ? "dark" : "")}>
      <Routes>
        <Route path="/" element={<Dashboard theme={theme} setTheme={setTheme} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
