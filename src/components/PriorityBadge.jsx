import React from 'react';
import { cn } from '../utils/cn';
import { AlertCircle, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

export default function PriorityBadge({ priority, className }) {
  const styles = {
    'High': 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20',
    'Medium': 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20',
    'Low': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
  };

  const icons = {
    'High': <AlertCircle className="w-3.5 h-3.5" />,
    'Medium': <ArrowUpCircle className="w-3.5 h-3.5" />,
    'Low': <ArrowDownCircle className="w-3.5 h-3.5" />
  };

  return (
    <span className={cn("flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold", styles[priority] || styles['Low'], className)}>
      {icons[priority]}
      {priority}
    </span>
  );
}
