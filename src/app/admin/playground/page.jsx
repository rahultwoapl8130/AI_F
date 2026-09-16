"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Paperclip, MoreVertical, Zap, Loader2 } from 'lucide-react';

export default function AIPlayground() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: 'Hello! I am the TechMart Support Orchestrator powered by NVIDIA Llama 3 & RAG. How can I assist you today?',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputText,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const BACKEND_URL = "https://ai-b-2sny.onrender.com";
      const response = await fetch(`${BACKEND_URL}/api/v1/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content })
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage = {
          role: 'ai',
          content: data.reply,
          details: `Intent: ${data.intent} | Priority: ${data.priority} | Agent: ${data.routed_to}`,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: 'Sorry, I encountered an error connecting to the backend.', time: '' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Network error. Make sure the backend is running.', time: '' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#0B0D17] text-slate-200 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-slate-800 bg-[#0F121F]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Bot size={20} className="text-indigo-400" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">TechMart AI Support Agent</h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">NVIDIA Llama 3 • Live</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 bg-[#1C1F2E] border border-slate-700 rounded-full text-xs font-medium text-slate-300 flex items-center gap-2">
            <Zap size={14} className="text-indigo-400" /> API Connected
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 max-w-4xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
              msg.role === 'user' ? 'bg-slate-800 border-slate-700' : 'bg-indigo-600/20 border-indigo-500/30'
            }`}>
              {msg.role === 'user' ? <User size={16} className="text-slate-400" /> : <Bot size={16} className="text-indigo-400" />}
            </div>
            <div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 rounded-tr-sm text-white shadow-lg shadow-indigo-900/20' 
                  : 'bg-[#1C1F2E] rounded-tl-sm border border-slate-700/50 text-slate-300'
              }`}>
                {msg.content}
                {msg.details && (
                  <div className="mt-3 pt-3 border-t border-slate-700/50 text-xs text-indigo-400 font-mono">
                    {msg.details}
                  </div>
                )}
              </div>
              <div className={`text-[10px] text-slate-500 mt-2 ${msg.role === 'user' ? 'mr-1 text-right' : 'ml-1'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4 max-w-4xl">
             <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center shrink-0 border border-indigo-500/30">
               <Loader2 size={16} className="text-indigo-400 animate-spin" />
             </div>
          </div>
        )}
        <div ref={chatEndRef} />
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
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            placeholder="Type your message to the AI..."
            className="flex-1 bg-transparent border-none text-sm text-white focus:outline-none focus:ring-0 placeholder-slate-500"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !inputText.trim()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:text-slate-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
            Send
          </button>
        </div>
      </div>

    </div>
  );
}
