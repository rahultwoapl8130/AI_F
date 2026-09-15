"use client";
import React from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

const tickets = [
  { id: '1021', customer: 'Sarah Connor', subject: 'Refund issued incorrectly', status: 'Open', priority: 'Urgent', date: 'Just now' },
  { id: '1022', customer: 'Jon Snow', subject: 'Issue with my recent order', status: 'In Progress', priority: 'High', date: '12 mins ago' },
  { id: '1023', customer: 'Katniss E.', subject: 'Order was partially delivered', status: 'Open', priority: 'Normal', date: '1 hour ago' },
  { id: '1024', customer: 'Jim Halpert', subject: 'Need support with billing', status: 'Closed', priority: 'Low', date: 'Yesterday' },
  { id: '1025', customer: 'Michael Scott', subject: 'How do I upgrade?', status: 'Closed', priority: 'Normal', date: 'Yesterday' },
];

export default function TicketsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Ticket Management</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
          Create Ticket
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search tickets..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 text-slate-600 border border-slate-300 rounded-lg text-sm bg-white hover:bg-slate-50">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
              <th className="p-4 font-medium">Ticket ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Subject</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Priority</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-sm font-medium text-slate-800">#{ticket.id}</td>
                <td className="p-4 text-sm text-slate-600">{ticket.customer}</td>
                <td className="p-4 text-sm text-slate-800">{ticket.subject}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    ticket.status === 'Open' ? 'bg-amber-100 text-amber-700' :
                    ticket.status === 'In Progress' ? 'bg-indigo-100 text-indigo-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    ticket.priority === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                    ticket.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-500">{ticket.date}</td>
                <td className="p-4 text-slate-400 hover:text-slate-600 cursor-pointer">
                  <MoreHorizontal size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
