import React from 'react';
import ApprovalCard from './ApprovalCard';
import { MoreHorizontal } from 'lucide-react';

export default function ApprovalColumn({ title, requests, onCardClick }) {
  const statusColors = {
    'Pending': 'border-t-yellow-400',
    'In Review': 'border-t-blue-400',
    'Approved': 'border-t-green-400',
    'Rejected': 'border-t-red-400',
    'Archived': 'border-t-slate-400'
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl border border-border min-w-[320px] max-w-[320px] shrink-0 snap-center">
      <div className={`p-4 border-b border-border bg-white dark:bg-slate-900 rounded-t-2xl flex items-center justify-between border-t-4 ${statusColors[title] || 'border-t-transparent'}`}>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h3>
          <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2 py-0.5 rounded-full">
            {requests.length}
          </span>
        </div>
        <button className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {requests.map(request => (
          <ApprovalCard 
            key={request.id} 
            request={request} 
            onClick={onCardClick} 
          />
        ))}
        {requests.length === 0 && (
          <div className="h-24 flex items-center justify-center border-2 border-dashed border-border rounded-xl mt-2">
            <span className="text-sm text-slate-400 font-medium">No requests</span>
          </div>
        )}
      </div>
    </div>
  );
}
