import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock } from 'lucide-react';

export default function CommentNotificationCard({ item, onMarkRead }) {
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
        {/* User Avatar */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
          {item.avatarInitials || 'MK'}
        </div>

        <div className="flex-1 min-w-0 pr-3 space-y-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {item.authorName || 'Michael Chen'}
            </span>
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-1.5 py-0.2 rounded">
              @mentioned you
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 break-words">
            &quot;{item.commentText}&quot;
          </p>

          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium pt-0.5">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{item.timestamp}</span>
            <span>•</span>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Reply</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
