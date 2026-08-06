import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  LogIn,
  GitCommit,
  Clock,
  Trash2
} from 'lucide-react';

export default function NotificationCard({ item, onMarkRead, onDelete }) {
  const getNotificationDetails = (type) => {
    switch (type) {
      case 'system':
        return {
          icon: ShieldAlert,
          color: 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/60',
        };
      case 'permission':
        return {
          icon: ShieldCheck,
          color: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/60',
        };
      case 'approval':
        return {
          icon: FileCheck,
          color: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/60',
        };
      case 'login':
        return {
          icon: LogIn,
          color: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/60',
        };
      case 'version':
      default:
        return {
          icon: GitCommit,
          color: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60',
        };
    }
  };

  const details = getNotificationDetails(item.type);
  const Icon = details.icon;

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
        <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${details.color}`}>
          <Icon className="w-4 h-4" />
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

          <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {item.timestamp}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onDelete) onDelete(item.id);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-rose-600"
              title="Delete notification"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
