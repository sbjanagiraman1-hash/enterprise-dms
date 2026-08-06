import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderOpen,
  ArrowUpDown,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import Breadcrumbs from '../components/Breadcrumbs';
import FolderCard from '../components/FolderCard';
import FileCard from '../components/FileCard';
import BottomSheet from '../components/BottomSheet';
import FilterDrawer from '../components/FilterDrawer';
import EmptyState from '../components/EmptyState';
import LoadingSkeleton from '../components/LoadingSkeleton';
import BottomNavigation from '../components/BottomNavigation';
import FloatingActionButton from '../components/FloatingActionButton';

export default function MobileFileExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState('file-1');
  const [activeBottomSheetItem, setActiveBottomSheetItem] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [actionNotice, setActionNotice] = useState(null);

  const [breadcrumbPaths, setBreadcrumbPaths] = useState([
    'Shared Dept',
    'Q3 Assets',
    'Marketing Materials',
  ]);

  const [appliedFilters, setAppliedFilters] = useState({
    fileType: 'all',
    date: 'anytime',
    size: 'any',
    owner: 'all',
  });

  // Mock Folder Data
  const initialFolders = [
    {
      id: 'fold-1',
      name: 'Brand Guidelines 2026',
      date: 'Aug 02, 2026',
      itemCount: 14,
    },
    {
      id: 'fold-2',
      name: 'Social Media Templates',
      date: 'Jul 28, 2026',
      itemCount: 8,
    },
  ];

  // Mock File Data
  const initialFiles = [
    {
      id: 'file-1',
      name: 'Q3_Financial_Audit_Report.pdf',
      type: 'pdf',
      size: '4.2 MB',
      date: 'Aug 04, 2026',
    },
    {
      id: 'file-2',
      name: 'Project_Alpha_Executive_Brief.docx',
      type: 'word',
      size: '1.8 MB',
      date: 'Aug 03, 2026',
    },
    {
      id: 'file-3',
      name: 'Brand_Assets_Hero_Banner.png',
      type: 'image',
      size: '12.5 MB',
      date: 'Aug 01, 2026',
    },
    {
      id: 'file-4',
      name: 'User_Growth_Analytics_2026.xlsx',
      type: 'excel',
      size: '850 KB',
      date: 'Jul 30, 2026',
    },
  ];

  // Filter & Sort Folders
  const filteredFolders = useMemo(() => {
    let result = [...initialFolders];
    if (searchQuery.trim()) {
      result = result.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }
    result.sort((a, b) =>
      sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return result;
  }, [searchQuery, sortOrder]);

  // Filter & Sort Files
  const filteredFiles = useMemo(() => {
    let result = [...initialFiles];

    if (searchQuery.trim()) {
      result = result.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }

    if (appliedFilters.fileType !== 'all') {
      result = result.filter((f) => f.type === appliedFilters.fileType);
    }

    result.sort((a, b) =>
      sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return result;
  }, [searchQuery, appliedFilters, sortOrder]);

  const handleBreadcrumbClick = (index) => {
    if (index === 0) {
      setBreadcrumbPaths([]);
    } else {
      setBreadcrumbPaths(breadcrumbPaths.slice(0, index));
    }
    triggerToast('Navigated to selected folder directory');
  };

  const handleFolderClick = (folder) => {
    setBreadcrumbPaths([...breadcrumbPaths, folder.name]);
    triggerToast(`Opened folder: ${folder.name}`);
  };

  const triggerToast = (msg) => {
    setActionNotice(msg);
    setTimeout(() => {
      setActionNotice(null);
    }, 3000);
  };

  const handleBottomSheetAction = (actionId, item) => {
    triggerToast(`Executed "${actionId}" on ${item.name}`);
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const hasActiveFilter = appliedFilters.fileType !== 'all';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-7xl mx-auto py-2 sm:py-4"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
            <FolderOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Mobile File Explorer
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Interactive preview of the Enterprise DMS responsive file directory and document actions.
            </p>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 800);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh Directory
          </button>
        </div>
      </div>

      {/* Main Centered Mobile Device Frame Container */}
      <div className="py-6 sm:py-10 px-4 bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl flex items-center justify-center min-h-[780px]">
        {/* Mobile Phone Mockup Frame */}
        <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[420px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-slate-900 dark:bg-slate-950 rounded-[44px] p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-800 border-4 border-slate-800/90 dark:border-slate-700/80 relative overflow-hidden"
          >
            {/* Phone Dynamic Island */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 w-28 h-4 bg-slate-950 rounded-full flex items-center justify-between px-2.5 shadow-sm border border-slate-800/60">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800/80 border border-slate-700/50" />
              <span className="w-2 h-2 rounded-full bg-blue-900/60 animate-pulse" />
            </div>

            {/* Screen Viewport */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-[34px] overflow-hidden relative flex flex-col h-[710px] sm:h-[740px] border border-slate-200/50 dark:border-slate-800/50 pt-3">
              {/* Top App Bar */}
              <MobileHeader onSearchClick={() => {}} />

              {/* Breadcrumbs Trail */}
              <Breadcrumbs
                paths={breadcrumbPaths}
                onSelectPath={handleBreadcrumbClick}
              />

              {/* Search Bar & Filter Launcher */}
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
                onOpenFilter={() => setIsFilterOpen(true)}
                hasActiveFilter={hasActiveFilter}
              />

              {/* Action Toast Feedback */}
              <AnimatePresence>
                {actionNotice && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-blue-600 text-white text-[11px] font-semibold px-3 py-1.5 flex items-center justify-between shrink-0"
                  >
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      {actionNotice}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Scrollable File & Folder Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4 pb-20">
                {isLoading ? (
                  <LoadingSkeleton />
                ) : filteredFolders.length === 0 && filteredFiles.length === 0 ? (
                  <EmptyState
                    message="No matching files or folders found."
                    onReset={() => {
                      setSearchQuery('');
                      setAppliedFilters({ fileType: 'all', date: 'anytime', size: 'any', owner: 'all' });
                    }}
                  />
                ) : (
                  <>
                    {/* Folders Section */}
                    {filteredFolders.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between px-1">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Folders ({filteredFolders.length})
                          </h3>
                          <button
                            onClick={toggleSort}
                            className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                          >
                            <ArrowUpDown className="w-3 h-3" />
                            <span>{sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          {filteredFolders.map((folder) => (
                            <FolderCard
                              key={folder.id}
                              folder={folder}
                              onClick={handleFolderClick}
                              onOpenMenu={(f) => setActiveBottomSheetItem(f)}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Files Section */}
                    {filteredFiles.length > 0 && (
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between px-1">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Files ({filteredFiles.length})
                          </h3>
                          <span className="text-[10px] text-slate-400 font-medium">
                            Tap file to select
                          </span>
                        </div>

                        <div className="space-y-2">
                          {filteredFiles.map((file) => (
                            <FileCard
                              key={file.id}
                              file={file}
                              isSelected={selectedFileId === file.id}
                              onSelect={(f) => setSelectedFileId(f.id)}
                              onOpenMenu={(f) => setActiveBottomSheetItem(f)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Floating Action Button inside phone screen */}
              <FloatingActionButton />

              {/* Bottom Navigation inside phone screen ONLY */}
              <BottomNavigation />

              {/* Bottom Sheet Modal */}
              <BottomSheet
                isOpen={!!activeBottomSheetItem}
                onClose={() => setActiveBottomSheetItem(null)}
                item={activeBottomSheetItem}
                onAction={handleBottomSheetAction}
              />

              {/* Filter Drawer */}
              <FilterDrawer
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onApplyFilter={setAppliedFilters}
                initialFilters={appliedFilters}
              />
            </div>

            {/* Phone Bottom Home Bar */}
            <div className="w-32 h-1 bg-slate-700 dark:bg-slate-600 rounded-full mx-auto mt-2 opacity-60" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
