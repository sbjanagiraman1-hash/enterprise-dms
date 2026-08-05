import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  onClear,
  onOpenFilter,
  hasActiveFilter,
}) {
  return (
    <div className="px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
      <div className="relative flex-1 flex items-center">
        <Search className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search files & folders..."
          className="w-full pl-9 pr-8 py-2 bg-slate-100 dark:bg-slate-800/90 rounded-xl text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-2.5 p-0.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <button
        onClick={onOpenFilter}
        className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors relative ${
          hasActiveFilter
            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400'
            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-750'
        }`}
        aria-label="Filter items"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {hasActiveFilter && (
          <span className="w-2 h-2 rounded-full bg-blue-600 absolute -top-0.5 -right-0.5 ring-2 ring-white dark:ring-slate-900" />
        )}
      </button>
    </div>
  );
}
