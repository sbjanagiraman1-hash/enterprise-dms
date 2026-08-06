import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FilterBar from '../components/FilterBar';
import FileGrid from '../components/FileGrid';
import FileList from '../components/FileList';
import PropertiesPanel from '../components/PropertiesPanel';
import FloatingUploadButton from '../components/FloatingUploadButton';
import UploadModal from '../components/UploadModal';
import NewFolderModal from '../components/NewFolderModal';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';
import { mockFiles } from '../data/mockFiles';
import { Search, AlertCircle, Plus, UploadCloud } from 'lucide-react';

export default function FileExplorer() {
  const [view, setView] = useState('grid'); // 'grid' | 'list'
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isNewFolderModalOpen, setIsNewFolderModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setFiles(mockFiles);
      setLoading(false);
      setError(false); // Change to true to test network error
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectFile = (id) => {
    setSelectedFiles(prev => 
      prev.includes(id) ? prev.filter(fileId => fileId !== id) : [...prev, id]
    );
  };

  const handleViewDetails = (file) => {
    setActiveFile(file);
    setIsPropertiesOpen(true);
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex relative w-full">
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isPropertiesOpen ? 'lg:pr-80 xl:pr-96' : ''}`}>
        <div className="flex flex-col w-full">
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-4 gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">File Explorer</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3">Manage, organize and access enterprise documents securely.</p>
              <Breadcrumb />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto pb-1">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search files and folders..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                  aria-label="Search files"
                />
              </div>
              <button 
                onClick={() => setIsNewFolderModalOpen(true)}
                className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm focus:ring-4 focus:ring-slate-500/20"
              >
                <Plus className="w-4 h-4" /> New Folder
              </button>
              <button 
                onClick={() => setIsUploadModalOpen(true)}
                className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/50"
              >
                <UploadCloud className="w-4 h-4" /> Upload
              </button>
            </div>
          </div>
          
          <FilterBar view={view} setView={setView} />
          
          {error ? (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Network Error</h3>
              <p className="text-slate-500 text-center max-w-sm mb-6">We couldn't connect to the server to fetch your files. Please check your connection.</p>
              <button 
                onClick={() => { setLoading(true); setError(false); setTimeout(() => setLoading(false), 1000); }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/50"
              >
                Retry
              </button>
            </div>
          ) : loading ? (
            <LoadingSkeleton view={view} />
          ) : filteredFiles.length === 0 ? (
            <EmptyState onUpload={() => setIsUploadModalOpen(true)} />
          ) : (
            <div className="animate-in fade-in duration-300">
              {view === 'grid' ? (
                <FileGrid 
                  files={filteredFiles} 
                  selectedFiles={selectedFiles} 
                  onSelect={handleSelectFile}
                  onViewDetails={handleViewDetails}
                />
              ) : (
                <FileList 
                  files={filteredFiles} 
                  selectedFiles={selectedFiles} 
                  onSelect={handleSelectFile}
                  onViewDetails={handleViewDetails}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Properties Panel (Desktop: Sidebar, Mobile: Bottom Sheet/Overlay) */}
      <div className={`fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto w-full sm:w-80 xl:w-96 bg-card border-t sm:border-t-0 sm:border-l border-border shadow-2xl transition-transform duration-300 z-40 pt-4 sm:pt-16 lg:pt-0 ${
        isPropertiesOpen ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
      } lg:fixed lg:top-16 lg:bottom-0 lg:right-0 rounded-t-3xl sm:rounded-none max-h-[85vh] sm:max-h-none flex flex-col`}>
        {activeFile && (
          <PropertiesPanel 
            file={activeFile} 
            onClose={() => setIsPropertiesOpen(false)} 
          />
        )}
      </div>

      {/* Mobile overlay for properties panel */}
      {isPropertiesOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsPropertiesOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Action Button (Mobile) */}
      <div className="sm:hidden">
        <FloatingUploadButton onClick={() => setIsUploadModalOpen(true)} />
      </div>

      {/* Modals */}
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />
      <NewFolderModal
        isOpen={isNewFolderModalOpen}
        onClose={() => setIsNewFolderModalOpen(false)}
      />
    </div>
  );
}
