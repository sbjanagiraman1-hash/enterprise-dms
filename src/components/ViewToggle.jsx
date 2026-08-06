import React from 'react';
import { Grid, List } from 'lucide-react';

export default function ViewToggle({ view, setView }) {
  return (
    <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setView('grid')}
        className={`p-1.5 rounded-md flex items-center justify-center transition-all ${
          view === 'grid' 
            ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' 
            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
        }`}
        title="Grid View"
      >
        <Grid className="w-4 h-4" />
      </button>
      <button
        onClick={() => setView('list')}
        className={`p-1.5 rounded-md flex items-center justify-center transition-all ${
          view === 'list' 
            ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' 
            : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
        }`}
        title="List View"
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  );
}
