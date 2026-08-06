import React, { useState } from 'react';
import { 
  FiShield, 
  FiKey, 
  FiClock, 
  FiGlobe, 
  FiFileText, 
  FiLock, 
  FiSave,
  FiCheck
} from 'react-icons/fi';

export default function SecurityCompliance({ showNotification }) {
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [minPasswordLength, setMinPasswordLength] = useState('12');
  const [requireUppercase, setRequireUppercase] = useState(true);
  const [requireNumbers, setRequireNumbers] = useState(true);
  const [requireSymbols, setRequireSymbols] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [ipWhitelist, setIpWhitelist] = useState('192.168.1.0/24\n10.0.0.0/16\n203.0.113.45');
  const [auditLogsEnabled, setAuditLogsEnabled] = useState(true);
  const [dataEncryption, setDataEncryption] = useState(true);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      if (showNotification) {
        showNotification('Security & Compliance settings saved successfully!');
      }
    }, 600);
  };

  return (
    <div className="org-card" id="section-security">
      <div className="org-card-header">
        <div>
          <h2 className="org-card-title">Security & Compliance</h2>
          <p className="org-card-subtitle">
            Enforce multi-factor authentication, enterprise password rules, session timeouts, and IP whitelists.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="org-card-body space-y-8">
        
        {/* Toggle Switches Row 1: MFA & Audit Logging */}
        <div className="org-security-toggle-grid">
          {/* MFA Toggle */}
          <div className="org-toggle-card">
            <div className="org-toggle-card-info">
              <div className="org-toggle-card-header">
                <FiShield className="org-toggle-icon" />
                <h4 className="org-toggle-title">Enforce Multi-Factor Authentication (MFA)</h4>
              </div>
              <p className="org-toggle-desc">
                Require all organization users and admins to authenticate via TOTP or Hardware Security Keys.
              </p>
            </div>
            
            <label className="org-switch">
              <input
                type="checkbox"
                checked={mfaEnabled}
                onChange={(e) => setMfaEnabled(e.target.checked)}
              />
              <span className="org-slider" />
            </label>
          </div>

          {/* Audit Logging Toggle */}
          <div className="org-toggle-card">
            <div className="org-toggle-card-info">
              <div className="org-toggle-card-header">
                <FiFileText className="org-toggle-icon" />
                <h4 className="org-toggle-title">Enterprise Audit Logs</h4>
              </div>
              <p className="org-toggle-desc">
                Log every administrative operation, security policy change, and user login attempt for 365 days.
              </p>
            </div>
            
            <label className="org-switch">
              <input
                type="checkbox"
                checked={auditLogsEnabled}
                onChange={(e) => setAuditLogsEnabled(e.target.checked)}
              />
              <span className="org-slider" />
            </label>
          </div>

          {/* Data Encryption at Rest */}
          <div className="org-toggle-card">
            <div className="org-toggle-card-info">
              <div className="org-toggle-card-header">
                <FiLock className="org-toggle-icon" />
                <h4 className="org-toggle-title">AES-256 Data Encryption at Rest</h4>
              </div>
              <p className="org-toggle-desc">
                Encrypt all stored database records and uploaded media objects with customer-managed keys.
              </p>
            </div>
            
            <label className="org-switch">
              <input
                type="checkbox"
                checked={dataEncryption}
                onChange={(e) => setDataEncryption(e.target.checked)}
              />
              <span className="org-slider" />
            </label>
          </div>
        </div>

        {/* Password Policy Section */}
        <div className="org-security-block">
          <div className="org-block-header">
            <FiKey className="org-block-icon" />
            <h3 className="org-block-title">Organization Password Policy</h3>
          </div>

          <div className="org-policy-content">
            <div className="org-field-group max-w-xs">
              <label className="org-field-label" htmlFor="minPasswordLength">
                Minimum Password Length
              </label>
              <select
                id="minPasswordLength"
                value={minPasswordLength}
                onChange={(e) => setMinPasswordLength(e.target.value)}
                className="org-select"
              >
                <option value="8">8 Characters (Standard)</option>
                <option value="10">10 Characters</option>
                <option value="12">12 Characters (Recommended)</option>
                <option value="16">16 Characters (High Security)</option>
              </select>
            </div>

            <div className="org-checkboxes-grid">
              <label className="org-checkbox-label">
                <input
                  type="checkbox"
                  checked={requireUppercase}
                  onChange={(e) => setRequireUppercase(e.target.checked)}
                  className="org-checkbox"
                />
                <span>Require at least one uppercase letter (A-Z)</span>
              </label>

              <label className="org-checkbox-label">
                <input
                  type="checkbox"
                  checked={requireNumbers}
                  onChange={(e) => setRequireNumbers(e.target.checked)}
                  className="org-checkbox"
                />
                <span>Require at least one numeric digit (0-9)</span>
              </label>

              <label className="org-checkbox-label">
                <input
                  type="checkbox"
                  checked={requireSymbols}
                  onChange={(e) => setRequireSymbols(e.target.checked)}
                  className="org-checkbox"
                />
                <span>Require at least one special character (!@#$%^&*)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Session Timeout & IP Whitelist */}
        <div className="org-form-grid">
          {/* Session Timeout */}
          <div className="org-field-group">
            <div className="flex items-center gap-2 mb-1.5">
              <FiClock className="text-blue-500 w-4 h-4" />
              <label className="org-field-label !mb-0" htmlFor="sessionTimeout">
                Inactivity Session Timeout
              </label>
            </div>
            <select
              id="sessionTimeout"
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
              className="org-select"
            >
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes (Default)</option>
              <option value="60">1 Hour</option>
              <option value="240">4 Hours</option>
              <option value="480">8 Hours</option>
            </select>
            <p className="org-field-hint">Automatically log off inactive user sessions.</p>
          </div>

          {/* IP Whitelist */}
          <div className="org-field-group org-col-span-2">
            <div className="flex items-center gap-2 mb-1.5">
              <FiGlobe className="text-blue-500 w-4 h-4" />
              <label className="org-field-label !mb-0" htmlFor="ipWhitelist">
                IP Address Whitelist (CIDR notation)
              </label>
            </div>
            <textarea
              id="ipWhitelist"
              value={ipWhitelist}
              onChange={(e) => setIpWhitelist(e.target.value)}
              rows={3}
              placeholder="Enter allowed IPv4 or IPv6 addresses (one per line)"
              className="org-textarea text-mono"
            />
            <p className="org-field-hint">Restrict dashboard access exclusively to these subnet ranges. Leave empty to allow all.</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="org-card-footer">
          <button
            type="submit"
            disabled={isSaving}
            className="org-btn-primary"
          >
            {isSaving ? (
              <>
                <span className="org-spinner" />
                <span>Saving Security Policy...</span>
              </>
            ) : (
              <>
                <FiSave className="w-4 h-4" />
                <span>Save Security Rules</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
