import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, HelpCircle, Server, RefreshCw } from 'lucide-react';

export default function MaintenanceCard() {
  const progressPercent = 68;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group"
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            Scheduled Maintenance
          </span>
          <span className="text-xs text-slate-400 font-mono">STATUS: IN_PROGRESS</span>
        </div>

        {/* Maintenance Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/40 flex items-center justify-center mb-4 shadow-inner relative group-hover:scale-105 transition-transform duration-300"
          >
            <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-sky-600 dark:text-sky-400" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            System Maintenance
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            We are performing scheduled server infrastructure optimization and document index migration.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">Upgrade Progress</span>
            <span className="text-sky-600 dark:text-sky-400 font-mono font-bold">{progressPercent}% Completed</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200/60 dark:border-slate-700/60">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-sky-500 rounded-full shadow-sm"
            />
          </div>
        </div>

        {/* Status Card Box */}
        <div className="mb-6 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Target Node:</span>
            <span className="text-slate-900 dark:text-slate-200 font-mono font-semibold flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sky-500" />
              US-EAST-CLUSTER-04
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Current Impact:</span>
            <span className="px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-semibold text-[10px] uppercase">
              Read-Only Mode
            </span>
          </div>

          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
            <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Est. Completion:
            </span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold text-xs">
              Today at 16:30 UTC
            </span>
          </div>
        </div>
      </div>

      {/* Support Link */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-500 dark:text-slate-400">Need urgent access?</span>
        <a
          href="#support"
          onClick={(e) => {
            e.preventDefault();
            alert('Connecting to enterprise support desk...');
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          Contact Support
        </a>
      </div>
    </motion.div>
  );
}
