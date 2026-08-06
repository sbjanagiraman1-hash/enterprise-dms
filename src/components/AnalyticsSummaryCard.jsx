import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Users, Clock, ArrowUpRight } from 'lucide-react';

export default function AnalyticsSummaryCard() {
  const cards = [
    {
      id: 'storage',
      title: 'Total Storage',
      value: '45.2 TB',
      subtitle: '72% quota used',
      icon: HardDrive,
      color: 'blue',
      progress: 72,
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '1,248',
      subtitle: '+12 this week',
      icon: Users,
      color: 'emerald',
      badge: '+0.9%',
    },
    {
      id: 'approvals',
      title: 'Pending Approvals',
      value: '24',
      subtitle: 'Requires attention',
      icon: Clock,
      color: 'amber',
      action: 'View',
    },
  ];

  return (
    <div className="px-4 py-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Analytics Summary
        </h3>
        <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
          Live Sync
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      card.color === 'blue'
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                        : card.color === 'emerald'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {card.title}
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      {card.value}
                    </h4>
                  </div>
                </div>

                {card.badge && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    {card.badge}
                  </span>
                )}

                {card.action && (
                  <button
                    onClick={() => alert('Navigating to pending approvals...')}
                    className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white text-[11px] font-bold rounded-lg transition-colors shadow-2xs"
                  >
                    {card.action}
                  </button>
                )}
              </div>

              {/* Progress bar for storage */}
              {card.progress !== undefined && (
                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    <span>{card.subtitle}</span>
                    <span className="text-blue-600 dark:text-blue-400">{card.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {card.progress === undefined && (
                <div className="mt-2 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  {card.subtitle}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
