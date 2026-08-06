import React from 'react';

export default function LoadingSkeleton({ view }) {
  if (view === 'list') {
    return (
      <div className="w-full">
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 rounded-t-xl animate-pulse">
          <div className="col-span-6 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="col-span-2 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="col-span-2 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="col-span-2 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-border items-center animate-pulse">
            <div className="col-span-12 md:col-span-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700"></div>
              <div className="w-48 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="hidden md:block col-span-2">
              <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="hidden md:block col-span-2">
              <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="hidden md:block col-span-2">
              <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full ml-auto"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid View
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-4 shadow-sm animate-pulse">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <div className="w-3/4 h-5 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-16 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
