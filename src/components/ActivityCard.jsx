import React from "react";

export default function ActivityCard() {
  const stats = [
    { label: "Transactions", value: 452, color: "bg-blue-400" },
    { label: "Sales", value: 715, color: "bg-purple-400" },
    { label: "Payouts", value: 412, color: "bg-orange-400" },
    { label: "Reports", value: 128, color: "bg-gray-400" },
  ];

  return (
    <div className="rounded-2xl bg-[#1A1F2B] p-6 text-white shadow-lg">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Activity</h3>
        <button className="text-gray-400 text-xl">⋮</button>
      </div>

      {/* Circular Progress */}
      <div className="relative w-40 h-40 mx-auto my-4">
        {/* Background circle */}
        <svg className="w-full h-full">
          <circle
            cx="80"
            cy="80"
            r="65"
            stroke="#2A3140"
            strokeWidth="12"
            fill="none"
          />
        </svg>

        {/* Gradient arc (orange + purple) */}
        <svg className="w-full h-full absolute top-0 left-0 rotate-[140deg]">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" />  
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          <circle
            cx="80"
            cy="80"
            r="65"
            stroke="url(#grad)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="408"
            strokeDashoffset="240"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">+13%</span>
          <span className="text-sm text-gray-400">Since last week</span>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-6 grid grid-cols-2 gap-y-4">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className={`w-3 h-3 rounded-full ${item.color} mr-3`}></span>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-400">{item.label}</span>
              <span className="font-semibold text-sm">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
