import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, HardDrive, ArrowUpRight } from 'lucide-react';

export default function StorageWarningCard({ item, onMarkRead }) {
  const percent = item.progressPercent || 88;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      onClick={() => onMarkRead && onMarkRead(item.id)}
      className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative group ${
        !item.isRead
          ? 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/80 shadow-2xs'
          : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
      }`}
    >
      {!item.isRead && (
        <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
      )}

      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0 pr-3 space-y-1.5">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug break-words">
            {item.title}
          </h4>

          <p className="text-xs text-slate-600 dark:text-slate-400 break-words">
            {item.description}
          </p>

          {/* Progress bar */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-slate-600 dark:text-slate-400">Usage Quota</span>
              <span className="text-amber-600 dark:text-amber-400">{percent}% Used ({item.usedAmount || '44.0 TB / 50.0 TB'})</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-medium">{item.timestamp}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert('Opening storage expansion quota wizard...');
              }}
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5"
            >
              Expand Quota <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
