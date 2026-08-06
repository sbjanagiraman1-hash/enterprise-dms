import React from 'react';
import { motion } from 'framer-motion';
import { BellOff, RefreshCw } from 'lucide-react';

export default function EmptyNotifications({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-16 px-6 text-center flex flex-col items-center justify-center space-y-3"
    >
      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
        <BellOff className="w-7 h-7" />
      </div>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
        No notifications found
      </h4>
      <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
        You are all caught up! No active notifications match your current tab or search filters.
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-xl hover:bg-blue-100 transition-colors mt-2"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset Search Filters
        </button>
      )}
    </motion.div>
  );
}
