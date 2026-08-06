import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium overflow-x-auto whitespace-nowrap pb-1">
      <Home className="w-4 h-4 mr-2 text-slate-400" />
      <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">My Files</span>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-300 dark:text-slate-600" />
      <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Engineering</span>
      <ChevronRight className="w-4 h-4 mx-2 text-slate-300 dark:text-slate-600" />
      <span className="text-slate-900 dark:text-slate-100 font-semibold">Q4 Project</span>
    </div>
  );
}
