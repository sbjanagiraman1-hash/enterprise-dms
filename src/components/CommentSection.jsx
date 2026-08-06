import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

export default function CommentSection() {
  const [comment, setComment] = useState('');

  return (
    <div className="flex flex-col h-full bg-card dark:bg-slate-900 border-t border-border pt-4">
      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4 px-4 sm:px-6">Comments</h4>
      
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 space-y-4 mb-4 custom-scrollbar">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
            MC
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl rounded-tl-none p-3 border border-border">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">Michael Chang</span>
              <span className="text-[10px] text-slate-500">2 hours ago</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              The financial figures for Q3 need to be updated on page 12 before we can approve this.
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-sm">
            You
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl rounded-tr-none p-3 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-center justify-end mb-1">
              <span className="text-[10px] text-blue-500/70 mr-2">Just now</span>
              <span className="font-semibold text-sm text-blue-700 dark:text-blue-400">You</span>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              I've updated the figures. Please check the latest revision attached.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 border-t border-border bg-slate-50/50 dark:bg-slate-900/50 mt-auto">
        <div className="relative flex items-center">
          <button className="absolute left-3 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            <Paperclip className="w-4 h-4" />
          </button>
          <input 
            type="text" 
            placeholder="Write a comment..." 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full pl-10 pr-20 py-2.5 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm transition-shadow"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors hidden sm:block">
              <Smile className="w-4 h-4" />
            </button>
            <button 
              disabled={!comment.trim()}
              className="p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
