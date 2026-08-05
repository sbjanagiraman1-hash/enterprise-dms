import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Bell, 
  Grip, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut,
  Moon,
  Sun,
  Building,
  Menu
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from './Sidebar';

export default function Navbar({ toggleSidebar }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/': return 'Dashboard';
      case '/my-files': return 'My Files';
      case '/shared-files': return 'Shared with Me';
      case '/approvals': return 'Approvals';
      case '/user-management': return 'User Management';
      case '/settings': return 'System Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-card/80 backdrop-blur-md dark:bg-slate-900/80 border-b border-border z-20">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold text-foreground tracking-tight">
            {getPageTitle(location.pathname)}
          </h1>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          
          <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block">
            <Grip className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-border mx-1 hidden sm:block"></div>
          
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Building className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-foreground">Global Corp</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
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
              <div className="absolute right-0 mt-2 w-56 bg-card dark:bg-slate-900 rounded-xl shadow-lg border border-border py-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Jane Doe</p>
                  <p className="text-xs text-slate-500 truncate">jane.doe@globalcorp.com</p>
                </div>
                <div className="p-1">
                  <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                    <User className="w-4 h-4" /> Profile
                  </button>
                  <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors">
                    <Settings className="w-4 h-4" /> My Account
                  </button>
                  <button 
                    onClick={toggleTheme}
                    className="w-full sm:hidden text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} Toggle Theme
                  </button>
                </div>
                <div className="p-1 border-t border-border">
                  <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
