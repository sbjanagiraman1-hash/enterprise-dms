import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileQuestion, Search, ArrowLeft, AlertCircle } from 'lucide-react';

export default function StatusCard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
      setTimeout(() => setHasSearched(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group"
    >
      <div>
        {/* Header / Status Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            Error Status 404
          </span>
          <span className="text-xs text-slate-400 font-mono">ID: ERR_NOT_FOUND</span>
        </div>

        {/* Large Illustration / Icon Container */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 shadow-inner relative group-hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow">
              404
            </div>
            <FileQuestion className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            404 Page Not Found
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            The document, record, or system page you requested could not be located in the repository. It may have been relocated or deleted.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="mb-6 space-y-2">
          <label htmlFor="card-404-search" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Search System Repository
          </label>
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-3 text-slate-400 pointer-events-none" />
            <input
              id="card-404-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents, IDs or pages..."
              className="w-full pl-9 pr-24 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              Search
            </button>
          </div>
          {hasSearched && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-1"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Searching index for &quot;{searchQuery}&quot;...
            </motion.p>
          )}
        </form>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm shadow-blue-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Dashboard
        </motion.button>
      </div>
    </motion.div>
  );
}
