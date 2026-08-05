import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, ChevronDown, Check, UserPlus, Eye, Edit, Key, ShieldOff, Trash2 } from 'lucide-react';
import { users as initialUsers } from '../data/mockData';
import { cn } from '../components/Sidebar';

const StatusBadge = ({ status }) => {
  const styles = {
    Active: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
    Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    Inactive: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
  };

  return (
    <span className={cn("px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase border", styles[status] || styles.Inactive)}>
      {status}
    </span>
  );
};

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(initialUsers);
  const [openActionMenuId, setOpenActionMenuId] = useState(null);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleActionMenu = (id) => {
    setOpenActionMenuId(openActionMenuId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto w-full animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground tracking-tight">User Management</h2>
          <p className="text-sm text-slate-500 mt-1">Manage organizational access and roles across the instance.</p>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Invite User
        </button>
      </div>

      <div className="bg-card dark:bg-slate-900 rounded-2xl border border-border shadow-sm flex flex-col overflow-hidden">
        
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex-1 sm:flex-none justify-center">
              Role
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex-1 sm:flex-none justify-center">
              Department
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-950 border border-border rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex-1 sm:flex-none justify-center">
              Status
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase bg-slate-50/50 dark:bg-slate-800/50 border-b border-border sticky top-0 z-10">
              <tr>
                <th scope="col" className="p-4 w-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3">Name</th>
                <th scope="col" className="px-4 py-3">Role</th>
                <th scope="col" className="px-4 py-3">Department</th>
                <th scope="col" className="px-4 py-3">Status</th>
                <th scope="col" className="px-4 py-3">Last Login</th>
                <th scope="col" className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border relative">
              {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-900" />
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-200 dark:border-blue-800/50 shadow-sm">
                        {user.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{user.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap font-medium">{user.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{user.department}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-slate-500">{user.lastLogin}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right relative">
                    <button 
                      onClick={() => toggleActionMenu(user.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    
                    {openActionMenuId === user.id && (
                      <div className="absolute right-8 top-10 w-48 bg-card dark:bg-slate-900 rounded-xl shadow-lg border border-border py-1.5 animate-in fade-in zoom-in-95 duration-200 z-50 text-left">
                        <button className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <Eye className="w-4 h-4" /> View Details
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <Edit className="w-4 h-4" /> Edit User
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                          <Key className="w-4 h-4" /> Reset Password
                        </button>
                        <div className="h-px bg-border my-1.5"></div>
                        <button className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-yellow-600 dark:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                          <ShieldOff className="w-4 h-4" /> Deactivate
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" className="px-4 py-16 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-2">
                        <Search className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">No users found</p>
                      <p className="text-sm">We couldn't find anyone matching "{searchTerm}"</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-border bg-slate-50/50 dark:bg-slate-800/20 flex items-center justify-between mt-auto">
          <span className="text-sm text-slate-500">
            Showing <span className="font-semibold text-foreground">1</span> to <span className="font-semibold text-foreground">{filteredUsers.length}</span> of <span className="font-semibold text-foreground">{users.length}</span> results
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium border border-border rounded-lg bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 disabled:opacity-50 transition-colors shadow-sm" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm font-medium border border-border rounded-lg bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
