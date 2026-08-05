import React from 'react';
import { Layers } from 'lucide-react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
      <div>
        <div className="flex items-center gap-3 mb-1.5">
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
            <Layers className="w-5 h-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl ml-11">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-2 self-start md:self-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          DMS Operational
        </span>
      </div>
    </div>
  );
}
