import React from 'react';
import { 
  Grip, 
  ChevronDown, 
  Moon,
  Sun,
  Building,
  Menu,
  Search,
  Cloud
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import NotificationMenu from './NotificationMenu';
import ProfileMenu from './ProfileMenu';

export default function Navbar({ toggleSidebar }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 bg-card/80 backdrop-blur-md dark:bg-slate-900/80 border-b border-border">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 hidden sm:flex">
            <Cloud className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight">
              Enterprise DMS
            </h1>
          </div>
        </div>
        
        {/* Center: Global Search Bar */}
        <SearchBar />

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="md:hidden p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <NotificationMenu />
          
          <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block" title="Application Launcher">
            <Grip className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-border mx-1 hidden sm:block"></div>
          
          <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Building className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-foreground">Global Corp</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>

          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
