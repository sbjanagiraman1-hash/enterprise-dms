import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, Check } from 'lucide-react';

export default function FilterDrawer({ isOpen, onClose, onApplyFilter, initialFilters }) {
  const [filters, setFilters] = useState(
    initialFilters || {
      fileType: 'all',
      date: 'anytime',
      size: 'any',
      owner: 'all',
    }
  );

  if (!isOpen) return null;

  const handleReset = () => {
    const resetValues = { fileType: 'all', date: 'anytime', size: 'any', owner: 'all' };
    setFilters(resetValues);
    onApplyFilter(resetValues);
    onClose();
  };

  const handleApply = () => {
    onApplyFilter(filters);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-40 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative z-50 w-full max-w-[320px] h-full bg-white dark:bg-slate-900 shadow-2xl p-5 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Filter Repository
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Categories */}
              <div className="space-y-4 overflow-y-auto max-h-[500px] pr-1">
                {/* File Type Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    File Type
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {['all', 'pdf', 'word', 'image', 'excel'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setFilters({ ...filters, fileType: t })}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold uppercase transition-all ${
                          filters.fileType === t
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Filter */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Date Modified
                  </label>
                  <select
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    <option value="anytime">Anytime</option>
                    <option value="today">Today</option>
                    <option value="7days">Last 7 Days</option>
                    <option value="30days">Last 30 Days</option>
                  </select>
                </div>

                {/* File Size */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    File Size
                  </label>
                  <select
                    value={filters.size}
                    onChange={(e) => setFilters({ ...filters, size: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    <option value="any">Any Size</option>
                    <option value="small">&lt; 1 MB</option>
                    <option value="medium">1 - 10 MB</option>
                    <option value="large">&gt; 10 MB</option>
                  </select>
                </div>

                {/* Owner */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Ownership
                  </label>
                  <select
                    value={filters.owner}
                    onChange={(e) => setFilters({ ...filters, owner: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-white"
                  >
                    <option value="all">All Owners</option>
                    <option value="me">Owned by Me</option>
                    <option value="shared">Shared with Me</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <button
                onClick={handleReset}
                className="w-1/2 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleApply}
                className="w-1/2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                Apply
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
