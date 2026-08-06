import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../utils/cn';

export default function PermissionCheckbox({ checked, type, onChange, disabled }) {
  const isInherited = type === 'Inherited';

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center w-5 h-5 rounded-md border shadow-sm transition-all duration-200 cursor-pointer",
        checked && !isInherited && "bg-blue-600 border-blue-600 text-white",
        checked && isInherited && "bg-blue-100 border-blue-300 text-blue-600 dark:bg-blue-900/50 dark:border-blue-700",
        !checked && "bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-700",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && !isInherited && !checked && "hover:border-blue-500"
      )}
      onClick={() => {
        if (!disabled && !isInherited) {
          onChange(!checked);
        }
      }}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled || isInherited}
      tabIndex={disabled || isInherited ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (!disabled && !isInherited) onChange(!checked);
        }
      }}
    >
      {checked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
    </div>
  );
}
