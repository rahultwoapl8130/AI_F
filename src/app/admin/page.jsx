"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Users, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const resolutionData = [
  { name: 'Solved by AI', value: 455, color: '#10B981' },
  { name: 'Routed to Team', value: 194, color: '#F59E0B' },
  { name: 'Abandoned', value: 193, color: '#64748B' },
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Overview Dashboard</h1>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">AI Involvement</h3>
            <Users className="text-indigo-500" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">54%</p>
          <p className="text-sm text-slate-500 mt-1">455 of 842 total</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Solved by AI</h3>
            <CheckCircle className="text-success" size={20} />
          </div>
          <p className="text-3xl font-bold text-success">261</p>
          <p className="text-sm text-slate-500 mt-1">31% resolution rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Routed to Team</h3>
            <Clock className="text-warning" size={20} />
          </div>
          <p className="text-3xl font-bold text-warning">194</p>
          <p className="text-sm text-slate-500 mt-1">23% needed human</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium">Avg CSAT Score</h3>
            <AlertTriangle className="text-indigo-500" size={20} />
          </div>
          <p className="text-3xl font-bold text-indigo-500">4.3/5</p>
          <p className="text-sm text-slate-500 mt-1">From 78 rated chats</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Resolution Breakdown Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Resolution Breakdown</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resolutionData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resolutionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {resolutionData.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Performance Stats */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-6">AI vs Human Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600 font-medium">First Response Time</span>
              <div className="flex gap-4 text-sm">
                <span className="text-indigo-600 font-bold">&lt; 1 min (AI)</span>
                <span className="text-slate-500">23 min (Human)</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600 font-medium">Availability</span>
              <div className="flex gap-4 text-sm">
                <span className="text-indigo-600 font-bold">24/7 (AI)</span>
                <span className="text-slate-500">Business Hrs (Human)</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600 font-medium">Resolution Rate</span>
              <div className="flex gap-4 text-sm">
                <span className="text-indigo-600 font-bold">31% (AI)</span>
                <span className="text-slate-500">92% (Human)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
