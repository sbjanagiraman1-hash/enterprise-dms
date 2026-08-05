import React from 'react';

export default function ShortcutBadge({ keys = [] }) {
  if (!keys || keys.length === 0) return null;

  return (
    <div className="flex items-center gap-1">
      {keys.map((key, index) => (
        <kbd
          key={index}
          className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 shadow-2xs group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
        >
          {key}
        </kbd>
      ))}
    </div>
  );
}
