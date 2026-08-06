import React from 'react';
import { FiUser, FiUsers, FiHardDrive, FiCheckCircle } from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function BranchCard({ branch }) {
  if (!branch) return null;

  const formattedQuota = branch.allocatedStorageGB >= 1024
    ? `${(branch.allocatedStorageGB / 1024).toFixed(1)} TB`
    : `${branch.allocatedStorageGB} GB`;

  return (
    <div className="org-branch-details-card">
      <div className="org-branch-details-header">
        <div className="flex items-center gap-3">
          <div className="org-branch-icon-box">
            <FaBuilding className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <span className="org-branch-section-title">Branch Details</span>
            <h3 className="org-branch-primary-heading">{branch.name}</h3>
            <p className="org-branch-muted-subtitle">{branch.type || 'Headquarters'}</p>
          </div>
        </div>

        <span className="org-status-badge-active">
          <FiCheckCircle className="w-3.5 h-3.5" />
          <span>{branch.status || 'Active'}</span>
        </span>
      </div>

      <div className="org-branch-details-grid">
        {/* Field 1: Manager */}
        <div className="org-branch-field-item">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiUser className="w-4 h-4 text-blue-500" />
            <span className="org-field-label">Manager</span>
          </div>
          <span className="org-field-val font-semibold">{branch.manager || 'Jonathan Vance'}</span>
        </div>

        {/* Field 2: Employees */}
        <div className="org-branch-field-item">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiUsers className="w-4 h-4 text-blue-500" />
            <span className="org-field-label">Employees</span>
          </div>
          <span className="org-field-val">{branch.employeeCount || 450}</span>
        </div>

        {/* Field 3: Allocated Quota */}
        <div className="org-branch-field-item col-span-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <FiHardDrive className="w-4 h-4 text-blue-500" />
            <span className="org-field-label">Allocated Quota</span>
          </div>
          <span className="org-field-val font-mono">{formattedQuota}</span>
        </div>
      </div>
    </div>
  );
}
