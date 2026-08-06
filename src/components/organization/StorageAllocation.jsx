import React, { useState, useMemo } from 'react';
import { 
  FiHardDrive, 
  FiArrowUpRight, 
  FiFileText, 
  FiImage, 
  FiDatabase, 
  FiArchive,
  FiCheckCircle,
  FiX
} from 'react-icons/fi';

export default function StorageAllocation({ showNotification }) {
  const [totalCapacityGB, setTotalCapacityGB] = useState(1024); // 1 TB
  const [usedStorageGB, setUsedStorageGB] = useState(450);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestedQuotaGB, setRequestedQuotaGB] = useState(2048); // 2 TB
  const [requestReason, setRequestReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Storage metrics breakdown
  const breakdown = [
    { name: 'Documents & Files', sizeGB: 180, color: '#3b82f6', icon: FiFileText },
    { name: 'Images & Media', sizeGB: 150, color: '#8b5cf6', icon: FiImage },
    { name: 'Databases & Logs', sizeGB: 80, color: '#06b6d4', icon: FiDatabase },
    { name: 'System Backups', sizeGB: 40, color: '#f59e0b', icon: FiArchive },
  ];

  const remainingStorageGB = useMemo(() => {
    return Math.max(0, totalCapacityGB - usedStorageGB);
  }, [totalCapacityGB, usedStorageGB]);

  const percentageUsed = useMemo(() => {
    return Math.min(100, Math.round((usedStorageGB / totalCapacityGB) * 100));
  }, [totalCapacityGB, usedStorageGB]);

  // SVG Circular Gauge Calculations
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentageUsed / 100) * circumference;

  const handleRequestQuota = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setRequestReason('');
      if (showNotification) {
        showNotification(`Quota request for ${requestedQuotaGB} GB submitted to system administrator.`);
      }
    }, 700);
  };

  return (
    <div className="org-card" id="section-storage">
      <div className="org-card-header flex-wrap gap-4 justify-between items-start">
        <div>
          <h2 className="org-card-title">Storage Allocation & Quotas</h2>
          <p className="org-card-subtitle">
            Monitor real-time disk consumption, allocation limits, and submit capacity expansion requests.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="org-btn-primary shrink-0"
        >
          <FiArrowUpRight className="w-4 h-4" />
          <span>Request Quota Increase</span>
        </button>
      </div>

      <div className="org-card-body space-y-8">
        {/* Main Indicator & Stats Card Grid */}
        <div className="org-storage-main-grid">
          {/* Circular SVG Gauge Box */}
          <div className="org-storage-circle-card">
            <div className="org-circle-gauge-wrapper">
              <svg className="org-circle-svg" viewBox="0 0 160 160">
                {/* Background Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="org-circle-bg"
                />
                {/* Progress Ring */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  className="org-circle-progress"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                  }}
                />
              </svg>

              <div className="org-circle-center-text">
                <span className="org-circle-percentage">{percentageUsed}%</span>
                <span className="org-circle-subtext">Capacity Used</span>
              </div>
            </div>

            <div className="org-circle-footer-info">
              <span className="org-circle-status-badge">
                <span className="org-status-dot green" />
                Normal Usage Rate
              </span>
            </div>
          </div>

          {/* 3 Metric Stat Cards */}
          <div className="org-storage-stats-column">
            {/* Stat 1: Used Storage */}
            <div className="org-stat-box">
              <div className="org-stat-header">
                <span className="org-stat-title">Used Storage</span>
                <div className="org-stat-icon-wrapper blue">
                  <FiHardDrive className="w-4 h-4" />
                </div>
              </div>
              <div className="org-stat-value">
                {usedStorageGB} <span className="org-stat-unit">GB</span>
              </div>
              <p className="org-stat-meta">{percentageUsed}% of total quota consumed</p>
            </div>

            {/* Stat 2: Remaining Storage */}
            <div className="org-stat-box">
              <div className="org-stat-header">
                <span className="org-stat-title">Remaining Capacity</span>
                <div className="org-stat-icon-wrapper emerald">
                  <FiHardDrive className="w-4 h-4" />
                </div>
              </div>
              <div className="org-stat-value">
                {remainingStorageGB} <span className="org-stat-unit">GB</span>
              </div>
              <p className="org-stat-meta">{100 - percentageUsed}% storage available</p>
            </div>

            {/* Stat 3: Total Capacity */}
            <div className="org-stat-box">
              <div className="org-stat-header">
                <span className="org-stat-title">Total Allocated Quota</span>
                <div className="org-stat-icon-wrapper purple">
                  <FiHardDrive className="w-4 h-4" />
                </div>
              </div>
              <div className="org-stat-value">
                {(totalCapacityGB / 1024).toFixed(1)} <span className="org-stat-unit">TB</span>
                <span className="text-xs text-slate-400 font-normal ml-2">({totalCapacityGB} GB)</span>
              </div>
              <p className="org-stat-meta">Enterprise Tier Allocation</p>
            </div>
          </div>
        </div>

        {/* Linear Usage Bar & Storage Category Breakdown */}
        <div className="org-storage-breakdown-section">
          <h4 className="org-breakdown-title">Usage Breakdown by Category</h4>

          {/* Multi-segmented Linear Bar */}
          <div className="org-linear-bar">
            {breakdown.map((item) => (
              <div
                key={item.name}
                className="org-linear-segment"
                style={{
                  width: `${(item.sizeGB / totalCapacityGB) * 100}%`,
                  backgroundColor: item.color,
                }}
                title={`${item.name}: ${item.sizeGB} GB`}
              />
            ))}
          </div>

          {/* Category Cards List */}
          <div className="org-breakdown-grid">
            {breakdown.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="org-breakdown-item">
                  <div className="org-breakdown-item-header">
                    <div className="flex items-center gap-2">
                      <span 
                        className="org-breakdown-color-dot" 
                        style={{ backgroundColor: item.color }} 
                      />
                      <ItemIcon className="w-4 h-4 text-slate-400" />
                      <span className="org-breakdown-name">{item.name}</span>
                    </div>
                    <span className="org-breakdown-size">{item.sizeGB} GB</span>
                  </div>
                  <span className="org-breakdown-percent">
                    {((item.sizeGB / totalCapacityGB) * 100).toFixed(1)}% of total
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quota Increase Request Modal */}
      {isModalOpen && (
        <div className="org-modal-overlay">
          <div className="org-modal-card">
            <div className="org-modal-header">
              <div className="flex items-center gap-2">
                <FiHardDrive className="text-blue-500 w-5 h-5" />
                <h3 className="org-modal-title">Request Storage Quota Increase</h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="org-modal-close-btn"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRequestQuota} className="org-modal-body space-y-4">
              <div className="org-field-group">
                <label className="org-field-label">Current Allocated Quota</label>
                <input
                  type="text"
                  value={`${totalCapacityGB} GB (1.0 TB)`}
                  disabled
                  className="org-input plain disabled"
                />
              </div>

              <div className="org-field-group">
                <label className="org-field-label">Requested Total Capacity</label>
                <select
                  value={requestedQuotaGB}
                  onChange={(e) => setRequestedQuotaGB(Number(e.target.value))}
                  className="org-select"
                >
                  <option value={2048}>2.0 TB (2048 GB) - Plus Tier</option>
                  <option value={4096}>4.0 TB (4096 GB) - Pro Tier</option>
                  <option value={10240}>10.0 TB (10240 GB) - Enterprise Max</option>
                </select>
              </div>

              <div className="org-field-group">
                <label className="org-field-label">Business Justification / Notes</label>
                <textarea
                  value={requestReason}
                  onChange={(e) => setRequestReason(e.target.value)}
                  rows={3}
                  placeholder="Explain the required capacity increase for internal review..."
                  className="org-textarea"
                  required
                />
              </div>

              <div className="org-modal-footer">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="org-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="org-btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <span className="org-spinner" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
