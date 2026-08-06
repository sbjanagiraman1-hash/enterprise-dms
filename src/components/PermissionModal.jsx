import React, { useState } from 'react';
import { X, Search, ShieldCheck } from 'lucide-react';

export default function PermissionModal({ isOpen, onClose, onAdd }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-card dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-lg border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]"
        role="dialog"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Add Principal</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <div className="relative mb-6">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search Users, Roles or Departments..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Suggested</h4>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-blue-500 cursor-pointer transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                  HR
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">HR Manager</p>
                  <p className="text-xs text-slate-500">Role • Human Resources</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Select
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-xl hover:border-blue-500 cursor-pointer transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">John Doe</p>
                  <p className="text-xs text-slate-500">User • IT Department</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Select
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-900/50 flex justify-end gap-3 shrink-0">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            Cancel
          </button>
          <button onClick={onAdd} className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            Add Selected
          </button>
        </div>
      </div>
    </div>
  );
}
