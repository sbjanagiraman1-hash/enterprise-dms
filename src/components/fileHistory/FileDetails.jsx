import React from 'react';
import FileStatusBadge from './FileStatusBadge';
import { 
  FiLock, 
  FiUser, 
  FiCalendar, 
  FiShield, 
  FiKey, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle,
  FiFileText
} from 'react-icons/fi';

export default function FileDetails({ file, onRequestUnlock }) {
  if (!file) return null;

  return (
    <div className="dms-file-details-container">
      {/* 2-Column Responsive Cards Grid for Full Available Width */}
      <div className="dms-details-cards-grid">
        {/* CARD 1 — Lock Status */}
        <div className="dms-details-card">
          <div className="dms-details-card-header">
            <div className="flex items-center gap-2">
              <div className="dms-card-icon-bg blue">
                <FiLock className="w-4 h-4" />
              </div>
              <h4 className="dms-details-card-title">Lock Status</h4>
            </div>
            <FileStatusBadge status={file.lockStatus} />
          </div>

          <div className="dms-details-card-body">
            {file.lockStatus === 'Locked' && file.lockedBy ? (
              <div className="dms-lock-info-box">
                <div className="flex items-start gap-2.5">
                  <FiAlertCircle className="dms-lock-alert-icon" />
                  <div className="text-xs flex flex-col gap-0.5">
                    <span className="dms-lock-text-muted">Document currently locked by</span>
                    <strong className="dms-lock-user-name">{file.lockedBy.name}</strong>
                    <span className="dms-lock-time">Locked since {file.lockedBy.since}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestUnlock(file)}
                  className="dms-btn-request-unlock"
                >
                  <FiKey className="w-4 h-4" />
                  <span>Request Unlock Access</span>
                </button>
              </div>
            ) : (
              <div className="dms-lock-unlocked-box">
                <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Document is unlocked and available for editing.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CARD 2 — Document Owner Profile Card */}
        <div className="dms-details-card">
          <div className="dms-details-card-header">
            <div className="flex items-center gap-2">
              <div className="dms-card-icon-bg purple">
                <FiUser className="w-4 h-4" />
              </div>
              <h4 className="dms-details-card-title">Document Owner</h4>
            </div>
            <span className="dms-chip-owner-badge">Owner</span>
          </div>

          <div className="dms-details-card-body">
            <div className="dms-owner-profile-card">
              <div className="dms-owner-avatar font-semibold">
                {file.owner.avatar}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="dms-owner-name">{file.owner.name}</span>
                <span className="dms-owner-email">{file.owner.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 — Document Information Responsive Grid */}
        <div className="dms-details-card col-span-2">
          <div className="dms-details-card-header">
            <div className="flex items-center gap-2">
              <div className="dms-card-icon-bg blue">
                <FiFileText className="w-4 h-4" />
              </div>
              <h4 className="dms-details-card-title">Document Information & Metadata</h4>
            </div>
          </div>

          <div className="dms-details-card-body">
            <div className="dms-meta-info-grid">
              <div className="dms-meta-info-item">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <FiClock className="w-3.5 h-3.5 text-blue-500" />
                  <span>Retention Expiry Date</span>
                </div>
                <span className="dms-meta-info-val text-mono font-semibold">
                  {file.expiryDate || 'N/A (Permanent Retention)'}
                </span>
              </div>

              <div className="dms-meta-info-item">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <FiCalendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Creation Timestamp</span>
                </div>
                <span className="dms-meta-info-val">{file.createdDate}</span>
              </div>

              <div className="dms-meta-info-item">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <FiCalendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Last Modified Date</span>
                </div>
                <span className="dms-meta-info-val">{file.modifiedDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4 — Effective Permissions Chips */}
        <div className="dms-details-card col-span-2">
          <div className="dms-details-card-header">
            <div className="flex items-center gap-2">
              <div className="dms-card-icon-bg emerald">
                <FiShield className="w-4 h-4" />
              </div>
              <h4 className="dms-details-card-title">Your Effective Permissions</h4>
            </div>
          </div>

          <div className="dms-details-card-body">
            <div className="dms-permissions-tags">
              {file.permissions.map((perm) => (
                <span key={perm} className="dms-permission-chip">
                  <FiCheckCircle className="w-3.5 h-3.5" />
                  <span>{perm}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
