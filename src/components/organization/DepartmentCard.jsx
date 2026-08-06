import React from 'react';
import { FiGrid, FiUser, FiUsers, FiHardDrive, FiCheckCircle } from 'react-icons/fi';

export default function DepartmentCard({ node }) {
  if (!node) return null;

  return (
    <div className="org-branch-details-card">
      <div className="org-branch-details-header">
        <div className="flex items-center gap-3">
          <div className="org-branch-icon-box purple">
            <FiGrid className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <span className="org-branch-section-title">Department Details</span>
            <h3 className="org-branch-primary-heading">{node.name}</h3>
            <p className="org-branch-muted-subtitle">{node.departmentType || 'Department Node'}</p>
          </div>
        </div>

        <span className="org-status-badge-active">
          <FiCheckCircle className="w-3.5 h-3.5" />
          <span>{node.status || 'Active'}</span>
        </span>
      </div>

      <div className="org-branch-details-grid">
        <div className="org-branch-field-item">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiUser className="w-4 h-4 text-purple-500" />
            <span className="org-field-label">Assigned Manager</span>
          </div>
          <span className="org-field-val font-semibold">{node.manager || 'Unassigned'}</span>
        </div>

        <div className="org-branch-field-item">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiUsers className="w-4 h-4 text-purple-500" />
            <span className="org-field-label">Employees</span>
          </div>
          <span className="org-field-val">{node.employeeCount || 0}</span>
        </div>

        <div className="org-branch-field-item col-span-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiHardDrive className="w-4 h-4 text-purple-500" />
            <span className="org-field-label">Allocated Storage</span>
          </div>
          <span className="org-field-val font-mono">{node.allocatedStorageGB} GB</span>
        </div>
      </div>
    </div>
  );
}
