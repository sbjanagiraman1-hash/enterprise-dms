import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Share2, Edit3, Download, Trash2, X, FileText, Folder } from 'lucide-react';

export default function BottomSheet({ isOpen, onClose, item, onAction }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const actions = [
    { id: 'preview', label: 'Preview File', icon: Eye, color: 'text-blue-600 dark:text-blue-400' },
    { id: 'share', label: 'Share Access', icon: Share2, color: 'text-emerald-600 dark:text-emerald-400' },
    { id: 'rename', label: 'Rename Item', icon: Edit3, color: 'text-amber-600 dark:text-amber-400' },
    { id: 'download', label: 'Download', icon: Download, color: 'text-sky-600 dark:text-sky-400' },
    { id: 'delete', label: 'Delete Item', icon: Trash2, color: 'text-rose-600 dark:text-rose-400', danger: true },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-40 flex items-end">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Sliding Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-50 w-full bg-white dark:bg-slate-900 rounded-t-3xl p-5 shadow-2xl border-t border-slate-200 dark:border-slate-800 space-y-4"
          >
            {/* Sheet Handle Notch */}
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto" />

            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 shrink-0">
                  {item.itemCount !== undefined ? <Folder className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {item.size || `${item.itemCount} items`} • {item.date}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Actions List */}
            <div className="space-y-1">
              {actions.map((act) => {
                const Icon = act.icon;
                return (
                  <button
                    key={act.id}
                    onClick={() => {
                      onAction(act.id, item);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      act.danger
                        ? 'hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${act.color}`} />
                    <span>{act.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
