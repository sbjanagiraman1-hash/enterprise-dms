import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function StatCard({ title, metric, badge, icon: Icon, iconColor }) {
  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        {badge && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-semibold">
            <TrendingUp className="w-3 h-3" />
            {badge}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</h3>
        <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{metric}</p>
      </div>
    </div>
  );
}
