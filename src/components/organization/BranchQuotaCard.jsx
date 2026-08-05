import React from 'react';
import QuotaProgress from './QuotaProgress';
import { FiEdit2, FiHardDrive } from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function BranchQuotaCard({ branchQuota, onEditQuota }) {
  const allocatedTB = (branchQuota.allocatedStorageGB / 1024).toFixed(1);
  const usedGB = branchQuota.usedStorageGB;
  const remainingGB = branchQuota.remainingStorageGB;

  return (
    <div className="org-branch-quota-card">
      <div className="org-branch-quota-card-header">
        <div className="flex items-center gap-2.5">
          <div className="org-branch-quota-icon">
            <FaBuilding className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h4 className="org-branch-quota-name">{branchQuota.branchName}</h4>
            <span className="org-branch-quota-manager">Manager: {branchQuota.manager}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onEditQuota(branchQuota)}
          className="org-branch-quota-edit-btn"
          title="Edit Branch Storage Quota"
        >
          <FiEdit2 className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="org-branch-quota-metrics">
        <div className="flex justify-between items-end">
          <div>
            <span className="label">Allocated Quota:</span>
            <span className="val font-mono">{allocatedTB} TB ({branchQuota.allocatedStorageGB} GB)</span>
          </div>
          <span className="percent-badge">{branchQuota.percentageUsed}%</span>
        </div>

        <QuotaProgress percentage={branchQuota.percentageUsed} status={branchQuota.status} />

        <div className="org-branch-quota-footer">
          <span className="text-slate-400">Used: <strong className="text-slate-200">{usedGB} GB</strong></span>
          <span className="text-slate-400">Remaining: <strong className="text-emerald-400">{remainingGB} GB</strong></span>
        </div>
      </div>
    </div>
  );
}
