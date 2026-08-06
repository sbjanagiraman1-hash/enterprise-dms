import React from 'react';
import { Filter, ChevronDown, Download, RotateCcw } from 'lucide-react';

export default function UserFilters({ onRefresh }) {
  return (
    <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium shadow-sm text-slate-700 dark:text-slate-300">
        <Filter className="w-4 h-4 text-slate-400" />
        Filters
      </div>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Role
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Department
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Status
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      
      <div className="hidden md:flex items-center gap-3 ml-auto">
        <button 
          onClick={onRefresh}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Refresh
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>
    </div>
  );
}
