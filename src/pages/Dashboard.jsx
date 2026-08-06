import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] animate-in fade-in">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Main Dashboard</h2>
      <p className="text-slate-500 text-center max-w-md">
        This is a placeholder for the main application dashboard. 
        Please navigate to <strong className="text-slate-700 dark:text-slate-300">Enterprise Analytics</strong> to view the implementation.
      </p>
    </div>
  );
}
