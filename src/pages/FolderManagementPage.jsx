import React, { useState } from 'react';
import './FolderManagementPage.css';

/**
 * Mock File List inside Folder
 */
const mockFolderFiles = [
  { id: 'f-1', name: 'Q3_Financial_Statement_2026.pdf', type: 'PDF Document', size: '4.2 MB', modified: 'Aug 03, 2026 10:15 AM', owner: 'Sarah Jenkins', version: 'v2.4', status: 'Active' },
  { id: 'f-2', name: 'Tax_Assessment_Ledger.xlsx', type: 'Excel Sheet', size: '8.1 MB', modified: 'Aug 02, 2026 04:30 PM', owner: 'Alex Rivera', version: 'v1.8', status: 'Active' },
  { id: 'f-3', name: 'Audit_Compliance_Report.docx', type: 'Word Document', size: '1.4 MB', modified: 'Jul 28, 2026 11:20 AM', owner: 'Michael Chen', version: 'v1.0', status: 'Archived' },
  { id: 'f-4', name: 'Receipts_Scan_Batch_8829.zip', type: 'Archive Zip', size: '18.6 MB', modified: 'Jul 15, 2026 02:45 PM', owner: 'Emily Watson', version: 'v1.2', status: 'Active' }
];

export default function FolderManagementPage() {
  const [properties, setProperties] = useState({
    readOnly: false,
    hidden: false,
    archive: false,
    versionEnabled: true
  });

  const toggleProperty = (key) => {
    setProperties((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fmp-page-container">
      {/* Top Header */}
      <header className="fmp-header">
        <div className="fmp-header-left">
          <div className="fmp-header-icon-box">
            <span className="material-symbols-outlined">folder</span>
          </div>
          <div className="fmp-header-text">
            <h1>Folder Management &amp; Properties</h1>
            <p>Manage folders, metadata, permissions, storage and file contents • Path: /Enterprise/Finance/2026</p>
          </div>
        </div>

        <div className="fmp-header-actions">
          <button type="button" className="fmp-secondary-btn">
            <span className="material-symbols-outlined">create_new_folder</span>
            New Subfolder
          </button>
          <button type="button" className="fmp-secondary-btn">
            <span className="material-symbols-outlined">share</span>
            Share Folder
          </button>
          <button type="button" className="fmp-primary-btn">
            <span className="material-symbols-outlined">cloud_upload</span>
            Upload Files
          </button>
        </div>
      </header>

      {/* 12-Column Grid Layout */}
      <div className="fmp-grid">
        {/* ROW 1: Information Card (6 col) | Statistics Card (6 col) */}
        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">folder</span>
            Folder Information
          </h2>

          <div className="fmp-info-grid">
            <div className="fmp-info-row">
              <span className="fmp-info-label">Folder Name</span>
              <span className="fmp-info-value">Financial_Reports_2026</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Folder Path</span>
              <span className="fmp-info-value">/Enterprise/Finance/2026</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Parent Folder</span>
              <span className="fmp-info-value">Finance</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Folder Type</span>
              <span className="fmp-info-value">Secured Directory</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Folder Size</span>
              <span className="fmp-info-value">1.24 GB</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Number of Files</span>
              <span className="fmp-info-value">1,420 Files</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Created Date</span>
              <span className="fmp-info-value">Jan 15, 2026</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Modified Date</span>
              <span className="fmp-info-value">Aug 02, 2026</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Owner</span>
              <span className="fmp-info-value">Sarah Jenkins</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Status</span>
              <div className="fmp-status-badge">
                <span className="fmp-status-dot"></span>
                Active Directory
              </div>
            </div>
          </div>
        </div>

        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">analytics</span>
            Folder Statistics &amp; Usage
          </h2>

          <div className="fmp-stats-mini-grid">
            <div className="fmp-stat-mini-card">
              <div className="fmp-stat-icon">
                <span className="material-symbols-outlined">grid_view</span>
              </div>
              <div>
                <span className="fmp-info-label">Total Files</span>
                <span style={{ fontSize: '16px', fontWeight: 700, display: 'block', color: '#0f172a' }}>1,420</span>
              </div>
            </div>

            <div className="fmp-stat-mini-card">
              <div className="fmp-stat-icon">
                <span className="material-symbols-outlined">hard_drive</span>
              </div>
              <div>
                <span className="fmp-info-label">Total Size</span>
                <span style={{ fontSize: '16px', fontWeight: 700, display: 'block', color: '#0f172a' }}>1.24 GB</span>
              </div>
            </div>

            <div className="fmp-stat-mini-card">
              <div className="fmp-stat-icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <span className="fmp-info-label">Last Modified</span>
                <span style={{ fontSize: '13px', fontWeight: 700, display: 'block', color: '#0f172a' }}>2h ago</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: 600 }}>
              <span>Storage Allocation Used</span>
              <span style={{ color: '#2563eb' }}>1.24 GB / 2.00 GB (62%)</span>
            </div>
            <div className="brm-progress-bar-bg">
              <div className="brm-progress-bar-fill" style={{ width: '62%' }}></div>
            </div>
            <span style={{ fontSize: '11px', color: '#64748b' }}>
              Most Active Contributor: Alex Rivera • Average 14.2K daily operations
            </span>
          </div>
        </div>

        {/* ROW 2: Properties (6 col) | Permissions (6 col) */}
        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">description</span>
            Folder Properties &amp; Switches
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="fmp-property-row">
              <span className="fmp-property-label">Read Only</span>
              <label className="dms-switch">
                <input
                  type="checkbox"
                  checked={properties.readOnly}
                  onChange={() => toggleProperty('readOnly')}
                />
                <span className="dms-slider"></span>
              </label>
            </div>

            <div className="fmp-property-row">
              <span className="fmp-property-label">Hidden Folder</span>
              <label className="dms-switch">
                <input
                  type="checkbox"
                  checked={properties.hidden}
                  onChange={() => toggleProperty('hidden')}
                />
                <span className="dms-slider"></span>
              </label>
            </div>

            <div className="fmp-property-row">
              <span className="fmp-property-label">Archive Status</span>
              <label className="dms-switch">
                <input
                  type="checkbox"
                  checked={properties.archive}
                  onChange={() => toggleProperty('archive')}
                />
                <span className="dms-slider"></span>
              </label>
            </div>

            <div className="fmp-property-row">
              <span className="fmp-property-label">Version Enabled</span>
              <label className="dms-switch">
                <input
                  type="checkbox"
                  checked={properties.versionEnabled}
                  onChange={() => toggleProperty('versionEnabled')}
                />
                <span className="dms-slider"></span>
              </label>
            </div>
          </div>

          <div className="fmp-info-grid" style={{ marginTop: '8px' }}>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Retention Policy</span>
              <span className="fmp-info-value">7 Years (Compliance)</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Classification</span>
              <span className="fmp-info-value">Confidential</span>
            </div>
          </div>

          <div style={{ marginTop: '6px' }}>
            <span className="fmp-info-label" style={{ display: 'block', marginBottom: '6px' }}>Labels &amp; Tags</span>
            <div className="fmp-labels-container">
              <span className="fmp-label-chip">Finance</span>
              <span className="fmp-label-chip">Audit-Ready</span>
              <span className="fmp-label-chip">Q3-2026</span>
              <span className="fmp-label-chip">Tax</span>
            </div>
          </div>
        </div>

        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            Permissions &amp; Access Control
          </h2>

          <div className="fmp-info-grid">
            <div className="fmp-info-row">
              <span className="fmp-info-label">Owner</span>
              <span className="fmp-info-value">Sarah Jenkins (Admin)</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Editors Group</span>
              <span className="fmp-info-value">Finance Team (3 members)</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Viewers</span>
              <span className="fmp-info-value">Auditors, Executive Group</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Security Groups</span>
              <span className="fmp-info-value">FIN-DEPT-GRP, EXEC-BOARD</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Inheritance</span>
              <span className="fmp-info-value">Enabled (Inherited from /Enterprise)</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Permission Summary</span>
              <span className="fmp-info-value">Read, Write, Delete, Share</span>
            </div>
          </div>
        </div>

        {/* ROW 3: Files Table (12 col - Full Width) */}
        <div className="fmp-card fmp-col-12">
          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
            <h2 className="fmp-card-title">
              <span className="material-symbols-outlined">folder_open</span>
              Folder Contents &amp; Files List
            </h2>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Showing 4 of 1,420 items</span>
          </div>

          <div className="fmp-table-wrapper">
            <table className="fmp-table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Document Type</th>
                  <th>Size</th>
                  <th>Last Modified</th>
                  <th>Owner</th>
                  <th>Version</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockFolderFiles.map((file) => (
                  <tr key={file.id}>
                    <td style={{ fontWeight: 700, color: '#2563eb' }}>{file.name}</td>
                    <td>{file.type}</td>
                    <td>{file.size}</td>
                    <td>{file.modified}</td>
                    <td>{file.owner}</td>
                    <td>{file.version}</td>
                    <td>
                      <span className="fmp-status-badge">{file.status}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button type="button" className="fmp-secondary-btn" style={{ padding: '4px 8px', fontSize: '11px' }}>
                          Download
                        </button>
                        <button type="button" className="fmp-secondary-btn" style={{ padding: '4px 8px', fontSize: '11px' }}>
                          Preview
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROW 4: Activity Timeline (6 col) | Metadata (6 col) */}
        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">history</span>
            Recent Activity Timeline
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px' }}>
            <div style={{ padding: '8px 10px', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #2563eb' }}>
              <strong>Sarah Jenkins</strong> updated Retention Policy to 7 Years Compliance.
              <span style={{ display: 'block', fontSize: '10.5px', color: '#64748b' }}>Aug 02, 2026 at 02:14 PM</span>
            </div>

            <div style={{ padding: '8px 10px', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #16a34a' }}>
              <strong>Alex Rivera</strong> uploaded Tax_Assessment_Ledger.xlsx (8.1 MB).
              <span style={{ display: 'block', fontSize: '10.5px', color: '#64748b' }}>Aug 02, 2026 at 04:30 PM</span>
            </div>

            <div style={{ padding: '8px 10px', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid #8b5cf6' }}>
              <strong>Automated OCR Engine</strong> scanned 12 new receipts with 99.4% confidence score.
              <span style={{ display: 'block', fontSize: '10.5px', color: '#64748b' }}>Jul 30, 2026 at 09:00 AM</span>
            </div>
          </div>
        </div>

        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">fingerprint</span>
            System Metadata &amp; Compliance Schema
          </h2>

          <div className="fmp-info-grid">
            <div className="fmp-info-row">
              <span className="fmp-info-label">Compliance Schema ID</span>
              <span className="fmp-info-value">CMP-8829-FINANCE</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Index Status</span>
              <span className="fmp-info-value">Indexed &amp; Scanned</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Encryption Standard</span>
              <span className="fmp-info-value">AES-256 (KMS Key Rotated)</span>
            </div>
            <div className="fmp-info-row">
              <span className="fmp-info-label">Auto-Archival Tier</span>
              <span className="fmp-info-value">AWS S3 Glacier Flexible</span>
            </div>
          </div>
        </div>

        {/* ROW 5: Quick Actions (6 col) | Storage Quota (6 col) */}
        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">bolt</span>
            Quick Actions
          </h2>

          <div className="fmp-actions-grid">
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">edit</span>
              Rename
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">drive_file_move</span>
              Move
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">content_copy</span>
              Copy
            </button>
            <button type="button" className="fmp-action-btn danger">
              <span className="material-symbols-outlined">delete</span>
              Delete
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">share</span>
              Share
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">download</span>
              Download
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">ios_share</span>
              Export
            </button>
            <button type="button" className="fmp-action-btn">
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
          </div>
        </div>

        <div className="fmp-card fmp-col-6">
          <h2 className="fmp-card-title">
            <span className="material-symbols-outlined">pie_chart</span>
            Storage Quota &amp; Recent Changes
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <span>Used Space: 1.24 GB</span>
              <span style={{ color: '#64748b' }}>Quota: 2.00 GB</span>
            </div>
            <div className="brm-progress-bar-bg" style={{ height: '8px' }}>
              <div className="brm-progress-bar-fill" style={{ width: '62%' }}></div>
            </div>
            <div style={{ fontSize: '11.5px', color: '#475569', display: 'flex', justifyContent: 'space-between' }}>
              <span>Available Capacity: 760 MB (38%)</span>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>Auto-Expand Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
