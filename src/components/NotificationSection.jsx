import React from 'react';

export default function NotificationSection({ title, count, children }) {
  if (count === 0) return null;

  return (
    <div className="space-y-2 py-2">
      <div className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs px-4 py-1.5 border-y border-slate-100 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center justify-between">
        <span>{title}</span>
        {count !== undefined && (
          <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-mono">
            {count}
          </span>
        )}
      </div>
      <div className="px-3 space-y-2.5">{children}</div>
    </div>
  );
}
