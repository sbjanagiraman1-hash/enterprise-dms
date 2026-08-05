import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm space-y-6">
      {/* Skeleton Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="space-y-2">
            <div className="h-5 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
            <div className="h-3.5 w-64 bg-slate-200 dark:bg-slate-800/60 rounded animate-pulse" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-9 w-24 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
          <div className="h-9 w-28 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Skeleton Table Placeholder */}
      <div className="overflow-hidden rounded-xl border border-border/70">
        {/* Table Header Skeleton */}
        <div className="bg-slate-100/70 dark:bg-slate-800/50 px-4 py-3 border-b border-border grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4 h-4 bg-slate-200 dark:bg-slate-700/80 rounded animate-pulse" />
          <div className="col-span-3 h-4 bg-slate-200 dark:bg-slate-700/80 rounded animate-pulse" />
          <div className="col-span-3 h-4 bg-slate-200 dark:bg-slate-700/80 rounded animate-pulse" />
          <div className="col-span-2 h-4 bg-slate-200 dark:bg-slate-700/80 rounded animate-pulse" />
        </div>

        {/* Table Rows Skeletons */}
        {[1, 2, 3].map((row) => (
          <div key={row} className="px-4 py-3.5 border-b border-border/50 last:border-0 grid grid-cols-12 gap-4 items-center">
            {/* User Avatar + Name */}
            <div className="col-span-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse shrink-0" />
              <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800/80 rounded animate-pulse" />
            </div>
            {/* Action/Activity */}
            <div className="col-span-3">
              <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800/70 rounded animate-pulse" />
            </div>
            {/* Time / Date */}
            <div className="col-span-3">
              <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800/60 rounded animate-pulse" />
            </div>
            {/* Status Badge Skeleton */}
            <div className="col-span-2 flex justify-end">
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
