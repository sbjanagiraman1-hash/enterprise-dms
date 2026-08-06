import React from 'react';
import { motion } from 'framer-motion';
import MobileHeader from './MobileHeader';
import AnalyticsSummaryCard from './AnalyticsSummaryCard';
import StorageChart from './StorageChart';
import RecentActivity from './RecentActivity';
import FloatingActionButton from './FloatingActionButton';
import BottomNavigation from './BottomNavigation';

export default function MobileDeviceFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[420px]">
      {/* Outer Phone Shell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-slate-900 dark:bg-slate-950 rounded-[44px] p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-800/90 dark:border-slate-700/80 relative"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 w-28 h-4 bg-slate-950 rounded-full flex items-center justify-between px-2.5 shadow-sm border border-slate-800/60">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80 border border-slate-700/50"></span>
          <span className="w-2 h-2 rounded-full bg-blue-900/60 animate-pulse"></span>
        </div>

        {/* Screen Viewport */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-[34px] overflow-hidden relative flex flex-col h-[700px] sm:h-[730px] border border-slate-200/50 dark:border-slate-800/50 pt-3">
          {/* Scrollable Mobile Dashboard Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar relative">
            <MobileHeader onSearchClick={() => alert('Mobile search filter opened')} />
            <AnalyticsSummaryCard />
            <StorageChart />
            <RecentActivity />
          </div>

          {/* Floating Action Button */}
          <FloatingActionButton />

          {/* Bottom Navigation */}
          <BottomNavigation />
        </div>

        {/* Phone Bottom Home Bar Indicator */}
        <div className="w-32 h-1 bg-slate-700 dark:bg-slate-600 rounded-full mx-auto mt-2 opacity-60"></div>
      </motion.div>
    </div>
  );
}
