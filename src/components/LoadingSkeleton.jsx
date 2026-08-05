import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      {/* Folder Skeletons */}
      <div className="space-y-2">
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="grid grid-cols-1 gap-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 shrink-0" />
                <div className="space-y-1.5 w-2/3">
                  <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                  <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* File Skeletons */}
      <div className="space-y-2 pt-2">
        <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-16 bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 shrink-0" />
                <div className="space-y-1.5 w-2/3">
                  <div className="h-3.5 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
                  <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-2/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
