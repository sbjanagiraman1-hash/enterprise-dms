import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationMenu() {
  return (
    <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
      <Bell className="w-5 h-5" />
      {/* Unread Badge */}
      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
    </button>
  );
}
