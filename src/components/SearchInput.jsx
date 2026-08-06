import React from 'react';
import { Search, X } from 'lucide-react';
import ShortcutBadge from './ShortcutBadge';

export default function SearchInput({
  value,
  onChange,
  onClear,
  inputRef,
  onKeyDown,
}) {
  return (
    <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-slate-200/80 dark:border-slate-800">
      <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mr-3" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search files, folders, or actions..."
        className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base sm:text-lg font-medium focus:outline-none"
        aria-label="Search files, folders, or actions"
      />

      <div className="flex items-center gap-2 shrink-0 ml-2">
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Clear search (Esc)"
            aria-label="Clear search input"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="hidden sm:block">
          <ShortcutBadge keys={value ? ['Esc'] : ['Ctrl', 'K']} />
        </div>
      </div>
    </div>
  );
}
