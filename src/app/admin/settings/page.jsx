"use client";
import React from 'react';
import { Save, Shield, Bell, User } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Admin Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Shield className="text-indigo-500" /> General Configuration
          </h2>
          <p className="text-slate-500 text-sm mt-1">Manage your company details and AI preferences.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
            <input type="text" defaultValue="TechMart Inc." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Support Email Address</label>
            <input type="email" defaultValue="support@techmart.com" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">AI Routing Strategy</label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white">
              <option>AI First (Auto-resolve if confidence > 80%)</option>
              <option>Human First (AI suggests answers to human)</option>
              <option>Balanced (AI handles FAQs, Humans handle billing)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 text-slate-600 bg-slate-100 rounded-lg font-medium hover:bg-slate-200 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Save size={18} /> Save Changes
        </button>
      </div>

    </div>
  );
}
