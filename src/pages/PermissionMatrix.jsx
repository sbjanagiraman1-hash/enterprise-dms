import React, { useState, useEffect } from 'react';
import { ChevronRight, Search, Plus, Save, RotateCcw, AlertCircle, CheckCircle } from 'lucide-react';
import { mockPermissions } from '../data/mockPermissions';
import PermissionTable from '../components/PermissionTable';
import PermissionFilters from '../components/PermissionFilters';
import InheritedToggle from '../components/InheritedToggle';
import PermissionModal from '../components/PermissionModal';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function PermissionMatrix() {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isInherited, setIsInherited] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setPermissions(mockPermissions);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const showSnackbar = (message, type = 'success') => {
    setSnackbar({ message, type });
    setTimeout(() => setSnackbar(null), 3000);
  };

  const handleUpdatePermission = (id, key, newVal) => {
    setPermissions(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          permissions: {
            ...p.permissions,
            [key]: { ...p.permissions[key], value: newVal, type: 'Explicit' }
          },
          type: 'Explicit'
        };
      }
      return p;
    }));
    setHasUnsavedChanges(true);
  };

  const handleRemovePrincipal = (id) => {
    setPermissions(prev => prev.filter(p => p.id !== id));
    setHasUnsavedChanges(true);
    showSnackbar('Principal removed from permissions');
  };

  const handleSave = () => {
    setHasUnsavedChanges(false);
    showSnackbar('Permissions saved successfully');
  };

  const handleReset = () => {
    setPermissions(mockPermissions);
    setHasUnsavedChanges(false);
    showSnackbar('Changes discarded', 'info');
  };

  const handleAddPrincipal = () => {
    setIsModalOpen(true);
  };

  const filteredPermissions = permissions.filter(p => 
    p.principalName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.department.toLowerCase().includes(searchQuery.toLowerCase())
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

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <div className="flex flex-col w-full">
          
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium overflow-x-auto whitespace-nowrap pb-1">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">User Management</span>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-300 dark:text-slate-600" />
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Permission Matrix</span>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-300 dark:text-slate-600" />
            <span className="text-slate-900 dark:text-slate-100 font-semibold">/Finance/Q4_Reports</span>
          </div>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-6 gap-4 shrink-0">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Permission Matrix</h2>
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-2 py-0.5 rounded-md text-xs font-bold tracking-wider uppercase border border-blue-200 dark:border-blue-800/50">
                  RBAC
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage user, role and department permissions for enterprise resources.</p>
            </div>
            
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button 
                onClick={handleReset}
                disabled={!hasUnsavedChanges}
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-border text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
              <button 
                onClick={handleSave}
                disabled={!hasUnsavedChanges}
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-500/50"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-4 shrink-0">
            <InheritedToggle isInherited={isInherited} onChange={setIsInherited} />
            
            <div className="flex items-center gap-3 w-full xl:w-auto">
              <div className="relative flex-1 xl:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search Roles or Users..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                />
              </div>
              <button 
                onClick={handleAddPrincipal}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add Principal</span>
              </button>
            </div>
          </div>

          <PermissionFilters />

          {error ? (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in flex-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unable to load permissions</h3>
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
          ) : (
            <div className="flex-1 flex flex-col min-h-0 animate-in fade-in duration-300">
              <PermissionTable 
                permissions={filteredPermissions} 
                onUpdate={handleUpdatePermission}
                onRemove={handleRemovePrincipal}
              />
            </div>
          )}

        </div>
      </div>

      <PermissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={() => { setIsModalOpen(false); showSnackbar('Principal added to matrix'); }}
      />
    </div>
  );
}
