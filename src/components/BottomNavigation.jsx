import React, { useState } from 'react';
import { Home, FolderGit2, CheckSquare, User } from 'lucide-react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('Home');

  const navs = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Files', label: 'Files', icon: FolderGit2 },
    { id: 'Approvals', label: 'Approvals', icon: CheckSquare, badge: '24' },
    { id: 'Profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 px-3 py-2 flex items-center justify-around">
      {navs.map((nav) => {
        const Icon = nav.icon;
        const isActive = activeTab === nav.id;

        return (
          <button
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all relative ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-bold'
                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 font-medium'
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {nav.badge && (
                <span className="absolute -top-1 -right-2 px-1 py-0.2 bg-amber-500 text-white text-[9px] font-bold rounded-full">
                  {nav.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] leading-none">{nav.label}</span>

            {/* Active Pill Indicator */}
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
}
