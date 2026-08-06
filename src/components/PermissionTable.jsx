import React from 'react';
import { Shield, Users, User, Trash2 } from 'lucide-react';
import PermissionCheckbox from './PermissionCheckbox';

import PermissionRow from './PermissionRow';

export default function PermissionTable({ permissions, onUpdate, onRemove }) {
  const headers = ['Principal', 'Access Type', 'Read', 'Write', 'Delete', 'Share', 'Archive', 'Admin', ''];
  
  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      
      {/* Mobile Card Layout */}
      <div className="block md:hidden flex-1 overflow-y-auto p-4 space-y-4">
        {permissions.map(perm => (
          <div key={perm.id} className={`border border-border rounded-xl p-4 bg-card dark:bg-slate-900 ${perm.inherited ? 'opacity-80' : ''}`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  perm.type === 'Role' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400'
                }`}>
                  {perm.type === 'Role' ? <Shield className="w-5 h-5" /> : perm.type === 'Group' ? <Users className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                    {perm.principalName}
                    <span className="text-[10px] uppercase font-bold text-slate-400 px-1.5 py-0.5 rounded border border-border bg-slate-50 dark:bg-slate-800">{perm.type}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{perm.roleName}</div>
                </div>
              </div>
              <button 
                onClick={() => onRemove(perm.id)}
                disabled={perm.inherited}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg disabled:opacity-30 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2">
                {['read', 'write', 'delete', 'share', 'archive', 'admin'].map(action => (
                  <div key={action} className="flex items-center gap-2">
                    <PermissionCheckbox 
                      checked={perm[action]} 
                      onChange={(checked) => onUpdate(perm.id, action, checked)} 
                      disabled={perm.inherited}
                    />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 capitalize">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {permissions.length === 0 && (
          <div className="text-center py-8 text-slate-500 text-sm">No permissions found.</div>
        )}
      </div>

      {/* Desktop/Tablet Table Layout */}
      <div className="hidden md:block overflow-x-auto custom-scrollbar flex-1">
        <table className="w-full text-left min-w-[900px]">
          <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-border sticky top-0 z-10 shadow-sm">
            <tr>
              {headers.map((header, idx) => (
                <th 
                  key={idx} 
                  className={`py-3 px-4 sm:px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider ${
                    idx > 1 && idx < headers.length - 1 ? 'text-center' : ''
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissions.map(perm => (
              <PermissionRow 
                key={perm.id} 
                permission={perm} 
                onUpdate={onUpdate}
                onRemove={onRemove}
              />
            ))}
          </tbody>
        </table>
        
        {permissions.length === 0 && (
          <div className="h-64 flex flex-col items-center justify-center text-slate-500">
            <p className="text-sm">No permissions found matching the criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
