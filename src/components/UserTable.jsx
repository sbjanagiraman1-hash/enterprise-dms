import React from 'react';
import { MoreVertical, Mail, Hash } from 'lucide-react';
import StatusBadge from './StatusBadge';
import RoleBadge from './RoleBadge';
import UserRow from './UserRow';
import Pagination from './Pagination';

export default function UserTable({ users, selectedUsers, onSelectUser, onSelectAll, onViewProfile }) {
  const allSelected = users.length > 0 && selectedUsers.length === users.length;
  
  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-sm flex flex-col flex-1 overflow-hidden min-h-[400px]">
      
      {/* Mobile Card Layout */}
      <div className="block md:hidden flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {users.map(user => (
          <div key={user.id} className={`border border-border rounded-xl p-4 transition-colors ${selectedUsers.includes(user.id) ? 'bg-blue-50/50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-card dark:bg-slate-900'}`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => onSelectUser(user.id)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900 cursor-pointer" 
                />
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                  {user.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-sm" onClick={() => onViewProfile(user)}>{user.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Mail className="w-3 h-3" /> {user.email}</div>
                </div>
              </div>
              <button className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Employee ID</span>
                <span className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1"><Hash className="w-3 h-3" /> {user.id}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Department</span>
                <span className="text-xs text-slate-700 dark:text-slate-300">{user.department}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <RoleBadge role={user.role} />
              <StatusBadge status={user.status} />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Table Layout */}
      <div className="hidden md:block overflow-x-auto custom-scrollbar flex-1 relative">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-border sticky top-0 z-20 shadow-sm backdrop-blur-md">
            <tr>
              <th className="p-4 w-4">
                <input 
                  type="checkbox" 
                  checked={allSelected}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900 cursor-pointer" 
                  aria-label="Select all users"
                />
              </th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Employee ID</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Department</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Designation</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Login</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created Date</th>
              <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow 
                key={user.id} 
                user={user} 
                isSelected={selectedUsers.includes(user.id)}
                onSelect={onSelectUser}
                onViewProfile={onViewProfile}
              />
            ))}
          </tbody>
        </table>
      </div>
      
      <Pagination totalItems={42} itemsPerPage={10} currentPage={1} />
    </div>
  );
}
