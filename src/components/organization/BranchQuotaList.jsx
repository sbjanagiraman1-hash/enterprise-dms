import React from 'react';
import BranchQuotaCard from './BranchQuotaCard';
import { FiHardDrive, FiPlus } from 'react-icons/fi';

export default function BranchQuotaList({ branchQuotas = [], onEditQuota, onAllocateNewQuota }) {
  return (
    <div className="org-branch-quota-list-section">
      <div className="org-branch-quota-list-header">
        <div>
          <h3 className="org-branch-quota-list-title">Branch Disk Quotas</h3>
          <p className="org-branch-quota-list-subtitle">Storage limits allocated to each regional branch</p>
        </div>

        <button
          type="button"
          onClick={onAllocateNewQuota}
          className="org-btn-primary"
        >
          <FiPlus className="w-4 h-4" />
          <span>Allocate New Quota</span>
        </button>
      </div>

      <div className="org-branch-quota-grid">
        {branchQuotas.map((item) => (
          <BranchQuotaCard
            key={item.id}
            branchQuota={item}
            onEditQuota={onEditQuota}
          />
        ))}
      </div>
    </div>
  );
}
