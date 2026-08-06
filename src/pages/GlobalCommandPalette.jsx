import React from 'react';
import { motion } from 'framer-motion';
import { Command, Sparkles } from 'lucide-react';
import CommandPalette from '../components/CommandPalette';

export default function GlobalCommandPalette() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-6xl mx-auto py-2 sm:py-4"
    >
      {/* Page Context Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <Command className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Global Command Palette
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Instantly search files, trigger quick system actions, or jump across workspace pages.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-700">
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Press <kbd className="font-bold text-blue-600 dark:text-blue-400">Ctrl + K</kbd> anywhere</span>
        </div>
      </div>

      {/* Centered Command Palette Overlay Container */}
      <div className="py-4 sm:py-8 px-2 sm:px-4 bg-slate-50/60 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl backdrop-blur-md flex justify-center">
        <CommandPalette />
      </div>
    </motion.div>
  );
}
