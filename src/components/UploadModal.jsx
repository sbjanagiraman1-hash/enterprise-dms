import React, { useState, useRef } from 'react';
import { X, UploadCloud, File as FileIcon, CheckCircle, AlertCircle } from 'lucide-react';

export default function UploadModal({ isOpen, onClose }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'video/mp4', 'application/zip'];
  const maxSize = 50 * 1024 * 1024; // 50MB

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    setError('');
    setSuccess('');
    
    if (!file) return false;
    
    if (file.size > maxSize) {
      setError('File exceeds maximum size of 50MB');
      return false;
    }
    
    if (!allowedTypes.includes(file.type) && !file.name.endsWith('.docx') && !file.name.endsWith('.xlsx')) {
      setError('File type not allowed. Supported: PDF, Word, Excel, JPG, PNG, MP4, ZIP');
      return false;
    }
    
    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    
    setError('');
    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setSuccess('File uploaded successfully!');
        setTimeout(() => {
          setSelectedFile(null);
          setProgress(0);
          setSuccess('');
          onClose();
        }, 1500);
      }
    }, 200);
  };

  const resetState = () => {
    setSelectedFile(null);
    setError('');
    setSuccess('');
    setProgress(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-card dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-lg border border-border overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upload-modal-title"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50/50 dark:bg-slate-800/50">
          <h3 id="upload-modal-title" className="font-semibold text-lg text-slate-900 dark:text-slate-100">Upload Files</h3>
          <button 
            onClick={resetState}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 relative">
          
          {/* Success Snackbar */}
          {success && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 animate-in slide-in-from-top-4 z-10 shadow-sm border border-green-200 dark:border-green-800/50">
              <CheckCircle className="w-4 h-4" /> {success}
            </div>
          )}

          {/* Error Snackbar */}
          {error && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 animate-in slide-in-from-top-4 z-10 shadow-sm border border-red-200 dark:border-red-800/50">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <div 
            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group ${
              dragActive 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleChange} 
              className="hidden" 
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.mp4,.zip" 
            />
            
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8" />
            </div>
            <p className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
              Drag & drop files here
            </p>
            <p className="text-sm text-slate-500 mb-6">
              or click to browse from your computer (Max 50MB)
            </p>
            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/50">
              Select Files
            </button>
          </div>
          
          {selectedFile && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-2">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Uploading</h4>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                  <FileIcon className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate pr-2">{selectedFile.name}</p>
                    <p className="text-xs text-slate-500 shrink-0">{progress}%</p>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedFile(null); setProgress(0); }}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-900/50 flex justify-end gap-3">
          <button 
            onClick={resetState}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm focus:ring-4 focus:ring-slate-500/20"
          >
            Cancel
          </button>
          <button 
            onClick={handleUpload}
            disabled={!selectedFile || progress > 0}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-500/50"
          >
            {progress > 0 ? 'Uploading...' : 'Upload File'}
          </button>
        </div>
      </div>
    </div>
  );
}
