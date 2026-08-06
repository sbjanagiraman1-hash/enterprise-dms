import React from 'react';
import { cn } from '../utils/cn';

export default function PermissionBadge({ type, className }) {
  const isInherited = type === 'Inherited';
  
  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm",
      isInherited 
        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50" 
        : "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50",
      className
    )}>
      {type}
    </span>
  );
}
