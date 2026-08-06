import React from 'react';
import { Trash2 } from 'lucide-react';
import PermissionCheckbox from './PermissionCheckbox';
import PermissionBadge from './PermissionBadge';

export default function PermissionRow({ permission, onUpdate, onRemove }) {
  const permKeys = ['read', 'write', 'delete', 'share', 'archive', 'admin'];
  
  return (
    <tr className="border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
      <td className="py-4 px-4 sm:px-6">
        <div className="flex items-center gap-3 min-w-[200px]">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
            {permission.avatar}
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 line-clamp-1">{permission.principalName}</p>
            <p className="text-xs text-slate-500 line-clamp-1">{permission.principalType} • {permission.department}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 sm:px-6">
        <PermissionBadge type={permission.type} />
      </td>
      
      {permKeys.map(key => (
        <td key={key} className="py-4 px-4 sm:px-6 text-center">
          <div className="flex justify-center">
            <PermissionCheckbox 
              checked={permission.permissions[key].value}
              type={permission.permissions[key].type}
              onChange={(newVal) => onUpdate(permission.id, key, newVal)}
            />
          </div>
        </td>
      ))}
      
      <td className="py-4 px-4 sm:px-6 text-right">
        <button 
          onClick={() => onRemove(permission.id)}
          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Remove Principal"
          aria-label={`Remove ${permission.principalName}`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
