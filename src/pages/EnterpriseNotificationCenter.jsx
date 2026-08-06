import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ShieldCheck } from 'lucide-react';
import NotificationDrawer from '../components/NotificationDrawer';

export default function EnterpriseNotificationCenter() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative -m-4 sm:-m-6 lg:-m-8 h-[calc(100vh-4rem)] overflow-hidden flex flex-col md:flex-row"
    >
      {/* Left Side: Mock Application Dashboard Background Placeholder */}
      <div className={`bg-slate-100 dark:bg-slate-950 p-4 sm:p-6 overflow-y-auto space-y-6 select-none opacity-80 backdrop-blur-sm min-h-0 transition-all ${
        isDrawerOpen
          ? 'hidden md:block w-full md:w-[35%] lg:w-[40%] xl:w-[35%]'
          : 'w-full flex-1'
      }`}>
        {/* Placeholder Top Banner */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 min-w-0">
          <div className="space-y-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">
              Enterprise Dashboard Overview
            </h1>
            <p className="text-xs text-slate-500 truncate">
              Live document repository metrics and workspace operations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 text-xs font-bold rounded-xl flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" /> System Online
            </div>
          </div>
        </div>

        {/* Placeholder Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-3 gap-3.5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs min-w-0 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-semibold truncate block">Total Documents</span>
            <h3 className="text-lg sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 whitespace-nowrap truncate">
              128,450
            </h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs min-w-0 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-semibold truncate block">Active Vault Storage</span>
            <h3 className="text-lg sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 whitespace-nowrap truncate">
              45.2 TB / 50 TB
            </h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs min-w-0 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-semibold truncate block">Security Clearance</span>
            <h3 className="text-lg sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 whitespace-nowrap truncate">
              Level 3 Active
            </h3>
          </div>
        </div>

        {/* Placeholder Table */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="h-5 w-48 bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 bg-slate-100 dark:bg-slate-800/60 rounded-xl" />
            ))}
          </div>
        </div>
      </div>

      {!isDrawerOpen && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-2xl shadow-xl shadow-blue-500/30 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Bell className="w-4 h-4" />
            Open Notification Center
          </button>
        </div>
      )}

      {/* Right Side: Enterprise Notification Center Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <NotificationDrawer onClose={() => setIsDrawerOpen(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
