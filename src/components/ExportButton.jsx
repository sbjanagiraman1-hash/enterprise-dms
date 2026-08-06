import React from 'react';
import { Download } from 'lucide-react';

export default function ExportButton() {
  return (
    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-xl shadow-sm transition-all hover:shadow hover:scale-105 active:scale-95 duration-300">
      <Download className="w-4 h-4" />
      Export Report
    </button>
  );
}
