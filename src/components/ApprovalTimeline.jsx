import React from 'react';
import { X, Download, Share2, Check, XCircle } from 'lucide-react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';

export default function ApprovalTimeline({ request, onClose }) {
  return (
    <div className="h-full flex flex-col bg-card dark:bg-slate-900">
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border sticky top-0 bg-card dark:bg-slate-900 z-10 shrink-0">
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1 pr-4">{request.documentName}</h3>
          <div className="flex items-center gap-3 mt-1.5">
            <StatusBadge status={request.status} />
            <span className="text-xs text-slate-500 font-medium">ID: {request.id}</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-8">
        
        {/* Document Details */}
        <section>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">Details</h4>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-border space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Priority</span>
              <PriorityBadge priority={request.priority} />
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Department</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{request.department}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Due Date</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{request.dueDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Owner</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center text-[9px] font-bold">
                  {request.owner.avatar}
                </div>
                <span className="font-medium text-slate-900 dark:text-slate-100">{request.owner.name}</span>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-slate-500 block mb-1">Description</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{request.description}</p>
            </div>
          </div>
        </section>

        {/* Document Preview Placeholder */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Document</h4>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"><Download className="w-4 h-4" /></button>
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-xl border border-border flex items-center justify-center flex-col text-slate-400">
            <FileText className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-sm font-medium">Document Preview</span>
          </div>
        </section>

        {/* Activity Timeline */}
        <section>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Activity Log</h4>
          <div className="relative pl-3 border-l-2 border-slate-200 dark:border-slate-700 space-y-6">
            
            <div className="relative">
              <div className="absolute -left-[17px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">In Review <span className="text-xs font-normal text-slate-500 ml-2">Today at 10:45 AM</span></p>
              <p className="text-sm text-slate-500 mt-1">Status changed from Pending</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[17px] top-1 w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full border-2 border-white dark:border-slate-900"></div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Submitted <span className="text-xs font-normal text-slate-500 ml-2">{request.createdDate}</span></p>
              <p className="text-sm text-slate-500 mt-1">Request created by {request.owner.name}</p>
            </div>

          </div>
        </section>

      </div>

      <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-800/30 flex gap-3 shrink-0">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-green-500/50">
          <Check className="w-4 h-4" /> Approve
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-red-500/50">
          <XCircle className="w-4 h-4" /> Reject
        </button>
      </div>
    </div>
  );
}

// Missing import fix
import { FileText } from 'lucide-react';
