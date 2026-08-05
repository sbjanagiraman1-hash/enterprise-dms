import React from 'react';
import { motion } from 'framer-motion';
import ShortcutBadge from './ShortcutBadge';
import { ArrowRight } from 'lucide-react';

export default function CommandItem({
  item,
  isSelected,
  onSelect,
  onMouseEnter,
  searchQuery = '',
}) {
  // Highlight matching query text
  const renderHighlightedText = (text) => {
    if (!searchQuery.trim() || !text) return text;
    const parts = text.split(new RegExp(`(${searchQuery.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark
          key={index}
          className="bg-blue-100 dark:bg-blue-900/80 text-blue-900 dark:text-blue-100 font-semibold px-0.5 rounded"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const IconComponent = item.icon;

  return (
    <motion.div
      role="option"
      aria-selected={isSelected}
      onClick={() => onSelect(item)}
      onMouseEnter={onMouseEnter}
      whileTap={{ scale: 0.995 }}
      className={`group flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-150 text-sm font-medium ${
        isSelected
          ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 hover:text-slate-900 dark:hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 pr-2">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
            isSelected
              ? 'bg-blue-500/30 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50'
          }`}
        >
          <IconComponent className="w-4 h-4" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="truncate leading-snug">
            {renderHighlightedText(item.title)}
          </span>
          {item.subtitle && (
            <span
              className={`text-xs truncate ${
                isSelected
                  ? 'text-blue-100'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              {item.subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {item.shortcuts && item.shortcuts.length > 0 && (
          <div className={isSelected ? 'brightness-125 contrast-200' : ''}>
            <ShortcutBadge keys={item.shortcuts} />
          </div>
        )}
        <ArrowRight
          className={`w-4 h-4 transition-transform duration-150 ${
            isSelected
              ? 'text-white translate-x-0.5 opacity-100'
              : 'text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0'
          }`}
        />
      </div>
    </motion.div>
  );
}
