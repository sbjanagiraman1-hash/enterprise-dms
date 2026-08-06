import React, { useState } from 'react';
import './BackupRecoveryManagement.css';

/**
 * Mock Dataset for Backup History
 */
const mockBackupHistory = [
  {
    id: 'BK-2026-0803',
    type: 'Full System Backup',
    date: '2026-08-03',
    time: '02:00 AM',
    size: '142.5 GB',
    duration: '18 min',
    location: 'AWS S3 (us-east-1)',
    status: 'Completed',
    checksum: 'sha256-e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    compression: '2.4 : 1 (GZIP)',
    encryption: 'AES-256 (KMS Managed)'
  },
  {
    id: 'BK-2026-0802',
    type: 'Incremental Backup',
    date: '2026-08-02',
    time: '02:00 AM',
    size: '12.8 GB',
    duration: '3 min',
    location: 'Azure Blob (East US)',
    status: 'Completed',
    checksum: 'sha256-88d4266fd4e6338d13b845fcf289579d209c897823b9217da3e161936f031589',
    compression: '3.1 : 1 (ZSTD)',
    encryption: 'AES-256'
  },
  {
    id: 'BK-2026-0801',
    type: 'Incremental Backup',
    date: '2026-08-01',
    time: '02:00 AM',
    size: '8.4 GB',
    duration: '2 min',
    location: 'Google Cloud Storage',
    status: 'Completed',
    checksum: 'sha256-c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646',
    compression: '2.8 : 1',
    encryption: 'AES-256'
  },
  {
    id: 'BK-2026-0731',
    type: 'Differential Backup',
    date: '2026-07-31',
    time: '11:00 PM',
    size: '34.2 GB',
    duration: '6 min',
    location: 'Local NAS (Node-01)',
    status: 'Completed',
    checksum: 'sha256-11f8a846c4f004f2f01f80f60c6d59b20757754f76239121a9956d6d843818e6',
    compression: '2.1 : 1',
    encryption: 'AES-256'
  }
];

export default function BackupRecoveryManagement() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBackup, setSelectedBackup] = useState(mockBackupHistory[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Schedules state
  const [schedules, setSchedules] = useState([
    { id: 'sch-1', name: 'Daily Backup', type: 'Incremental', nextRun: 'Today, 11:00 PM', enabled: true },
    { id: 'sch-2', name: 'Weekly Backup', type: 'Full System', nextRun: 'Sun, 02:00 AM', enabled: true },
    { id: 'sch-3', name: 'Monthly Backup', type: 'Deep Archive', nextRun: 'Sep 01, 2026', enabled: true },
    { id: 'sch-4', name: 'Yearly Archive', type: 'Immutable Lock', nextRun: 'Dec 31, 2026', enabled: false }
  ]);

  const toggleSchedule = (id) => {
    setSchedules((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item))
    );
  };

  const handleOpenBackupDetails = (bk) => {
    setSelectedBackup(bk);
    setIsDrawerOpen(true);
  };

  return (
    <div className="brm-page-container">
      {/* Page Title & Subtitle */}
      <header className="brm-header">
        <h1 className="brm-title">Backup &amp; Recovery Management</h1>
        <p className="brm-subtitle">Monitor, schedule, restore and protect enterprise document backups.</p>
      </header>

      {/* Top Navigation Tabs */}
      <nav className="brm-tabs-wrapper">
        {['Overview', 'Dashboard', 'Backup Jobs', 'Restore', 'Disaster Recovery', 'Policies'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`brm-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Top Action Bar */}
      <section className="brm-action-bar">
        <div className="brm-search-box">
          <span className="material-symbols-outlined" style={{ color: '#64748b' }}>search</span>
          <input
            type="text"
            className="brm-search-input"
            placeholder="Search backups by ID, location or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="brm-action-buttons">
          <button type="button" className="brm-icon-btn" title="Notifications">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button type="button" className="brm-icon-btn" title="Backup Settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button type="button" className="brm-secondary-btn">
            <span className="material-symbols-outlined">settings_backup_restore</span>
            Restore Wizard
          </button>
          <button type="button" className="brm-primary-btn">
            <span className="material-symbols-outlined">cloud_upload</span>
            Create Backup
          </button>
        </div>
      </section>

      {/* First Row: 4 Metric Cards */}
      <div className="brm-grid-4">
        {/* Card 1: Last Backup Status */}
        <div className="brm-card">
          <div className="brm-card-header">
            <h3 className="brm-card-title">Last Backup Status</h3>
            <div className="brm-card-icon-box">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span className="brm-badge-success">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
                Success
              </span>
              <span style={{ fontSize: '11.5px', color: '#64748b', marginTop: '4px' }}>
                Completed 2 hours ago
              </span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a' }}>
                ID: BK-2026-0803
              </span>
            </div>

            {/* Simple Circular Progress Ring */}
            <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="48" height="48" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3.8"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3.8"
                  strokeDasharray="100, 100"
                />
              </svg>
              <span style={{ position: 'absolute', fontSize: '10px', fontWeight: 700, color: '#15803d' }}>100%</span>
            </div>
          </div>
        </div>

        {/* Card 2: Cloud Storage Usage */}
        <div className="brm-card">
          <div className="brm-card-header">
            <h3 className="brm-card-title">Cloud Storage Usage</h3>
            <div className="brm-card-icon-box">
              <span className="material-symbols-outlined">cloud</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <span>742 GB Used</span>
              <span style={{ color: '#64748b', fontWeight: 500 }}>1,024 GB Total</span>
            </div>
            <div className="brm-progress-bar-bg">
              <div className="brm-progress-bar-fill" style={{ width: '72.5%' }}></div>
            </div>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Remaining Capacity: 282 GB (27.5% free)</span>
          </div>
        </div>

        {/* Card 3: Active Backup Jobs */}
        <div className="brm-card">
          <div className="brm-card-header">
            <h3 className="brm-card-title">Active Backup Jobs</h3>
            <div className="brm-card-icon-box">
              <span className="material-symbols-outlined">sync</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
            <div>
              <span style={{ color: '#64748b', display: 'block', fontSize: '10.5px' }}>RUNNING</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#2563eb' }}>2 Jobs</span>
            </div>
            <div>
              <span style={{ color: '#64748b', display: 'block', fontSize: '10.5px' }}>QUEUED</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#d97706' }}>1 Job</span>
            </div>
            <div>
              <span style={{ color: '#64748b', display: 'block', fontSize: '10.5px' }}>COMPLETED</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#16a34a' }}>148 Total</span>
            </div>
            <div>
              <span style={{ color: '#64748b', display: 'block', fontSize: '10.5px' }}>FAILED</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#dc2626' }}>0 Failed</span>
            </div>
          </div>
        </div>

        {/* Card 4: Recovery Readiness */}
        <div className="brm-card">
          <div className="brm-card-header">
            <h3 className="brm-card-title">Recovery Readiness</h3>
            <div className="brm-card-icon-box">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>99.8% Score</span>
            <span style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: 600 }}>Health Status: Optimal</span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Disaster Recovery Node: Online &amp; Synced</span>
          </div>
        </div>
      </div>

      {/* Second Row: Left (Backup Schedule) + Right (Recent Backup History) */}
      <div className="brm-grid-2">
        {/* Left Card: Backup Schedule */}
        <div className="brm-card">
          <h2 className="brm-section-title">
            <span className="material-symbols-outlined">schedule</span>
            Backup Schedule
          </h2>

          <div className="brm-schedule-list">
            {schedules.map((sch) => (
              <div key={sch.id} className="brm-schedule-item">
                <div className="brm-schedule-info">
                  <span className="brm-schedule-name">{sch.name}</span>
                  <span className="brm-schedule-sub">{sch.type} • Next: {sch.nextRun}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label className="dms-switch">
                    <input
                      type="checkbox"
                      checked={sch.enabled}
                      onChange={() => toggleSchedule(sch.id)}
                    />
                    <span className="dms-slider"></span>
                  </label>
                  <button type="button" className="brm-icon-btn" style={{ width: '28px', height: '28px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Recent Backup History */}
        <div className="brm-card">
          <h2 className="brm-section-title">
            <span className="material-symbols-outlined">history</span>
            Recent Backup History
          </h2>

          <div className="brm-table-wrapper">
            <table className="brm-table">
              <thead>
                <tr>
                  <th>Backup ID</th>
                  <th>Backup Type</th>
                  <th>Date &amp; Time</th>
                  <th>Size</th>
                  <th>Duration</th>
                  <th>Storage Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockBackupHistory.map((bk) => (
                  <tr key={bk.id}>
                    <td style={{ fontWeight: 700, color: '#2563eb' }}>{bk.id}</td>
                    <td>{bk.type}</td>
                    <td>{bk.date} {bk.time}</td>
                    <td>{bk.size}</td>
                    <td>{bk.duration}</td>
                    <td>{bk.location}</td>
                    <td>
                      <span className="brm-badge-success">{bk.status}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button
                          type="button"
                          className="brm-secondary-btn"
                          style={{ padding: '4px 8px', fontSize: '11px' }}
                          onClick={() => handleOpenBackupDetails(bk)}
                        >
                          Restore
                        </button>
                        <button
                          type="button"
                          className="brm-icon-btn"
                          style={{ width: '28px', height: '28px' }}
                          title="Download Log"
                          onClick={() => handleOpenBackupDetails(bk)}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>download</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Third Row: Backup Storage, Recovery Center, Policies */}
      <div className="brm-grid-3">
        {/* Backup Storage */}
        <div className="brm-card">
          <h2 className="brm-section-title">
            <span className="material-symbols-outlined">cloud_sync</span>
            Backup Storage
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
            <div className="brm-schedule-item">
              <span>☁️ AWS S3 Tier 1</span>
              <span style={{ fontWeight: 700 }}>420 GB</span>
            </div>
            <div className="brm-schedule-item">
              <span>🔷 Azure Blob Storage</span>
              <span style={{ fontWeight: 700 }}>210 GB</span>
            </div>
            <div className="brm-schedule-item">
              <span>🌐 Google Cloud Storage</span>
              <span style={{ fontWeight: 700 }}>82 GB</span>
            </div>
            <div className="brm-schedule-item">
              <span>🖥️ Local Server &amp; NAS</span>
              <span style={{ fontWeight: 700 }}>30 GB</span>
            </div>
          </div>
        </div>

        {/* Recovery Center */}
        <div className="brm-card">
          <h2 className="brm-section-title">
            <span className="material-symbols-outlined">restart_alt</span>
            Recovery Center
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" className="brm-secondary-btn" style={{ justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">flash_on</span>
              Quick Recovery
            </button>
            <button type="button" className="brm-secondary-btn" style={{ justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">history_toggle_off</span>
              Point-in-Time Recovery
            </button>
            <button type="button" className="brm-secondary-btn" style={{ justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">folder_zip</span>
              Restore Entire Repository
            </button>
            <button type="button" className="brm-secondary-btn" style={{ justifyContent: 'flex-start' }}>
              <span className="material-symbols-outlined">shield</span>
              Disaster Recovery Plan
            </button>
          </div>
        </div>

        {/* Policies & Rules */}
        <div className="brm-card">
          <h2 className="brm-section-title">
            <span className="material-symbols-outlined">gavel</span>
            Policies &amp; Compliance
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
            <div className="dms-info-row">
              <span className="dms-info-label">Retention Policy</span>
              <span className="dms-info-value">7 Years Compliance Archival</span>
            </div>
            <div className="dms-info-row">
              <span className="dms-info-label">Version Retention</span>
              <span className="dms-info-value">Keep Last 30 Major Versions</span>
            </div>
            <div className="dms-info-row">
              <span className="dms-info-label">Encryption Policy</span>
              <span className="dms-info-value">AES-256 + KMS Key Rotation</span>
            </div>
            <div className="dms-info-row">
              <span className="dms-info-label">Compression Policy</span>
              <span className="dms-info-value">High Compression ZSTD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Strip */}
      <section className="brm-quick-actions-bar">
        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginRight: '6px' }}>Quick Actions:</span>
        <button type="button" className="brm-qa-btn">
          <span className="material-symbols-outlined">play_arrow</span>
          Run Backup Now
        </button>
        <button type="button" className="brm-qa-btn">
          <span className="material-symbols-outlined">pause</span>
          Pause Backup
        </button>
        <button type="button" className="brm-qa-btn">
          <span className="material-symbols-outlined">restore</span>
          Restore Latest Backup
        </button>
        <button type="button" className="brm-qa-btn">
          <span className="material-symbols-outlined">ios_share</span>
          Export Logs
        </button>
        <button type="button" className="brm-qa-btn">
          <span className="material-symbols-outlined">assessment</span>
          Backup Report
        </button>
      </section>

      {/* Notification Panel / Recent Alerts */}
      <section className="brm-card">
        <h2 className="brm-section-title">
          <span className="material-symbols-outlined">notifications_active</span>
          Recent Alerts &amp; Notifications
        </h2>

        <div className="brm-alerts-list">
          <div className="brm-alert-item info">
            <span className="material-symbols-outlined">check_circle</span>
            <div>
              <strong>Backup Completed:</strong> Full System Backup BK-2026-0803 completed successfully.
              <span style={{ display: 'block', fontSize: '10.5px', opacity: 0.8 }}>2 hours ago</span>
            </div>
          </div>

          <div className="brm-alert-item warning">
            <span className="material-symbols-outlined">warning</span>
            <div>
              <strong>Storage Alert:</strong> AWS S3 Tier 1 reached 72% capacity threshold.
              <span style={{ display: 'block', fontSize: '10.5px', opacity: 0.8 }}>Yesterday at 04:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Drawer (Backup Details) */}
      {isDrawerOpen && selectedBackup && (
        <div className="brm-drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="brm-drawer-container" onClick={(e) => e.stopPropagation()}>
            <div className="brm-drawer-header">
              <h3 className="brm-drawer-title">Backup Details - {selectedBackup.id}</h3>
              <button type="button" className="brm-drawer-close" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="brm-drawer-body">
              <div className="brm-drawer-section">
                <h4 className="ocr-drawer-sec-title">Backup Information</h4>
                <div className="dms-info-row">
                  <span className="dms-info-label">Backup ID</span>
                  <span className="dms-info-value">{selectedBackup.id}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Type</span>
                  <span className="dms-info-value">{selectedBackup.type}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Created At</span>
                  <span className="dms-info-value">{selectedBackup.date} {selectedBackup.time}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Backup Size</span>
                  <span className="dms-info-value">{selectedBackup.size}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Duration</span>
                  <span className="dms-info-value">{selectedBackup.duration}</span>
                </div>
              </div>

              <div className="brm-drawer-section">
                <h4 className="ocr-drawer-sec-title">Storage &amp; Security</h4>
                <div className="dms-info-row">
                  <span className="dms-info-label">Storage Location</span>
                  <span className="dms-info-value">{selectedBackup.location}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Compression Ratio</span>
                  <span className="dms-info-value">{selectedBackup.compression}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Encryption</span>
                  <span className="dms-info-value">{selectedBackup.encryption}</span>
                </div>
              </div>

              <div className="brm-drawer-section">
                <h4 className="ocr-drawer-sec-title">Integrity Checksum</h4>
                <div className="ocr-code-box">
                  {selectedBackup.checksum}
                </div>
              </div>
            </div>

            <div className="ocr-drawer-footer">
              <button type="button" className="brm-primary-btn" style={{ flex: 1, justifyContent: 'center' }}>
                <span className="material-symbols-outlined">settings_backup_restore</span>
                Start Restore
              </button>
              <button type="button" className="brm-secondary-btn" onClick={() => setIsDrawerOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
