import React, { useState } from 'react';
import { 
  FiMail, 
  FiServer, 
  FiLock, 
  FiUser, 
  FiEye, 
  FiEyeOff, 
  FiSend, 
  FiSave,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

export default function SMTPConfiguration({ showNotification }) {
  const [smtpHost, setSmtpHost] = useState('smtp.sendgrid.net');
  const [smtpPort, setSmtpPort] = useState('587');
  const [encryption, setEncryption] = useState('TLS');
  const [username, setUsername] = useState('apikey');
  const [password, setPassword] = useState('SG.eXaMpLeKeY1234567890');
  const [showPassword, setShowPassword] = useState(false);
  const [senderEmail, setSenderEmail] = useState('noreply@acme.corp.internal');
  const [senderName, setSenderName] = useState('Acme System Notifications');
  const [testEmailRecipient, setTestEmailRecipient] = useState('');
  
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testStatus, setTestStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      if (showNotification) {
        showNotification('SMTP configuration saved successfully!');
      }
    }, 600);
  };

  const handleSendTestEmail = () => {
    if (!testEmailRecipient || !testEmailRecipient.includes('@')) {
      setTestStatus({
        type: 'error',
        message: 'Please enter a valid recipient email address for testing.',
      });
      return;
    }

    setIsTesting(true);
    setTestStatus(null);

    setTimeout(() => {
      setIsTesting(false);
      setTestStatus({
        type: 'success',
        message: `Test email dispatched successfully to ${testEmailRecipient}! Check your inbox.`,
      });
    }, 1200);
  };

  return (
    <div className="org-card" id="section-smtp">
      <div className="org-card-header">
        <div>
          <h2 className="org-card-title">SMTP Configuration</h2>
          <p className="org-card-subtitle">
            Configure outgoing mail server details for transaction emails, password resets, and user invites.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="org-card-body space-y-6">
        <div className="org-form-grid">
          {/* SMTP Host */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="smtpHost">
              SMTP Host Server
            </label>
            <div className="org-input-wrapper">
              <FiServer className="org-input-icon" />
              <input
                id="smtpHost"
                type="text"
                value={smtpHost}
                onChange={(e) => setSmtpHost(e.target.value)}
                placeholder="smtp.example.com"
                className="org-input"
                required
              />
            </div>
          </div>

          {/* SMTP Port */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="smtpPort">
              SMTP Port
            </label>
            <input
              id="smtpPort"
              type="text"
              value={smtpPort}
              onChange={(e) => setSmtpPort(e.target.value)}
              placeholder="e.g. 587 or 465"
              className="org-input plain"
              required
            />
          </div>

          {/* Encryption */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="encryption">
              Encryption Protocol
            </label>
            <select
              id="encryption"
              value={encryption}
              onChange={(e) => setEncryption(e.target.value)}
              className="org-select"
            >
              <option value="TLS">STARTTLS / TLS (Port 587 - Recommended)</option>
              <option value="SSL">SSL / TLS Explicit (Port 465)</option>
              <option value="None">None (Unencrypted - Not Recommended)</option>
            </select>
          </div>

          {/* Username */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="username">
              SMTP Username / API Key
            </label>
            <div className="org-input-wrapper">
              <FiUser className="org-input-icon" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username or API key"
                className="org-input"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="password">
              SMTP Password / Secret
            </label>
            <div className="org-input-wrapper">
              <FiLock className="org-input-icon" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••"
                className="org-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="org-input-action-btn"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Sender Email */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="senderEmail">
              Sender Email (From Address)
            </label>
            <div className="org-input-wrapper">
              <FiMail className="org-input-icon" />
              <input
                id="senderEmail"
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="noreply@domain.com"
                className="org-input"
                required
              />
            </div>
          </div>

          {/* Sender Name */}
          <div className="org-field-group org-col-span-2">
            <label className="org-field-label" htmlFor="senderName">
              Sender Display Name
            </label>
            <input
              id="senderName"
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="e.g. Acme Corp System Notifications"
              className="org-input plain"
              required
            />
          </div>
        </div>

        {/* Test Email Section */}
        <div className="org-test-email-box">
          <div className="org-test-email-header">
            <h4 className="org-test-email-title">Test Mail Delivery</h4>
            <p className="org-test-email-desc">Verify your SMTP server parameters by dispatching a test payload.</p>
          </div>

          <div className="org-test-email-row">
            <input
              type="email"
              value={testEmailRecipient}
              onChange={(e) => setTestEmailRecipient(e.target.value)}
              placeholder="Enter recipient email address..."
              className="org-input plain"
            />
            <button
              type="button"
              onClick={handleSendTestEmail}
              disabled={isTesting}
              className="org-btn-secondary"
            >
              {isTesting ? (
                <>
                  <span className="org-spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Send Test Email</span>
                </>
              )}
            </button>
          </div>

          {testStatus && (
            <div className={`org-alert ${testStatus.type === 'success' ? 'success' : 'error'}`}>
              {testStatus.type === 'success' ? (
                <FiCheckCircle className="org-alert-icon" />
              ) : (
                <FiAlertCircle className="org-alert-icon" />
              )}
              <span>{testStatus.message}</span>
            </div>
          )}
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
                <span>Saving SMTP Config...</span>
              </>
            ) : (
              <>
                <FiSave className="w-4 h-4" />
                <span>Save Configuration</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
