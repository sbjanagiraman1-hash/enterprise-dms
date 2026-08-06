import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function MobileHeader({ onSearchClick }) {
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
      {/* Brand Logo & Title */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
          G
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 dark:text-white text-sm leading-none">
            Global DMS
          </span>
          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
            Enterprise Mobile
          </span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onSearchClick}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Search mobile files"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        </button>

        {/* User Profile Avatar */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center shadow-sm ml-1 border border-white/20">
          SJ
        </div>
      </div>
    </div>
  );
}
