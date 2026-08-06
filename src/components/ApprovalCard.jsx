import React from 'react';
import { MoreVertical, MessageSquare, Paperclip, CheckCircle2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

export default function ApprovalCard({ request, onClick }) {
  return (
    <div 
      onClick={() => onClick(request)}
      className="bg-card dark:bg-slate-900 border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-[0.98] mb-3"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${request.documentName}`}
    >
      <div className="flex justify-between items-start mb-3">
        <PriorityBadge priority={request.priority} />
        <button 
          className="p-1 rounded-md text-slate-400 opacity-0 group-hover:opacity-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          onClick={(e) => e.stopPropagation()}
          aria-label="Card actions"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1 line-clamp-1">
        {request.documentName}
      </h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
        {request.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex -space-x-2">
          {request.assignedUsers.map((user, idx) => (
            <div 
              key={idx}
              className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold border-2 border-card shadow-sm z-10"
              title={user.name}
            >
              {user.avatar}
            </div>
          ))}
        </div>
        <span className="text-xs font-medium text-slate-500">
          Due {new Date(request.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </span>
      </div>

      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-4 overflow-hidden">
        <div 
          className="bg-blue-600 h-full rounded-full transition-all duration-500" 
          style={{ width: `${request.progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3 mt-1">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="flex items-center gap-1" title="Comments">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{request.comments}</span>
          </div>
          <div className="flex items-center gap-1" title="Attachments">
            <Paperclip className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{request.attachments}</span>
          </div>
          <div className="flex items-center gap-1 text-green-500" title="Approvals">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">1/{request.assignedUsers.length}</span>
          </div>
        </div>
        <StatusBadge status={request.status} />
      </div>
    </div>
  );
}
