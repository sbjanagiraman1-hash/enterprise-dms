import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Folder, 
  SearchX, 
  FileText, 
  Upload, 
  ArrowLeft, 
  FilterX, 
  Plus
} from 'lucide-react';
import SectionHeader from '../components/system-state/SectionHeader';
import LoadingSkeleton from '../components/system-state/LoadingSkeleton';

export default function SystemState() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      <SectionHeader 
        title="System States Gallery"
        subtitle="A comprehensive overview of success, error, and empty states within the DMS Enterprise environment."
      />

      {/* 2-Column Responsive Grid Layout (Desktop & Tablet) | 1-Column Layout (Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* CARD 1: Upload Complete */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all duration-200 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                Success State
              </span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">
              Upload Complete
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Your documents have been successfully uploaded and processed within the DMS Enterprise environment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            <button 
              onClick={() => navigate('/my-files')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm shadow-blue-500/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              View Documents
            </button>
            <button 
              onClick={() => alert('Opening upload dialog...')}
              className="px-4 py-2.5 rounded-xl border border-border hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all flex items-center gap-2 active:scale-95"
            >
              <Upload className="w-4 h-4" />
              Upload More
            </button>
          </div>
        </div>

        {/* CARD 2: 404 Page Not Found */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                Warning / Error
              </span>
            </div>

            <div className="mb-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-amber-500 dark:text-amber-400 tracking-tight">
                404
              </span>
              <h2 className="text-xl font-bold text-foreground mt-1">
                Page Not Found
              </h2>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              The requested system state page or resource could not be found. Please check your URL or return to dashboard.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            <button 
              onClick={() => navigate('/')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm shadow-blue-500/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Dashboard
            </button>
          </div>
        </div>

        {/* CARD 3: This folder is empty */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Folder className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                Empty State
              </span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">
              This folder is empty
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              There are currently no items or files stored in this folder location. Create or upload files to get started.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            <button 
              onClick={() => alert('Opening upload dialog...')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm shadow-blue-500/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Upload Files
            </button>
          </div>
        </div>

        {/* CARD 4: No matching results */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all duration-200 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <SearchX className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                Search State
              </span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">
              No matching results
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              We couldn't find any results matching your search criteria or active filters in the directory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            <button 
              onClick={() => alert('Search filters cleared')}
              className="px-4 py-2.5 rounded-xl border border-border hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all flex items-center gap-2 active:scale-95"
            >
              <FilterX className="w-4 h-4" />
              Clear Search Filters
            </button>
          </div>
        </div>

        {/* CARD 5: Loading Skeleton with Table Placeholder */}
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Loading State Skeleton
            </h2>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              Animated Shimmer
            </span>
          </div>
          <LoadingSkeleton />
        </div>

      </div>
    </div>
  );
}
