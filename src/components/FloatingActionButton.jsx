import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function FloatingActionButton() {
  const handleClick = () => {
    alert('Mobile File Upload drawer triggered!');
  };

  return (
    <div className="absolute bottom-16 right-4 z-20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/30 border border-blue-400/30 transition-colors"
        aria-label="Upload File"
      >
        <Upload className="w-4 h-4" />
        <span>Upload File</span>
      </motion.button>
    </div>
  );
}
