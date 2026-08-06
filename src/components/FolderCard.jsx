import React from 'react';
import { motion } from 'framer-motion';
import { Folder, MoreVertical, Calendar, Files } from 'lucide-react';

export default function FolderCard({ folder, onClick, onOpenMenu }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onClick(folder)}
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3.5 shadow-2xs hover:shadow-xs cursor-pointer flex items-center justify-between transition-all group"
    >
      <div className="flex items-center gap-3 min-w-0 pr-2">
        <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Folder className="w-5 h-5 fill-amber-500/20" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
            {folder.name}
          </span>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {folder.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Files className="w-3 h-3" />
              {folder.itemCount} items
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenMenu(folder);
        }}
        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
        aria-label="Folder actions menu"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
