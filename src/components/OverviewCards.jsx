import React, { useMemo } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts'

const salesData = [
  { day:'Sun', value:2000 },
  { day:'Mon', value:4000 },
  { day:'Tue', value:7000 },
  { day:'Wed', value:9000 },
  { day:'Thu', value:15000 },
  { day:'Fri', value:8000 },
  { day:'Sat', value:6000 }
]

export default function OverviewCards(){
  const aiData = useMemo(() => Array.from({length:30}, (_,i) => ({ day: i+1, value: Math.floor(5000 + Math.sin(i/3) * 15000 + Math.random()*4000) })), [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="rounded-2xl bg-[#E6DAFF] p-6">
        <h3 className="font-semibold mb-2">Profit</h3>
        <div className="w-full flex justify-center">
         <img src="/profit.jpeg" className="w-20 h-22 object-contain"alt="profit"/>
        </div>
        <p className="text-sm text-gray-700 mb-4">+14% Since last week</p>
        <div className="text-3xl font-bold">$12 895.5</div>
      </div>

      <div className="rounded-2xl bg-[#111827] p-6 text-white">
        <h3 className="font-semibold mb-2">Sales Report</h3>
        <div style={{width:'100%', height:150}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="value" radius={[6,6,0,0]} fill="#FB923C" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl bg-[#111827] p-6 text-white">
        <h3 className="font-semibold mb-2">Analytical AI</h3>
        <div style={{width:'100%', height:150}}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={aiData}>
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line dataKey="value" stroke="#8B5CF6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
