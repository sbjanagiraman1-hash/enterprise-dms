import React, { useState } from 'react';
import { 
  FiGlobe, 
  FiCopy, 
  FiCheck, 
  FiLock, 
  FiCalendar, 
  FiDownloadCloud, 
  FiEye, 
  FiEyeOff 
} from 'react-icons/fi';

export default function ExternalLinkSettings({
  publicSharingEnabled,
  onTogglePublicSharing,
  shareableLink,
  onCopyLink,
  passwordProtected,
  setPasswordProtected,
  linkPassword,
  setLinkPassword,
  expirationDate,
  setExpirationDate,
  downloadLimit,
  setDownloadLimit,
}) {
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCopy = () => {
    onCopyLink(shareableLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="share-external-link-card">
      {/* 1. Public Link Toggle Header */}
      <div className="share-toggle-header-row">
        <div className="flex items-center gap-2.5">
          <div className="share-toggle-icon-bg">
            <FiGlobe className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h4 className="share-toggle-title">Enable Public Link Sharing</h4>
            <p className="share-toggle-desc">Anyone with this link can access the document based on security rules</p>
          </div>
        </div>

        <label className="org-switch">
          <input
            type="checkbox"
            checked={publicSharingEnabled}
            onChange={(e) => onTogglePublicSharing(e.target.checked)}
          />
          <span className="org-slider" />
        </label>
      </div>

      {/* 2. Shareable Link Box */}
      {publicSharingEnabled && (
        <div className="share-link-input-row">
          <input
            type="text"
            value={shareableLink}
            readOnly
            className="share-link-input text-mono"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="share-btn-copy"
          >
            {copied ? (
              <>
                <FiCheck className="w-4 h-4 text-green-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* 3. Link Security Parameters */}
      {publicSharingEnabled && (
        <div className="share-link-security-grid">
          {/* Password Protection */}
          <div className="share-security-field">
            <div className="flex items-center justify-between mb-1.5">
              <label className="share-field-label">
                <FiLock className="w-3.5 h-3.5 text-blue-400" /> Password Protection
              </label>
              <input
                type="checkbox"
                checked={passwordProtected}
                onChange={(e) => setPasswordProtected(e.target.checked)}
                className="org-checkbox"
              />
            </div>
            
            {passwordProtected && (
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={linkPassword}
                  onChange={(e) => setLinkPassword(e.target.value)}
                  placeholder="Set link access password"
                  className="org-input plain pr-8"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="org-input-action-btn"
                >
                  {showPassword ? <FiEyeOff className="w-3.5 h-3.5" /> : <FiEye className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>

          {/* Expiration Date */}
          <div className="share-security-field">
            <label className="share-field-label">
              <FiCalendar className="w-3.5 h-3.5 text-blue-400" /> Link Expiration Date
            </label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="org-input plain"
            />
          </div>

          {/* Download Limit */}
          <div className="share-security-field">
            <label className="share-field-label">
              <FiDownloadCloud className="w-3.5 h-3.5 text-blue-400" /> Max Downloads Limit
            </label>
            <select
              value={downloadLimit}
              onChange={(e) => setDownloadLimit(e.target.value)}
              className="org-select"
            >
              <option value="UNLIMITED">Unlimited Downloads</option>
              <option value="10">Max 10 Downloads</option>
              <option value="50">Max 50 Downloads</option>
              <option value="100">Max 100 Downloads</option>
              <option value="DISABLE">Disable Downloads (View Only)</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
