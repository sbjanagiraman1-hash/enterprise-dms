import React, { useState } from 'react';
import { MoreVertical, Eye, Edit, Key, UserCheck, Shield, ShieldOff, Trash2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import RoleBadge from './RoleBadge';

export default function UserRow({ user, isSelected, onSelect, onViewProfile }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className={`border-b border-border hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group ${isSelected ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isSelected}
            onChange={() => onSelect(user.id)}
            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900 cursor-pointer" 
          />
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap min-w-[250px]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-200 dark:border-blue-800/50 shadow-sm shrink-0">
            {user.avatar}
          </div>
          <div>
            <div 
              className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => onViewProfile(user)}
            >
              {user.name}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{user.id}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <RoleBadge role={user.role} />
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300">{user.department}</td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">{user.designation}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <StatusBadge status={user.status} />
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{user.lastLogin}</td>
      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{user.createdDate}</td>
      
      <td className="px-4 py-3 whitespace-nowrap text-right relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          onBlur={() => setTimeout(() => setShowMenu(false), 200)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Row actions"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
        
        {showMenu && (
          <div className="absolute right-8 top-10 w-48 bg-card dark:bg-slate-900 rounded-xl shadow-xl border border-border py-1.5 animate-in fade-in zoom-in-95 duration-200 z-50 text-left overflow-hidden">
            <button onMouseDown={() => onViewProfile(user)} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Eye className="w-4 h-4" /> View Profile
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Edit className="w-4 h-4" /> Edit User
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Shield className="w-4 h-4" /> Assign Role
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Key className="w-4 h-4" /> Reset Password
            </button>
            <div className="h-px bg-border my-1.5"></div>
            {user.status !== 'Active' ? (
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                <UserCheck className="w-4 h-4" /> Activate
              </button>
            ) : (
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-yellow-600 dark:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                <ShieldOff className="w-4 h-4" /> Deactivate
              </button>
            )}
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
