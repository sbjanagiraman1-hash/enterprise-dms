import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Server } from 'lucide-react';
import StatusCard from '../components/StatusCard';
import PermissionCard from '../components/PermissionCard';
import MaintenanceCard from '../components/MaintenanceCard';
import SessionExpiredCard from '../components/SessionExpiredCard';

export default function SystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-7xl mx-auto"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Activity className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              System Status
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Real-time status monitoring, system diagnostics, and operational exception states.
          </p>
        </div>

        {/* Operational Stats Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <ShieldCheck className="w-3.5 h-3.5" />
            Operational
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            4 Active Instances
          </div>
        </div>
      </div>

      {/* Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <StatusCard />
        <PermissionCard />
        <MaintenanceCard />
        <SessionExpiredCard />
      </div>
    </motion.div>
  );
}
