import React from 'react';
import { ChevronRight, Folder } from 'lucide-react';

export default function Breadcrumbs({ paths = [], onSelectPath }) {
  return (
    <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto custom-scrollbar text-xs">
      <button
        onClick={() => onSelectPath(0)}
        className="flex items-center gap-1 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium whitespace-nowrap shrink-0 transition-colors"
      >
        <Folder className="w-3.5 h-3.5 text-blue-500" />
        <span>Root</span>
      </button>

      {paths.map((path, idx) => {
        const isLast = idx === paths.length - 1;
        return (
          <React.Fragment key={path}>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button
              onClick={() => onSelectPath(idx + 1)}
              disabled={isLast}
              className={`whitespace-nowrap font-medium shrink-0 transition-colors ${
                isLast
                  ? 'text-slate-900 dark:text-white font-bold cursor-default'
                  : 'text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
              }`}
            >
              {path}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}
