import React from 'react';
import { motion } from 'framer-motion';

export default function NotificationTabs({
  activeTab,
  onSelectTab,
  counts = { all: 0, unread: 0, mentions: 0 },
}) {
  const tabs = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'unread', label: 'Unread', count: counts.unread },
    { id: 'mentions', label: 'Mentions', count: counts.mentions },
  ];

  return (
    <div className="px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all relative flex items-center justify-center gap-1.5 ${
              isActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-extrabold ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            )}

            {isActive && (
              <motion.div
                layoutId="activeNotificationTab"
                className="absolute inset-0 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 rounded-xl -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
