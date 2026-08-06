import React, { useState, useEffect } from 'react';
import { Search, UserPlus, AlertCircle, CheckCircle, Settings, Shield, Trash2 } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';
import UserTable from '../components/UserTable';
import UserFilters from '../components/UserFilters';
import InviteUserModal from '../components/InviteUserModal';
import UserProfileDrawer from '../components/UserProfileDrawer';
import LoadingSkeleton from '../components/LoadingSkeleton';
import EmptyState from '../components/EmptyState';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(null);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const showSnackbar = (message, type = 'success') => {
    setSnackbar({ message, type });
    setTimeout(() => setSnackbar(null), 3000);
  };

  const handleSelectUser = (id) => {
    setSelectedUsers(prev => 
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedUsers(filteredUsers.map(u => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleViewProfile = (user) => {
    setActiveUser(user);
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex relative w-full">
      
      {/* Snackbar */}
      {snackbar && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 animate-in slide-in-from-top-4 z-50 shadow-sm border ${
          snackbar.type === 'success' 
            ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50' 
            : 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50'
        }`}>
          <CheckCircle className="w-4 h-4" /> {snackbar.message}
        </div>
      )}

      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${activeUser ? 'lg:pr-[400px] xl:pr-[450px]' : ''}`}>
        <div className="flex flex-col w-full">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4 shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">User Management</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage users, departments, roles, permissions and account access.</p>
            </div>
            
            <button 
              onClick={() => setIsInviteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm flex items-center gap-2 focus:ring-4 focus:ring-blue-500/50 w-full sm:w-auto justify-center"
            >
              <UserPlus className="w-4 h-4" />
              Invite User
            </button>
          </div>

          {/* Toolbar (Bulk Actions & Search) */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 shrink-0">
            {selectedUsers.length > 0 ? (
              <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl px-4 py-2 animate-in fade-in zoom-in-95 w-full xl:w-auto overflow-x-auto whitespace-nowrap">
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-400 mr-2">
                  {selectedUsers.length} selected
                </span>
                <div className="h-4 w-px bg-blue-200 dark:bg-blue-800 hidden sm:block"></div>
                <button className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded transition-colors hidden sm:flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Assign Role
                </button>
                <button className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded transition-colors hidden sm:flex items-center gap-1.5">
                  <Settings className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Assign Dept
                </button>
                <button className="text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 px-2 py-1 rounded transition-colors flex items-center gap-1.5 ml-auto sm:ml-0">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            ) : (
              <UserFilters onRefresh={() => { setLoading(true); setTimeout(() => setLoading(false), 500); }} />
            )}
            
            <div className="relative w-full xl:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search by name, email or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
              />
            </div>
          </div>

          {error ? (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-border">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unable to load users</h3>
              <p className="text-slate-500 text-center max-w-sm mb-6">There was an error communicating with the server.</p>
              <button 
                onClick={() => { setLoading(true); setError(false); setTimeout(() => setLoading(false), 800); }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/50"
              >
                Retry
              </button>
            </div>
          ) : loading ? (
            <div className="flex-1 mt-2">
              <LoadingSkeleton view="list" />
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl border border-border flex items-center justify-center">
              <EmptyState onUpload={() => setIsInviteModalOpen(true)} />
            </div>
          ) : (
            <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-300">
              <UserTable 
                users={filteredUsers}
                selectedUsers={selectedUsers}
                onSelectUser={handleSelectUser}
                onSelectAll={handleSelectAll}
                onViewProfile={handleViewProfile}
              />
            </div>
          )}

        </div>
      </div>

      <UserProfileDrawer user={activeUser} onClose={() => setActiveUser(null)} />
      
      {/* Mobile overlay for panel */}
      {activeUser && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setActiveUser(null)}
          aria-hidden="true"
        />
      )}

      <InviteUserModal 
        isOpen={isInviteModalOpen} 
        onClose={() => { setIsInviteModalOpen(false); showSnackbar('User invitation sent successfully!'); }} 
      />
    </div>
  );
}
