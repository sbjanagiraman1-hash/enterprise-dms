import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MonitorSmartphone, BarChart3 } from 'lucide-react';
import MobileDeviceFrame from '../components/MobileDeviceFrame';

export default function MobileAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-7xl mx-auto py-2 sm:py-4"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Mobile Analytics Preview
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Interactive preview of the Enterprise DMS responsive mobile application experience.
            </p>
          </div>
        </div>

        {/* Status & Device Specs */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <MonitorSmartphone className="w-3.5 h-3.5" />
            iOS & Android Ready
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <BarChart3 className="w-3.5 h-3.5" />
            Responsive Analytics
          </span>
        </div>
      </div>

      {/* Main Centered Phone Device Viewport Container */}
      <div className="py-6 sm:py-10 px-4 bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl flex items-center justify-center min-h-[750px]">
        <MobileDeviceFrame />
      </div>
    </motion.div>
  );
}
