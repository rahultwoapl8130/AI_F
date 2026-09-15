"use client";
import React from 'react';
import { Clock, AlertCircle, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function CommandCenter() {
  return (
    <div className="min-h-full bg-[#11111D] text-white p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-100">Live KPIs & Command Center</h1>
        <div className="flex items-center gap-2 text-sm bg-[#1E1E2E] px-3 py-1.5 rounded-md border border-[#2A2A3D]">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-slate-300">Live Updates</span>
        </div>
      </div>

      {/* Top Main Panel */}
      <div className="bg-[#1C1C2C] border border-[#2A2A3D] rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Created Today (Bar Chart simulation) */}
          <div>
            <h3 className="text-slate-400 text-sm mb-4 font-medium">Tickets created today</h3>
            <div className="h-32 flex items-end gap-2 border-b border-[#2A2A3D] pb-2">
              <div className="w-6 bg-cyan-500 h-[20%] rounded-t-sm"></div>
              <div className="w-6 bg-cyan-500 h-[80%] rounded-t-sm"></div>
              <div className="w-6 bg-cyan-500 h-[10%] rounded-t-sm"></div>
              <div className="w-6 bg-cyan-500 h-[40%] rounded-t-sm"></div>
              <div className="w-6 bg-cyan-500 h-[15%] rounded-t-sm"></div>
              <div className="w-6 bg-cyan-500 h-[5%] rounded-t-sm"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
            </div>
          </div>

          {/* Open Tickets by Priority */}
          <div>
            <h3 className="text-slate-400 text-sm mb-4 font-medium">Open tickets by priority</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Urgent</span>
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="w-full bg-[#2A2A3D] h-1.5 rounded-full">
                  <div className="bg-rose-500 h-1.5 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">High</span>
                  <span className="text-white font-bold">7</span>
                </div>
                <div className="w-full bg-[#2A2A3D] h-1.5 rounded-full">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Normal</span>
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="w-full bg-[#2A2A3D] h-1.5 rounded-full">
                  <div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLA Breaches */}
          <div>
            <h3 className="text-slate-400 text-sm mb-4 font-medium">Tickets nearing SLA breach</h3>
            <div className="space-y-3">
              {[
                { subj: 'Refund issued incorrect...', assignee: 'Alex', time: 'in 2 minutes' },
                { subj: 'Issue with my recent or...', assignee: 'Jon', time: 'in 2 minutes' },
                { subj: 'Order was partially del...', assignee: 'Kat', time: 'in 13 minutes' },
                { subj: 'Need support with bil...', assignee: 'Jim', time: 'in 13 minutes' },
              ].map((ticket, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="text-slate-300 truncate w-32">{ticket.subj}</div>
                  <div className="text-slate-400 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px]">{ticket.assignee[0]}</div> {ticket.assignee}</div>
                  <div className="text-rose-400 font-medium">{ticket.time}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Chat Stats */}
        <div className="bg-[#1C1C2C] border border-[#2A2A3D] border-l-4 border-l-cyan-500 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle size={16} className="text-cyan-500" />
            <h3 className="text-slate-300 font-medium">Chat</h3>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-white">12</span>
              <span className="text-slate-400 mb-1">sec</span>
            </div>
            <p className="text-xs text-slate-500">Average wait time</p>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-[#2A2A3D]">
            <div>
              <p className="text-xl font-bold text-white">6</p>
              <p className="text-xs text-slate-500">Chats waiting</p>
            </div>
            <AlertCircle size={20} className="text-rose-500" />
          </div>
        </div>

        {/* Email Stats */}
        <div className="bg-[#1C1C2C] border border-[#2A2A3D] rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <Mail size={16} className="text-slate-400" />
            <h3 className="text-slate-300 font-medium">Email</h3>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-white">1</span>
              <span className="text-slate-400 mb-1">h</span>
              <span className="text-3xl font-bold text-white">13</span>
              <span className="text-slate-400 mb-1">m</span>
            </div>
            <p className="text-xs text-slate-500">First reply time</p>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-[#2A2A3D]">
            <div>
              <p className="text-xl font-bold text-emerald-400">67%</p>
              <p className="text-xs text-slate-500">1-touch ticket rate</p>
            </div>
            <CheckCircle size={20} className="text-emerald-500" />
          </div>
        </div>

        {/* Voice/Talk Stats */}
        <div className="bg-[#1C1C2C] border border-[#2A2A3D] rounded-lg p-5">
          <div className="flex items-center gap-2 mb-2">
            <Phone size={16} className="text-slate-400" />
            <h3 className="text-slate-300 font-medium">Talk</h3>
          </div>
          <div className="mb-4">
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-emerald-400">7</span>
              <span className="text-slate-400 mb-1">sec</span>
            </div>
            <p className="text-xs text-slate-500">Average wait time</p>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-[#2A2A3D]">
            <div>
              <p className="text-xl font-bold text-white">3</p>
              <p className="text-xs text-slate-500">Calls waiting</p>
            </div>
            <AlertCircle size={20} className="text-rose-500" />
          </div>
        </div>

        {/* CSAT Gauge */}
        <div className="bg-[#1C1C2C] border border-[#2A2A3D] rounded-lg p-5 flex flex-col items-center justify-center relative">
          <h3 className="text-slate-300 font-medium w-full text-left mb-4">CSAT</h3>
          <div className="relative w-32 h-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-emerald-500 border-b-transparent border-r-transparent border-l-slate-700 transform rotate-45"></div>
          </div>
          <p className="text-3xl font-bold text-white mt-2">100%</p>
          <div className="absolute bottom-4 left-4 text-xs text-slate-500">0%</div>
          <div className="absolute bottom-4 right-4 text-xs text-slate-500">100%</div>
        </div>

      </div>
    </div>
  );
}
