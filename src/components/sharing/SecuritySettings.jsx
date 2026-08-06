import React from 'react';
import { 
  FiShield, 
  FiLock, 
  FiFileText, 
  FiEye, 
  FiUserCheck, 
  FiActivity 
} from 'react-icons/fi';

export default function SecuritySettings({
  requireLogin,
  setRequireLogin,
  applyWatermark,
  setApplyWatermark,
  allowDownloads,
  setAllowDownloads,
  enableAuditLogging,
  setEnableAuditLogging,
  viewOnlyMode,
  setViewOnlyMode,
}) {
  return (
    <div className="share-security-section-card">
      <div className="share-section-card-header">
        <FiShield className="w-4 h-4 text-blue-400" />
        <h4 className="share-section-card-title">Enterprise Governance & DLP Controls</h4>
      </div>

      <div className="share-security-toggles-list">
        {/* Require SSO Login */}
        <div className="share-security-toggle-item">
          <div>
            <span className="title flex items-center gap-1.5">
              <FiUserCheck className="w-3.5 h-3.5 text-blue-400" /> Require Enterprise SSO Login
            </span>
            <span className="desc">External users must authenticate via organization Identity Provider</span>
          </div>
          <label className="org-switch">
            <input
              type="checkbox"
              checked={requireLogin}
              onChange={(e) => setRequireLogin(e.target.checked)}
            />
            <span className="org-slider" />
          </label>
        </div>

        {/* Dynamic Watermarking */}
        <div className="share-security-toggle-item">
          <div>
            <span className="title flex items-center gap-1.5">
              <FiFileText className="w-3.5 h-3.5 text-blue-400" /> Dynamic Watermarking (User Email & IP)
            </span>
            <span className="desc">Overlay confidential watermark with recipient details on rendered pages</span>
          </div>
          <label className="org-switch">
            <input
              type="checkbox"
              checked={applyWatermark}
              onChange={(e) => setApplyWatermark(e.target.checked)}
            />
            <span className="org-slider" />
          </label>
        </div>

        {/* View-Only Enforcement */}
        <div className="share-security-toggle-item">
          <div>
            <span className="title flex items-center gap-1.5">
              <FiEye className="w-3.5 h-3.5 text-blue-400" /> Force View-Only Mode (Prevent Print/Save)
            </span>
            <span className="desc">Disable browser printing, text copying, and local file downloads</span>
          </div>
          <label className="org-switch">
            <input
              type="checkbox"
              checked={viewOnlyMode}
              onChange={(e) => setViewOnlyMode(e.target.checked)}
            />
            <span className="org-slider" />
          </label>
        </div>

        {/* Detailed Audit & Access Logging */}
        <div className="share-security-toggle-item">
          <div>
            <span className="title flex items-center gap-1.5">
              <FiActivity className="w-3.5 h-3.5 text-blue-400" /> Access & Telemetry Logging
            </span>
            <span className="desc">Record every link open, view event, and IP address in audit log</span>
          </div>
          <label className="org-switch">
            <input
              type="checkbox"
              checked={enableAuditLogging}
              onChange={(e) => setEnableAuditLogging(e.target.checked)}
            />
            <span className="org-slider" />
          </label>
        </div>
      </div>
    </div>
  );
}
