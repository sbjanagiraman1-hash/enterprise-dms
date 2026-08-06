import React from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';

export default function ApprovalFilters({ onClear }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        <Filter className="w-4 h-4 text-slate-400" />
        Filters
      </div>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Department
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Priority
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Status
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Owner
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Date
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button 
        onClick={onClear}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors ml-auto sm:ml-0"
      >
        <X className="w-4 h-4" />
        Clear Filters
      </button>
    </div>
  );
}
