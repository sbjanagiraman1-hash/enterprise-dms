import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  HelpCircle,
  HardDrive,
  FolderOpen,
  ClipboardCheck,
  ShieldCheck,
  Users,
  X
} from 'lucide-react';
import { cn } from '../utils/cn';
import { useSidebar } from '../context/SidebarContext';

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    name: "Enterprise Analytics",
    icon: HardDrive, 
    path: "/"
  },
  {
    name: "File Explorer",
    icon: FolderOpen,
    path: "/file-explorer"
  },
  {
    name: "Approval Workflow",
    icon: ClipboardCheck,
    path: "/approval-workflow"
  },
  {
    name: "Permission Matrix",
    icon: ShieldCheck,
    path: "/permission-matrix"
  },
  {
    name: "User Management",
    icon: Users,
    path: "/user-management"
  }
];

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 w-64 h-screen border-r bg-card dark:bg-slate-900 border-border flex flex-col shadow-sm transition-transform duration-300 lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-inner">
            <span className="text-white font-bold text-lg leading-none">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-foreground leading-tight">Global Corp</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Production Instance</span>
          </div>
        </div>
        <button 
          onClick={closeSidebar}
          className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-sm font-medium",
              isActive 
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
            )}
          >
            <item.icon className="w-5 h-5 transition-colors" />
            {item.name}
          </NavLink>
        ))}
      </div>
      
      <div className="p-4 border-t border-border space-y-1 bg-slate-50/50 dark:bg-slate-900/50 mt-auto">
        <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100">
          <HelpCircle className="w-5 h-5" />
          Help Center
        </a>
        <div className="px-4 py-3 mt-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-foreground">Storage Usage</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-2 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out" style={{ width: '45%' }}></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-medium">
            <span className="text-slate-600 dark:text-slate-300">450 GB used</span>
            <span className="text-slate-400">1 TB total</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
