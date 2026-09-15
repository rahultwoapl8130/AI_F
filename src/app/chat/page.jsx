'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ChatInterface() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'agent', type: 'router', text: 'Hello! I am the TechMart Support Orchestrator. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate API call to backend Agent Orchestrator
    setTimeout(() => {
      let responseText = '';
      let agentType = 'router';

      const lowerInput = newUserMessage.text.toLowerCase();
      if (lowerInput.includes('billing') || lowerInput.includes('refund') || lowerInput.includes('pay')) {
        agentType = 'billing';
        responseText = '[Billing Agent] I can help you with your payment and refund inquiries. What is your order number?';
      } else if (lowerInput.includes('broken') || lowerInput.includes('error') || lowerInput.includes('fix') || lowerInput.includes('battery')) {
        agentType = 'technical';
        responseText = '[Technical Agent] I see you need technical assistance. Based on the User Manual, please try restarting the device. Did that help?';
      } else if (lowerInput.includes('complain') || lowerInput.includes('manager') || lowerInput.includes('terrible')) {
        agentType = 'complaint';
        responseText = '[Complaint Agent] I am so sorry to hear about your bad experience. I will escalate this to a manager immediately.';
      } else {
        agentType = 'faq';
        responseText = '[FAQ Agent] We offer standard shipping in 3-5 business days. Can I help you with anything else?';
      }

      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'agent', type: agentType, text: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar: Conversation History */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-bold text-gray-700">TechMart Support</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <button className="w-full text-left px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-md font-medium">
            Current Session
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
            Laptop Battery Issue
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
            Refund Request #1029
          </button>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={handleLogout} className="w-full py-2 text-sm text-red-600 font-medium hover:bg-red-50 rounded-md">
            Logout
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center px-6">
          <h3 className="font-semibold text-gray-800">Chat Interface</h3>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xl px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                {msg.sender === 'agent' && (
                  <div className="text-xs text-gray-400 mb-1 capitalize font-semibold">{msg.type} Agent</div>
                )}
                <div className="text-sm">{msg.text}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 text-gray-500 rounded-lg rounded-bl-none px-4 py-2 shadow-sm text-sm italic">
                Agent is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={sendMessage} className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-black"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
