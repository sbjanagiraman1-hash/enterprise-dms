import React from 'react';
import { cn } from '../utils/cn';

export default function InheritedToggle({ isInherited, onChange }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-border px-4 py-3 rounded-xl shadow-sm w-full sm:w-auto">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">Inherit Permissions</span>
        <span className="text-xs text-slate-500">From parent folder</span>
      </div>
      <button 
        type="button"
        role="switch"
        aria-checked={isInherited}
        onClick={() => onChange(!isInherited)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ml-auto sm:ml-4",
          isInherited ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
        )}
      >
        <span className="sr-only">Inherit permissions</span>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out",
            isInherited ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}
