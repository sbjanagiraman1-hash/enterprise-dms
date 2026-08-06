import React from 'react';
import { FileQuestion, UploadCloud } from 'lucide-react';

export default function EmptyState({ onUpload }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in-95 duration-300">
      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
        <FileQuestion className="w-10 h-10 text-slate-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Files Found</h3>
      <p className="text-slate-500 max-w-sm mb-8">
        This folder is empty. Upload your first document to get started or create a new folder.
      </p>
      <button 
        onClick={onUpload}
        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm shadow-blue-500/20 hover:shadow-md focus:ring-4 focus:ring-blue-500/50"
      >
        <UploadCloud className="w-5 h-5" />
        Upload First Document
      </button>
    </div>
  );
}
