import React from 'react';
import { cn } from '../utils/cn';

export default function RoleBadge({ role, className }) {
  const styles = {
    'Admin': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800/50',
    'Manager': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800/50',
    'Editor': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400 border-teal-200 dark:border-teal-800/50',
    'Viewer': 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700/50'
  };

  return (
    <span className={cn("px-2.5 py-0.5 rounded-md text-xs font-medium border shadow-sm", styles[role] || styles['Viewer'], className)}>
      {role}
    </span>
  );
}
