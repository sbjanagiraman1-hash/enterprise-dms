import React from 'react';
import { ArrowRight, FileText, Image as ImageIcon } from 'lucide-react';

export default function ApprovalsCard() {
  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900 dark:text-white">Pending Approvals</h3>
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold">
          3
        </span>
      </div>
      
      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Legal_Contract_v4.docx</p>
              <p className="text-xs text-slate-500">From Jane Doe</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Campaign_Hero_Banner.png</p>
              <p className="text-xs text-slate-500">From Marketing</p>
            </div>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group">
        Go To Approvals Queue
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
