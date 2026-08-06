import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ totalItems, itemsPerPage = 10 }) {
  return (
    <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-800/20 flex flex-col sm:flex-row items-center justify-between mt-auto gap-4">
      <span className="text-sm text-slate-500 text-center sm:text-left">
        Showing <span className="font-semibold text-slate-900 dark:text-slate-100">1</span> to <span className="font-semibold text-slate-900 dark:text-slate-100">{Math.min(itemsPerPage, totalItems)}</span> of <span className="font-semibold text-slate-900 dark:text-slate-100">{totalItems}</span> results
      </span>
      <div className="flex items-center gap-2">
        <button disabled className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-border rounded-lg bg-white dark:bg-slate-900 text-slate-400 disabled:opacity-50 transition-colors shadow-sm cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <div className="hidden sm:flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">3</button>
          <span className="text-slate-400 px-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors">12</button>
        </div>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-border rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm text-slate-700 dark:text-slate-300">
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
