import React, { useEffect, useState } from 'react'

const mock = [
  {id:1,name:'Arlene McCoy',date:'31 Aug 2023',amount:'$3 230.2',status:'Paid'},
  {id:2,name:'Jacob Jones',date:'30 Aug 2023',amount:'$5 630.5',status:'Unpaid'},
  {id:3,name:'Marvin Butcher',date:'30 Aug 2023',amount:'$4 230.0',status:'Paid'},
  {id:4,name:'Ralph Edwards',date:'29 Aug 2023',amount:'$3 082.2',status:'Paid'},
]

export default function InvoicesTable(){
  const [rows,setRows] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=>{ setRows(mock); setLoading(false); }, 300)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="rounded-2xl bg-[#111827] p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Invoices</h3>
        <div className="text-sm text-gray-400">3 251 invoices</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2">Customer name</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">
            {loading ? (
              <tr><td colSpan="4" className="py-6 text-center">Loading…</td></tr>
            ) : (
              rows.map(r=> (
                <tr key={r.id} className="border-t border-gray-800">
                  <td className="py-3">{r.name}</td>
                  <td className="py-3">{r.date}</td>
                  <td className="py-3">{r.amount}</td>
                  <td className={`py-3 ${r.status==='Paid' ? 'text-green-400' : 'text-yellow-400'}`}>{r.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

