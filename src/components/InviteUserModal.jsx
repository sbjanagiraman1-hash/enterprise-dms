import React from 'react';
import { X, UserPlus, Mail, Phone, Hash, Key } from 'lucide-react';

export default function InviteUserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-card dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-3xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 shrink-0">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Invite User</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Personal Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 border-b border-border pb-2">Personal Details</h4>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm focus:ring-2 focus:ring-blue-500/50 outline-none" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input required type="email" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="john.doe@globalcorp.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="tel" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* Employment Details */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 border-b border-border pb-2">Employment Details</h4>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Employee ID <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Hash className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input required type="text" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="EMP-000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Department <span className="text-red-500">*</span></label>
                  <select required className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="">Select</option>
                    <option>Engineering</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role <span className="text-red-500">*</span></label>
                  <select required className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="">Select</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Designation</label>
                <input type="text" className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="e.g. Senior Developer" />
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4 md:col-span-2">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 border-b border-border pb-2 mt-2">Security</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Temporary Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required type="password" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="••••••••" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required type="password" className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>
        
        <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-900/50 flex justify-end gap-3 shrink-0">
          <button onClick={onClose} type="button" className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-border rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            Cancel
          </button>
          <button onClick={handleSubmit} type="submit" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/50">
            Invite User
          </button>
        </div>
      </div>
    </div>
  );
}
