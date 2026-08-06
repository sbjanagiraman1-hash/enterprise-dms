import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex-1 max-w-xl mx-4 hidden md:flex items-center">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white focus:dark:bg-slate-900 border focus:border-blue-500 rounded-xl text-sm transition-all focus:ring-4 focus:ring-blue-500/10 outline-none"
        />
      </div>
    </div>
  );
}
