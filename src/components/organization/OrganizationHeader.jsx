import React from 'react';
import { FiDownload, FiPlus, FiGitBranch } from 'react-icons/fi';

export default function OrganizationHeader({ onExport, onAddBranch }) {
  return (
    <header className="org-struct-header">
      <div className="org-struct-header-content">
        <h1 className="org-struct-title">Advanced Organization Structure</h1>
        <p className="org-struct-subtitle">
          Manage corporate branch hierarchy, map departmental units, and control disk storage allocations.
        </p>
      </div>

      <div className="org-struct-header-actions">
        <button
          type="button"
          onClick={onExport}
          className="org-btn-secondary"
          title="Export organization structure map"
        >
          <FiDownload className="w-4 h-4" />
          <span>Export Hierarchy</span>
        </button>

        <button
          type="button"
          onClick={onAddBranch}
          className="org-btn-primary"
          title="Create a new organizational branch"
        >
          <FiPlus className="w-4 h-4" />
          <span>New Branch</span>
        </button>
      </div>
    </header>
  );
}
