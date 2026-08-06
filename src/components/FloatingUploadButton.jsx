import React from 'react';
import { UploadCloud } from 'lucide-react';

export default function FloatingUploadButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 z-20 group focus:outline-none focus:ring-4 focus:ring-blue-500/50"
      aria-label="Upload file"
    >
      <UploadCloud className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}
