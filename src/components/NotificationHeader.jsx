import React from 'react';
import { Bell, CheckCheck, X } from 'lucide-react';

export default function NotificationHeader({ unreadCount, onMarkAllRead, onClose }) {
  return (
    <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
      <div className="flex items-center gap-2.5 min-w-0 pr-2">
        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 relative shrink-0">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-none truncate">
              Notification Center
            </h2>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-extrabold font-mono shrink-0">
                {unreadCount} New
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-400 font-medium truncate block">
            Real-time audit & system alerts
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="Mark all as read"
          >
            <CheckCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Read All</span>
          </button>
        )}

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close Notification Center"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
