"use client";
import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, Settings, Trash2, Loader2, CheckCircle } from 'lucide-react';

const initialDocuments = [
  { title: 'Refund Policy 2026', type: 'PDF', size: '2.4 MB', synced: '2 hours ago' },
  { title: 'Shipping & Delivery FAQ', type: 'Website URL', size: '--', synced: '1 day ago' },
];

export default function KnowledgeBasePage() {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [documents, setDocuments] = useState(initialDocuments);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadStatus(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Replace with your actual Render URL if different
      const BACKEND_URL = "https://ai-b-2sny.onrender.com"; 
      
      const response = await fetch(`${BACKEND_URL}/api/v1/knowledge/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('success');
        
        // Add new document to list
        const newDoc = {
          title: file.name,
          type: file.name.split('.').pop().toUpperCase(),
          size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
          synced: 'Just now'
        };
        setDocuments(prev => [newDoc, ...prev]);
        
        alert("File uploaded successfully! AI is learning it in the background.");
      } else {
        const error = await response.json();
        setUploadStatus('error');
        alert(`Upload failed: ${error.detail}`);
      }
    } catch (error) {
      console.error(error);
      setUploadStatus('error');
      alert("Upload failed. Make sure the backend is running.");
    } finally {
      setIsUploading(false);
      // Reset input so the same file can be uploaded again if needed
      event.target.value = '';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Knowledge Base</h1>
          <p className="text-slate-500 mt-1">Train your AI by uploading documents and providing links.</p>
        </div>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center gap-2"
          disabled={isUploading}
        >
          {isUploading ? <Loader2 className="animate-spin" size={20} /> : <UploadCloud size={20} />}
          {isUploading ? 'Uploading...' : 'Add Content'}
        </button>
      </div>

      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".pdf,.txt,.md"
        className="hidden"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upload Widget */}
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4">Import Data Source</h3>
            
            <div className="space-y-3">
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className={`w-full flex items-center justify-between p-4 border rounded-lg transition-colors text-left group ${
                  isUploading ? 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed' : 'border-slate-200 hover:border-indigo-500 hover:bg-indigo-50'
                }`}
              >
                <div>
                  <h4 className={`font-semibold ${isUploading ? 'text-slate-500' : 'text-slate-700 group-hover:text-indigo-700'}`}>
                    Upload PDF / DOCX
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {uploadStatus === 'success' ? 'Uploaded successfully!' : 'Upload files directly to train the AI.'}
                  </p>
                </div>
                {isUploading ? (
                  <Loader2 className="text-indigo-500 animate-spin" size={24} />
                ) : uploadStatus === 'success' ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <FileText className="text-slate-400 group-hover:text-indigo-500" size={24} />
                )}
              </button>

              <button className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left group">
                <div>
                  <h4 className="font-semibold text-slate-700 group-hover:text-indigo-700">Sync Website</h4>
                  <p className="text-xs text-slate-500 mt-1">Scrape a public URL or Help Center.</p>
                </div>
                <UploadCloud className="text-slate-400 group-hover:text-indigo-500" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-800">Synced Content</h3>
            </div>
            
            <div className="divide-y divide-slate-100">
              {documents.map((doc, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileText className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{doc.title}</h4>
                      <div className="flex gap-3 text-xs text-slate-500 mt-1">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>Synced {doc.synced}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                      <Settings size={18} />
                    </button>
                    <button className="p-2 text-rose-400 hover:text-rose-600 rounded-lg hover:bg-rose-50">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
