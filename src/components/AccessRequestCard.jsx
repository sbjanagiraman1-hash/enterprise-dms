import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, Check, X, Clock } from 'lucide-react';

export default function AccessRequestCard({ item, onMarkRead, onDelete }) {
  const [status, setStatus] = useState(item.requestStatus || 'pending'); // 'pending', 'approved', 'denied'

  const handleApprove = (e) => {
    e.stopPropagation();
    setStatus('approved');
    if (onMarkRead) onMarkRead(item.id);
  };

  const handleDeny = (e) => {
    e.stopPropagation();
    setStatus('denied');
    if (onMarkRead) onMarkRead(item.id);
  };

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
        <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center shrink-0">
          <KeyRound className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0 pr-3 space-y-1">
          <div className="flex items-center justify-between min-w-0">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug break-words">
              {item.title}
            </h4>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed break-words">
            {item.description}
          </p>

          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium pt-0.5">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="truncate">{item.timestamp}</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {status === 'pending' ? (
              <>
                <button
                  onClick={handleApprove}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-2xs w-full sm:w-auto"
                >
                  <Check className="w-3.5 h-3.5" />
                  Approve
                </button>
                <button
                  onClick={handleDeny}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 w-full sm:w-auto"
                >
                  <X className="w-3.5 h-3.5" />
                  Deny
                </button>
              </>
            ) : status === 'approved' ? (
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60">
                <Check className="w-3.5 h-3.5" /> Approved
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-[11px] font-bold flex items-center gap-1 border border-rose-200 dark:border-rose-800/60">
                <X className="w-3.5 h-3.5" /> Access Denied
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
