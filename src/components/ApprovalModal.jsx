import React, { useRef } from 'react';
import { X, UploadCloud, Users, FileText } from 'lucide-react';

export default function ApprovalModal({ isOpen, onClose }) {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-card dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">New Approval Request</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Document Name <span className="text-red-500">*</span></label>
              <input required type="text" className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" placeholder="e.g. Q4 Financial Audit" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Department <span className="text-red-500">*</span></label>
                <select required className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none">
                  <option value="">Select Department</option>
                  <option>Finance</option>
                  <option>Legal</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Priority <span className="text-red-500">*</span></label>
                <select className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Approvers <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input required type="text" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none" placeholder="Search users..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Due Date <span className="text-red-500">*</span></label>
                <input required type="date" className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description <span className="text-red-500">*</span></label>
              <textarea required rows={3} className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none resize-none" placeholder="Provide context for this approval..."></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Upload Document <span className="text-red-500">*</span></label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" required />
                <UploadCloud className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">PDF, DOCX up to 50MB</p>
              </div>
            </div>
          </div>
        </form>
        
        <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-900/50 flex justify-end gap-3 shrink-0">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            Create Request
          </button>
        </div>
      </div>
    </div>
  );
}
