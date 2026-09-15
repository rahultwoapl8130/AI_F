"use client";
import React, { useState } from 'react';
import { Phone, Mail, Clock, CheckCircle, Search, User, Bot, AlertTriangle } from 'lucide-react';

export default function LiveWorkspace() {
  const [activeTicket, setActiveTicket] = useState(1);

  return (
    <div className="flex h-full">
      {/* Left Pane: Queue */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-800">Active Queue</h2>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search tickets..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3].map((ticket) => (
            <div 
              key={ticket}
              onClick={() => setActiveTicket(ticket)}
              className={`p-4 border-b border-slate-100 cursor-pointer transition-colors ${activeTicket === ticket ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-slate-50 border-l-4 border-transparent'}`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-slate-800 text-sm">#102{ticket} - Login Issue</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={12}/> 5m</span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">Customer is unable to login after resetting password...</p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 bg-danger/10 text-danger text-[10px] rounded font-semibold uppercase">High Priority</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Pane: Conversation */}
      <div className="flex-1 flex flex-col bg-slate-50">
        <div className="p-4 bg-white border-b border-slate-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Ticket #102{activeTicket}</h2>
            <p className="text-sm text-slate-500">Sarah Connor • sarah@example.com</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">Transfer</button>
            <button className="px-4 py-2 bg-success hover:bg-success/90 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
              <CheckCircle size={16} /> Mark Resolved
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs text-slate-400 bg-slate-200 px-3 py-1 rounded-full">Chat started by AI Agent at 10:45 AM</span>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
              <User size={16} className="text-slate-600" />
            </div>
            <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
              <p className="text-slate-700 text-sm">Hi, I reset my password but I still can't log in. It says 'Invalid Credentials'.</p>
            </div>
          </div>

          <div className="flex gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-indigo-600" />
            </div>
            <div className="bg-indigo-50 p-4 rounded-xl rounded-tr-none border border-indigo-100 max-w-[80%]">
              <p className="text-indigo-900 text-sm">I'm sorry you're having trouble logging in! I've checked your account and it looks like it was temporarily locked due to multiple failed attempts before the reset. I will transfer you to a human agent who can unlock it immediately.</p>
            </div>
          </div>

          <div className="flex flex-col items-center my-6">
            <span className="text-xs text-warning bg-warning/10 px-3 py-1 rounded-full flex items-center gap-2">
              <AlertTriangle size={12} /> Escalated to Human Agent
            </span>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-200">
          <div className="relative">
            <textarea 
              placeholder="Type your reply to Sarah..." 
              className="w-full p-3 pr-24 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 resize-none h-24"
            ></textarea>
            <button className="absolute bottom-3 right-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right Pane: AI Copilot */}
      <div className="w-80 bg-white border-l border-slate-200 p-6 overflow-y-auto hidden lg:block">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Bot size={16} /> AI Copilot
        </h3>
        
        <div className="mb-8">
          <h4 className="text-slate-800 font-semibold mb-2">Suggested Reply</h4>
          <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-sm text-indigo-900 mb-2">
            "Hi Sarah, I've manually unlocked your account. You should now be able to log in with your new password. Let me know if it works!"
          </div>
          <button className="text-xs text-indigo-600 font-medium hover:underline">Use this reply</button>
        </div>

        <div>
          <h4 className="text-slate-800 font-semibold mb-2">Relevant Knowledge</h4>
          <div className="p-4 border border-slate-200 rounded-lg mb-3 hover:border-indigo-300 cursor-pointer transition-colors">
            <h5 className="text-sm font-semibold text-slate-700 mb-1">Account Lockout Policy</h5>
            <p className="text-xs text-slate-500 line-clamp-3">Accounts are locked after 5 consecutive failed login attempts. An admin must manually unlock the account via the user management dashboard...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
