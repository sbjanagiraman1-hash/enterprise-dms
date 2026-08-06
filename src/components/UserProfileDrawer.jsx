import React from 'react';
import { X, Mail, Phone, Briefcase, Hash, Activity, LogIn, Edit, ShieldOff } from 'lucide-react';
import StatusBadge from './StatusBadge';
import RoleBadge from './RoleBadge';

export default function UserProfileDrawer({ user, onClose }) {
  if (!user) return null;

  return (
    <div className={`fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto w-full sm:w-[400px] xl:w-[450px] bg-card border-t sm:border-t-0 sm:border-l border-border shadow-2xl transition-transform duration-300 z-40 flex flex-col translate-y-0 lg:fixed lg:top-16 lg:bottom-0 lg:right-0 rounded-t-3xl sm:rounded-none max-h-[85vh] sm:max-h-none`}>
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border sticky top-0 bg-card dark:bg-slate-900 z-10 shrink-0">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white">User Profile</h3>
        <button 
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        
        {/* Profile Header */}
        <div className="p-6 flex flex-col items-center border-b border-border bg-slate-50/50 dark:bg-slate-800/20">
          <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center text-3xl font-bold border-4 border-white dark:border-slate-800 shadow-md mb-4">
            {user.avatar}
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{user.name}</h2>
          <p className="text-sm text-slate-500 mb-3">{user.designation}</p>
          <div className="flex gap-2">
            <RoleBadge role={user.role} />
            <StatusBadge status={user.status} />
          </div>
        </div>

        {/* Contact & Info */}
        <div className="p-6 border-b border-border">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Contact Information</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 dark:text-slate-100">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 dark:text-slate-100">{user.phone || '+1 (555) 000-0000'}</span>
            </div>
          </div>
        </div>

        {/* Employment */}
        <div className="p-6 border-b border-border">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Employment Details</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <Hash className="w-4 h-4" /> Employee ID
              </div>
              <span className="font-medium text-slate-900 dark:text-slate-100">{user.id}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <Briefcase className="w-4 h-4" /> Department
              </div>
              <span className="font-medium text-slate-900 dark:text-slate-100">{user.department}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <Activity className="w-4 h-4" /> Reporting To
              </div>
              <span className="font-medium text-slate-900 dark:text-slate-100">{user.manager || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-500">
                <LogIn className="w-4 h-4" /> Last Login
              </div>
              <span className="font-medium text-slate-900 dark:text-slate-100">{user.lastLogin}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-800/30 flex gap-3 shrink-0">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl transition-all shadow-sm">
          <Edit className="w-4 h-4" /> Edit
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl transition-all shadow-sm text-red-600 dark:text-red-500">
          <ShieldOff className="w-4 h-4" /> Suspend
        </button>
      </div>
    </div>
  );
}
