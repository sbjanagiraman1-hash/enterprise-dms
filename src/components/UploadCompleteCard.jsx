import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Folder, ExternalLink } from 'lucide-react';

export default function UploadCompleteCard({ item, onMarkRead }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      onClick={() => onMarkRead && onMarkRead(item.id)}
      className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative group ${
        !item.isRead
          ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/80 shadow-2xs'
          : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800'
      }`}
    >
      {!item.isRead && (
        <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
      )}

      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0 pr-3 space-y-1">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug break-words">
            {item.title}
          </h4>

          <p className="text-xs text-slate-600 dark:text-slate-400 break-words">
            {item.description}
          </p>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-50 dark:bg-slate-800/60 px-2 py-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50 w-fit max-w-full">
            <Folder className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">{item.destinationPath || '/Shared/Q3_Assets'}</span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-slate-400 font-medium">{item.timestamp}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Navigating to destination directory: ${item.destinationPath || '/Shared/Q3_Assets'}`);
              }}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
            >
              Open Folder <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
