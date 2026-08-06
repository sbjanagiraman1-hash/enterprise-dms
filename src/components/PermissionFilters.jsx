import React from 'react';
import { Filter, ChevronDown, Plus } from 'lucide-react';

export default function PermissionFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4 w-full">
      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium shadow-sm text-slate-700 dark:text-slate-300">
        <Filter className="w-4 h-4 text-slate-400" />
        Filters
      </div>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Department
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
      
      <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
        Role Type
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500">
        <Plus className="w-4 h-4" />
        Add Filter
      </button>
    </div>
  );
}
