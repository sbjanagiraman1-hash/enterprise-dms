import React from 'react';
import { Plus } from 'lucide-react';

export default function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all z-20"
      aria-label="Upload file"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
