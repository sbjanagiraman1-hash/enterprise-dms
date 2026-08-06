import React, { useState } from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

export default function ProfileMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setShowProfileMenu(!showProfileMenu)}
        onBlur={() => setTimeout(() => setShowProfileMenu(false), 200)}
        className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-border"
      >
        <img 
          src="https://ui-avatars.com/api/?name=Jane+Doe&background=2563eb&color=fff" 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full border border-border object-cover"
        />
        <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
      </button>
      
      {showProfileMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-card dark:bg-slate-900 rounded-2xl shadow-xl border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="px-4 py-2 border-b border-border mb-2">
            <p className="text-sm font-semibold text-foreground">Jane Doe</p>
            <p className="text-xs text-slate-500 truncate">jane.doe@globalcorp.com</p>
          </div>
          <div className="px-2 space-y-1">
            <button className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors">
              <User className="w-4 h-4" /> Profile
            </button>
            <button className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-colors">
              <Settings className="w-4 h-4" /> Settings
            </button>
          </div>
          <div className="px-2 pt-2 mt-2 border-t border-border">
            <button className="w-full text-left flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
