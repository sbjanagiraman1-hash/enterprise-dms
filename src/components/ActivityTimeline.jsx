import React from 'react';
import { FileUp, Share2, Trash2 } from 'lucide-react';

const activities = [
  { id: 1, action: 'Uploaded File', file: 'Q4_Financial_Report.pdf', time: '10 mins ago', type: 'upload' },
  { id: 2, action: 'Shared Folder', file: 'Marketing Assets', time: '2 hours ago', type: 'share' },
  { id: 3, action: 'Deleted File', file: 'Old_Draft_v1.docx', time: '5 hours ago', type: 'delete' },
];

export default function ActivityTimeline() {
  const getIcon = (type) => {
    switch(type) {
      case 'upload': return <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-full"><FileUp className="w-4 h-4" /></div>;
      case 'share': return <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"><Share2 className="w-4 h-4" /></div>;
      case 'delete': return <div className="p-2 bg-red-50 dark:bg-red-500/10 text-red-600 rounded-full"><Trash2 className="w-4 h-4" /></div>;
      default: return null;
    }
  };

  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
      </div>
      
      <div className="flex-1 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800"></div>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex gap-4">
              <div className="relative z-10 shrink-0">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{activity.action}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 truncate">{activity.file}</p>
                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full mt-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-colors">
        View All Activity
      </button>
    </div>
  );
}
