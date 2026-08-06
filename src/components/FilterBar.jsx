import React from 'react';
import { Plus } from 'lucide-react';
import Dropdown from './Dropdown';
import ViewToggle from './ViewToggle';

export default function FilterBar({ view, setView }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Dropdown label="Type" options={['All', 'Folder', 'PDF', 'Word', 'Excel', 'Image', 'Video', 'ZIP']} />
        <Dropdown label="Date Modified" options={['Any time', 'Today', 'Last 7 days', 'Last 30 days', 'This year']} />
        <Dropdown label="Owner" options={['Anyone', 'Me', 'Jane Doe', 'John Smith']} />
        
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 dark:text-blue-400 rounded-lg transition-colors border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
          <Plus className="w-4 h-4" /> Add Filter
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500 dark:text-slate-400 hidden md:block">15 items</span>
        <ViewToggle view={view} setView={setView} />
      </div>
    </div>
  );
}
