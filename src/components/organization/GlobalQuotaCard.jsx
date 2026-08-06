import React from 'react';
import QuotaProgress from './QuotaProgress';
import { FiHardDrive, FiEdit3, FiPieChart } from 'react-icons/fi';

export default function GlobalQuotaCard({ globalQuota, onEditGlobalQuota }) {
  const totalTB = (globalQuota.totalCapacityGB / 1024).toFixed(1);
  const usedTB = (globalQuota.usedStorageGB / 1024).toFixed(2);
  const remainingTB = (globalQuota.remainingStorageGB / 1024).toFixed(2);

  return (
    <div className="org-global-quota-card">
      <div className="org-global-quota-header">
        <div className="flex items-center gap-3">
          <div className="org-global-quota-icon-bg">
            <FiHardDrive className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="org-global-quota-title">Global Enterprise Storage Quota</h3>
            <p className="org-global-quota-subtitle">Central disk capacity allocated across all branches</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onEditGlobalQuota}
          className="org-btn-secondary"
        >
          <FiEdit3 className="w-4 h-4" />
          <span>Edit Capacity</span>
        </button>
      </div>

      <div className="org-global-quota-body">
        <div className="org-global-quota-metrics-grid">
          {/* Total Capacity */}
          <div className="org-quota-stat-box">
            <span className="title">Total Capacity</span>
            <span className="value">{totalTB} <span className="unit">TB</span></span>
            <span className="subtext">Max Cloud Allocation</span>
          </div>

          {/* Used Storage */}
          <div className="org-quota-stat-box">
            <span className="title">Used Storage</span>
            <span className="value text-blue-400">{usedTB} <span className="unit">TB</span></span>
            <span className="subtext">{globalQuota.percentageUsed}% of quota used</span>
          </div>

          {/* Remaining Storage */}
          <div className="org-quota-stat-box">
            <span className="title">Remaining Storage</span>
            <span className="value text-emerald-400">{remainingTB} <span className="unit">TB</span></span>
            <span className="subtext">{100 - globalQuota.percentageUsed}% available</span>
          </div>
        </div>

        {/* Progress Bar & Percentage Footer */}
        <div className="org-global-quota-progress-section">
          <div className="flex justify-between items-center mb-1.5 text-xs font-semibold">
            <span className="text-slate-300">Global Utilization Rate</span>
            <span className="text-blue-400">{globalQuota.percentageUsed}%</span>
          </div>
          <QuotaProgress percentage={globalQuota.percentageUsed} />
        </div>
      </div>
    </div>
  );
}
