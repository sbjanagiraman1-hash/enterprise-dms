import React from 'react';
import { UploadCloud, UserPlus, FolderPlus } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Quick Actions</h3>
      
      <div className="space-y-4 flex-1">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm shadow-blue-500/20 hover:shadow hover:scale-[1.02] active:scale-[0.98]">
          <UploadCloud className="w-5 h-5" /> Upload File
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all hover:bg-blue-50 dark:hover:bg-blue-500/10">
          <UserPlus className="w-5 h-5" /> Invite User
        </button>
        
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-xl transition-all hover:bg-blue-50 dark:hover:bg-blue-500/10">
          <FolderPlus className="w-5 h-5" /> New Department
        </button>
      </div>
    </div>
  );
}
