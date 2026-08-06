import React from 'react';
import { Search, X } from 'lucide-react';

export default function NotificationSearch({ value, onChange, onClear }) {
  return (
    <div className="px-4 py-2.5 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search notifications..."
          className="w-full pl-9 pr-8 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-2 p-0.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
