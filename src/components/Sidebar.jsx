"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, MessageSquare, Ticket, BookOpen, Settings, LogOut, Activity, Bot } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Live Workspace', href: '/admin/workspace', icon: MessageSquare },
    { name: 'Command Center', href: '/admin/command-center', icon: Activity },
    { name: 'AI Playground', href: '/admin/playground', icon: Bot },
    { name: 'Tickets', href: '/admin/tickets', icon: Ticket },
    { name: 'Knowledge Base', href: '/admin/knowledge', icon: BookOpen },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen flex flex-col shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-500 flex items-center gap-2">
          <MessageSquare className="text-indigo-500" />
          AI Support
        </h2>
      </div>

      <nav className="flex-1 mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-slate-700">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
