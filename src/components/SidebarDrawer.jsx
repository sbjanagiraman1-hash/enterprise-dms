import React from 'react';

export default function SidebarDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
      onClick={onClose}
      aria-hidden="true"
    />
  );
}
