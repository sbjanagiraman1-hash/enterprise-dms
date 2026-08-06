import React, { useState } from 'react';
import { X, FolderPlus } from 'lucide-react';

export default function NewFolderModal({ isOpen, onClose }) {
  const [folderName, setFolderName] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      setError('Folder name cannot be empty');
      return;
    }
    if (folderName.length > 50) {
      setError('Folder name must be less than 50 characters');
      return;
    }
    if (/[<>:"/\\|?*]/.test(folderName)) {
      setError('Folder name contains invalid characters');
      return;
    }
    
    // Simulate success
    setFolderName('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-card dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-xl border border-border flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <FolderPlus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 id="modal-title" className="font-semibold text-slate-900 dark:text-white">Create New Folder</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="mb-4">
            <label htmlFor="folderName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Folder Name
            </label>
            <input
              id="folderName"
              type="text"
              value={folderName}
              onChange={(e) => {
                setFolderName(e.target.value);
                if (error) setError('');
              }}
              className={`w-full px-4 py-2 bg-white dark:bg-slate-950 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-shadow ${
                error 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500/50' 
                  : 'border-border focus:border-blue-500 focus:ring-blue-500/50'
              }`}
              placeholder="e.g. Q4 Reports"
              autoFocus
            />
            {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 transition-all shadow-sm"
            >
              Create Folder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
