import React from 'react';
import { motion } from 'framer-motion';
import { FileText, File, Image, FileSpreadsheet, MoreVertical, HardDrive, Calendar } from 'lucide-react';

export default function FileCard({ file, isSelected, onSelect, onOpenMenu }) {
  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return {
          icon: FileText,
          bg: 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-200/60 dark:border-rose-800/60',
        };
      case 'excel':
        return {
          icon: FileSpreadsheet,
          bg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60',
        };
      case 'image':
        return {
          icon: Image,
          bg: 'bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/60',
        };
      case 'word':
      default:
        return {
          icon: File,
          bg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60',
        };
    }
  };

  const iconInfo = getFileIcon(file.type);
  const IconComponent = iconInfo.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(file)}
      className={`border rounded-2xl p-3.5 shadow-2xs cursor-pointer flex items-center justify-between transition-all group ${
        isSelected
          ? 'bg-blue-50/80 dark:bg-blue-950/50 border-blue-500 border-l-4 shadow-sm'
          : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 pr-2">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${iconInfo.bg}`}>
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
            {file.name}
          </span>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <HardDrive className="w-3 h-3" />
              {file.size}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {file.date}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenMenu(file);
        }}
        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
        aria-label="File actions menu"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
