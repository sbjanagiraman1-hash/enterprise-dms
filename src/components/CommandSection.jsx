import React from 'react';

export default function CommandSection({ title, count, children }) {
  return (
    <div className="py-2 space-y-1">
      <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        <span>{title}</span>
        {count !== undefined && (
          <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
            {count}
          </span>
        )}
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}
