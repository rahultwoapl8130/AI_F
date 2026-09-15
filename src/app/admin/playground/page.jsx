"use client";
import React, { useState } from 'react';
import { Send, Bot, User, Paperclip, MoreVertical, Zap } from 'lucide-react';

export default function AIPlayground() {
  const [inputText, setInputText] = useState('');

  return (
    <div className="h-full flex flex-col bg-[#0B0D17] text-slate-200 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-slate-800 bg-[#0F121F]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Bot size={20} className="text-indigo-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Vortex-7 Deep Intelligence</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">Active • Low Latency</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 bg-[#1C1F2E] border border-slate-700 rounded-full text-xs font-medium text-slate-300 flex items-center gap-2">
            <Zap size={14} className="text-indigo-400" /> 500 Credits
          </div>
          <button className="p-2 hover:bg-[#1C1F2E] rounded-md transition-colors text-slate-400">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        
        {/* AI Message */}
        <div className="flex gap-4 max-w-4xl">
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <Bot size={16} className="text-indigo-400" />
          </div>
          <div>
            <div className="bg-[#1C1F2E] p-4 rounded-2xl rounded-tl-sm border border-slate-700/50 text-sm text-slate-300 leading-relaxed">
              Hello! I am the TechMart Support Orchestrator powered by Vortex-7. How can I assist you with your customer support automation today?
            </div>
            <div className="text-[10px] text-slate-500 mt-2 ml-1">09:41 AM</div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-4 max-w-4xl ml-auto flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
            <User size={16} className="text-slate-400" />
          </div>
          <div>
            <div className="bg-indigo-600 p-4 rounded-2xl rounded-tr-sm text-sm text-white leading-relaxed shadow-lg shadow-indigo-900/20">
              Can you help me outline a strategy for handling refund requests automatically?
            </div>
            <div className="text-[10px] text-slate-500 mt-2 mr-1 text-right">09:42 AM</div>
          </div>
        </div>

        {/* AI Message */}
        <div className="flex gap-4 max-w-4xl">
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <Bot size={16} className="text-indigo-400" />
          </div>
          <div>
            <div className="bg-[#1C1F2E] p-4 rounded-2xl rounded-tl-sm border border-slate-700/50 text-sm text-slate-300 leading-relaxed">
              <p className="mb-4">Certainly! Handling refund requests automatically requires a mix of policy verification, transactional access, and secure human-handoff rules. Here's a structural outline:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Intent Recognition:</strong> Detect phrases like "I want my money back" or "Return this item".</li>
                <li><strong>Policy Check:</strong> Query the CRM to ensure the order is within the 30-day return window.</li>
                <li><strong>Condition Assessment:</strong> Ask the user for the reason (e.g., damaged, wrong item).</li>
                <li><strong>Action/Handoff:</strong> If policy allows, trigger the Stripe refund API. If edge case, route to a human agent.</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-500 mt-2 ml-1">09:42 AM</div>
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="p-8 pt-0">
        <div className="max-w-4xl mx-auto bg-[#1C1F2E] border border-slate-700 rounded-xl p-2 flex items-center gap-3 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Paperclip size={20} />
          </button>
          <input 
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message to Vortex-7 AI..."
            className="flex-1 bg-transparent border-none text-sm text-white focus:outline-none focus:ring-0 placeholder-slate-500"
          />
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            <Send size={16} /> Send
          </button>
        </div>
        <div className="text-center mt-3 text-[10px] font-medium text-slate-500 uppercase tracking-widest">
          Powered by Vortex-7 Deep Intelligence v7.0.2
        </div>
      </div>

    </div>
  );
}
