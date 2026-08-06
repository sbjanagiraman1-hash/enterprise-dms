import React from 'react';
import { motion } from 'framer-motion';
import { FileUp, ShieldCheck, HardDrive, FolderPlus, Clock } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: 'Q3_Financial_Audit.pdf',
      subtitle: 'Uploaded by Sarah Jenkins',
      time: '2 mins ago',
      icon: FileUp,
      iconBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Security Clearance Approved',
      subtitle: 'Granted to Admin Group 4',
      time: '45 mins ago',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 3,
      title: 'Storage Quota Upgraded',
      subtitle: 'Increased to 50.0 TB',
      time: '3 hours ago',
      icon: HardDrive,
      iconBg: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400',
    },
    {
      id: 4,
      title: 'New Folder Created',
      subtitle: 'Project Alpha Assets',
      time: '5 hours ago',
      icon: FolderPlus,
      iconBg: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400',
    },
  ];

  return (
    <div className="px-4 py-2 space-y-2.5 pb-20">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Recent Activity
        </h3>
        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold cursor-pointer hover:underline">
          View All
        </span>
      </div>

      <div className="space-y-2">
        {activities.map((act, i) => {
          const IconComponent = act.icon;
          return (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              whileHover={{ scale: 1.005 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3 shadow-2xs hover:shadow-xs flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3 min-w-0 pr-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {act.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {act.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 shrink-0 font-medium">
                <Clock className="w-3 h-3" />
                <span>{act.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
