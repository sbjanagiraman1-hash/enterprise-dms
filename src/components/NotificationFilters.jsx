import React from 'react';

export default function NotificationFilters({ selectedType, onSelectType }) {
  const types = [
    { id: 'all', label: 'All Types' },
    { id: 'request', label: 'Access Requests' },
    { id: 'comment', label: 'Mentions' },
    { id: 'storage', label: 'Storage' },
    { id: 'system', label: 'System Alerts' },
  ];

  return (
    <div className="px-4 py-2 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto custom-scrollbar flex-nowrap shrink-0">
      {types.map((t) => {
        const isSelected = selectedType === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onSelectType(t.id)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
              isSelected
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xs'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
