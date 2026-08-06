import React, { useState } from 'react';
import './SecurityPolicies2FA.css';

/**
 * Mock Active Sessions Data
 */
const mockActiveSessions = [
  { id: 'sess-1', device: 'MacBook Pro 16"', browser: 'Chrome 127.0', os: 'macOS Sonoma', ip: '192.168.1.104', location: 'New York, US', loginTime: 'Today, 09:15 AM', status: 'Active (Current)' },
  { id: 'sess-2', device: 'Windows Workstation', browser: 'Edge 126.0', os: 'Windows 11 Enterprise', ip: '10.0.4.12', location: 'Chicago, US', loginTime: 'Today, 08:30 AM', status: 'Active' },
  { id: 'sess-3', device: 'iPhone 15 Pro', browser: 'Safari Mobile', os: 'iOS 17.5', ip: '172.56.21.90', location: 'New York, US', loginTime: 'Yesterday, 06:45 PM', status: 'Idle (15m)' },
  { id: 'sess-4', device: 'iPad Air 5', browser: 'Safari Tablet', os: 'iPadOS 17.5', ip: '172.56.21.94', location: 'New York, US', loginTime: 'Aug 02, 2026', status: 'Idle (2h)' }
];

/**
 * Mock Audit Logs Data
 */
const mockAuditLogs = [
  { id: 'log-1', date: 'Aug 03, 2026 10:14 AM', user: 'Sarah Jenkins (Admin)', activity: 'Enabled 2FA Enforcement for Finance Group', device: 'MacBook Pro', ip: '192.168.1.104', status: 'Success', risk: 'Low' },
  { id: 'log-2', date: 'Aug 03, 2026 09:50 AM', user: 'Alex Rivera', activity: 'Failed OTP Code verification (3 attempts)', device: 'Windows Workstation', ip: '10.0.4.12', status: 'Blocked', risk: 'Medium' },
  { id: 'log-3', date: 'Aug 02, 2026 11:30 PM', user: 'System Sentinel', activity: 'Automated IP Blacklist update (Block 185.220.x.x)', device: 'Server Sentinel', ip: '185.220.101.5', status: 'Blocked', risk: 'High' },
  { id: 'log-4', date: 'Aug 02, 2026 04:15 PM', user: 'Michael Chen', activity: 'Password Changed & Session Tokens Revoked', device: 'Linux Node', ip: '10.0.8.44', status: 'Success', risk: 'Low' }
];

export default function SecurityPolicies2FA() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [otpDigits, setOtpDigits] = useState(['5', '8', '2', '9', '1', '4']);
  const [activeSessions, setActiveSessions] = useState(mockActiveSessions);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);
  };

  const handleTerminateSession = (id) => {
    setActiveSessions((prev) => prev.filter((s) => s.id !== id));
  };

  const handleTerminateAllSessions = () => {
    setActiveSessions((prev) => prev.filter((s) => s.status.includes('Current')));
  };

  return (
    <div className="sec-page-container w-full max-w-full min-w-0 overflow-hidden">
      {/* Page Header */}
      <header className="sec-header w-full min-w-0">
        <h1 className="sec-title text-xl sm:text-2xl font-bold text-slate-900 break-words">Security Policies &amp; 2FA Authentication</h1>
        <p className="sec-subtitle text-xs sm:text-sm text-slate-500 break-words">Manage enterprise security policies, authentication methods, sessions and compliance.</p>
      </header>

      {/* Top Action Bar */}
      <section className="sec-action-bar flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 w-full min-w-0">
        <div className="sec-search-box w-full sm:w-80 min-w-0">
          <span className="material-symbols-outlined shrink-0" style={{ color: '#64748b' }}>search</span>
          <input
            type="text"
            className="sec-search-input w-full min-w-0"
            placeholder="Search security settings, IP rules or logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sec-btn-group flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <button type="button" className="sec-secondary-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">shield</span>
            Security Audit
          </button>
          <button type="button" className="sec-secondary-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">download</span>
            Export Report
          </button>
          <button type="button" className="sec-secondary-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">policy</span>
            Policy Manager
          </button>
          <button type="button" className="sec-danger-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">lock_reset</span>
            Emergency Lockdown
          </button>
        </div>
      </section>

      {/* 6 KPI Cards Grid */}
      <section className="sec-kpi-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 w-full min-w-0">
        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">Security Score</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
          </div>
          <span className="sec-kpi-value">94 / 100</span>
          <span className="sec-badge-green">Optimal</span>
        </div>

        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">Active Sessions</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">devices</span>
            </div>
          </div>
          <span className="sec-kpi-value">142</span>
          <span className="sec-badge-green">Monitored</span>
        </div>

        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">Blocked Logins</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">block</span>
            </div>
          </div>
          <span className="sec-kpi-value">18</span>
          <span className="sec-badge-green">Protected</span>
        </div>

        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">2FA Enabled</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">phonelink_lock</span>
            </div>
          </div>
          <span className="sec-kpi-value">98.4%</span>
          <span className="sec-badge-green">Enforced</span>
        </div>

        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">Password Policy</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">password</span>
            </div>
          </div>
          <span className="sec-kpi-value">Compliant</span>
          <span className="sec-badge-green">Strict</span>
        </div>

        <div className="sec-kpi-card w-full min-w-0">
          <div className="sec-kpi-top">
            <span className="sec-kpi-title">Compliance</span>
            <div className="sec-kpi-icon">
              <span className="material-symbols-outlined">gavel</span>
            </div>
          </div>
          <span className="sec-kpi-value">100%</span>
          <span className="sec-badge-green">Audit Ready</span>
        </div>
      </section>

      {/* Main Responsive Grid Layout */}
      <div className="sec-main-grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full min-w-0">
        {/* Left Column (Spans 2 cols on Desktop, 1 on Mobile) */}
        <div className="sec-column-left lg:col-span-2 flex flex-col gap-5 w-full min-w-0">
          {/* Two-Factor Authentication Module */}
          <div className="sec-card-box w-full min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full min-w-0">
              <h2 className="sec-card-title text-sm sm:text-base font-bold text-slate-900 break-words">
                <span className="material-symbols-outlined text-blue-600">security</span>
                Two-Factor Authentication (2FA / MFA)
              </h2>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-xs font-semibold ${is2FAEnabled ? 'text-blue-600' : 'text-slate-500'}`}>
                  {is2FAEnabled ? '2FA Enforced' : '2FA Disabled'}
                </span>
                <label className="dms-switch">
                  <input
                    type="checkbox"
                    checked={is2FAEnabled}
                    onChange={() => setIs2FAEnabled(!is2FAEnabled)}
                  />
                  <span className="dms-slider"></span>
                </label>
              </div>
            </div>

            <div className="sec-2fa-methods grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full min-w-0">
              <div className="sec-2fa-method-card w-full min-w-0">
                <div className="sec-2fa-method-left flex items-center gap-2.5 min-w-0">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">smartphone</span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 block truncate">Authenticator App</span>
                    <span className="text-[11px] text-slate-500 block truncate">Google, Authy or Microsoft</span>
                  </div>
                </div>
                <span className="sec-badge-green shrink-0">Active</span>
              </div>

              <div className="sec-2fa-method-card w-full min-w-0">
                <div className="sec-2fa-method-left flex items-center gap-2.5 min-w-0">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">sms</span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 block truncate">SMS OTP Code</span>
                    <span className="text-[11px] text-slate-500 block truncate">Primary (+1 *** *** 8920)</span>
                  </div>
                </div>
                <span className="sec-badge-green shrink-0">Backup</span>
              </div>
            </div>

            {/* QR Code & OTP Input Generator */}
            <div className="sec-qr-box flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 w-full min-w-0">
              <div className="sec-qr-placeholder w-24 h-24 min-w-[96px] bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center text-blue-600 shrink-0 mx-auto sm:mx-0">
                <span className="material-symbols-outlined text-5xl">qr_code_2</span>
              </div>
              <div className="flex flex-col gap-2 flex-1 w-full min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block break-words">Scan QR Code with Authenticator App</span>
                <span className="text-xs text-slate-600 block break-words">
                  Enter the 6-digit verification code generated by your app:
                </span>
                
                {/* 6 OTP Input Boxes */}
                <div className="sec-otp-wrapper flex flex-wrap items-center justify-center sm:justify-start gap-2 my-1 w-full min-w-0">
                  {otpDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      className="sec-otp-input w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-bold border border-slate-300 rounded-lg bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shrink-0"
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                    />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-1 w-full">
                  <button type="button" className="sec-primary-btn w-full sm:w-auto justify-center text-xs py-2 px-3">
                    Verify &amp; Enable
                  </button>
                  <button type="button" className="sec-secondary-btn w-full sm:w-auto justify-center text-xs py-2 px-3">
                    Regenerate Recovery Codes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security Policies */}
          <div className="sec-card-box w-full min-w-0">
            <h2 className="sec-card-title text-sm sm:text-base font-bold text-slate-900 break-words">
              <span className="material-symbols-outlined text-blue-600">policy</span>
              Enterprise Security &amp; Password Policies
            </h2>

            <div className="sec-policy-grid grid grid-cols-1 sm:grid-cols-2 gap-3 w-full min-w-0">
              <div className="sec-policy-item flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 w-full min-w-0">
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-semibold text-slate-800 block truncate">Minimum Length</span>
                  <span className="text-[11px] text-slate-500 block truncate">At least 12 characters</span>
                </div>
                <span className="text-xs font-bold text-blue-600 shrink-0">12 Chars</span>
              </div>

              <div className="sec-policy-item flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 w-full min-w-0">
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-semibold text-slate-800 block truncate">Uppercase &amp; Symbols</span>
                  <span className="text-[11px] text-slate-500 block truncate">Require A-Z, 0-9, #$%</span>
                </div>
                <span className="sec-badge-green shrink-0">Enforced</span>
              </div>

              <div className="sec-policy-item flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 w-full min-w-0">
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-semibold text-slate-800 block truncate">Password Expiry</span>
                  <span className="text-[11px] text-slate-500 block truncate">Force change every 90 days</span>
                </div>
                <span className="text-xs font-bold text-blue-600 shrink-0">90 Days</span>
              </div>

              <div className="sec-policy-item flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200 w-full min-w-0">
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-semibold text-slate-800 block truncate">Account Lockout</span>
                  <span className="text-[11px] text-slate-500 block truncate">Lock after 5 failed attempts</span>
                </div>
                <span className="text-xs font-bold text-red-600 shrink-0">5 Attempts</span>
              </div>
            </div>
          </div>

          {/* Active Sessions Module (Table on Desktop, Responsive Cards on Mobile) */}
          <div className="sec-card-box w-full min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full min-w-0">
              <h2 className="sec-card-title text-sm sm:text-base font-bold text-slate-900 break-words">
                <span className="material-symbols-outlined text-blue-600">devices</span>
                Active User Sessions
              </h2>
              <button
                type="button"
                className="sec-danger-btn w-full sm:w-auto justify-center text-xs py-1.5 px-3"
                onClick={handleTerminateAllSessions}
              >
                Terminate All Other Sessions
              </button>
            </div>

            {/* Desktop Table View (hidden on mobile) */}
            <div className="sec-table-wrapper hidden md:block w-full min-w-0 overflow-x-auto">
              <table className="sec-table w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <th className="p-2.5">Device</th>
                    <th className="p-2.5">Browser</th>
                    <th className="p-2.5">OS</th>
                    <th className="p-2.5">IP Address</th>
                    <th className="p-2.5">Location</th>
                    <th className="p-2.5">Login Time</th>
                    <th className="p-2.5">Status</th>
                    <th className="p-2.5">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeSessions.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-2.5 font-bold text-slate-900">{s.device}</td>
                      <td className="p-2.5">{s.browser}</td>
                      <td className="p-2.5">{s.os}</td>
                      <td className="p-2.5">{s.ip}</td>
                      <td className="p-2.5">{s.location}</td>
                      <td className="p-2.5">{s.loginTime}</td>
                      <td className="p-2.5">
                        <span className="sec-badge-green">{s.status}</span>
                      </td>
                      <td className="p-2.5">
                        {!s.status.includes('Current') && (
                          <button
                            type="button"
                            className="sec-secondary-btn py-1 px-2 text-[11px] text-red-600 hover:bg-red-50 hover:border-red-200"
                            onClick={() => handleTerminateSession(s.id)}
                          >
                            Revoke
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards Stack View (visible on mobile only) */}
            <div className="block md:hidden space-y-3 w-full min-w-0">
              {activeSessions.map((s) => (
                <div key={s.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-2 w-full min-w-0">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="text-xs font-bold text-slate-900 truncate">{s.device}</span>
                    <span className="sec-badge-green shrink-0">{s.status}</span>
                  </div>
                  <div className="text-[11.5px] text-slate-600 space-y-1">
                    <div className="flex justify-between"><span className="text-slate-400">Browser / OS:</span> <span className="font-medium text-slate-800">{s.browser} ({s.os})</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">IP &amp; Location:</span> <span className="font-medium text-slate-800">{s.ip} • {s.location}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Login Time:</span> <span className="font-medium text-slate-800">{s.loginTime}</span></div>
                  </div>
                  {!s.status.includes('Current') && (
                    <button
                      type="button"
                      className="sec-danger-btn w-full justify-center text-xs py-2 mt-1"
                      onClick={() => handleTerminateSession(s.id)}
                    >
                      Revoke Session
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Audit Logs Table */}
          <div className="sec-card-box w-full min-w-0">
            <h2 className="sec-card-title text-sm sm:text-base font-bold text-slate-900 break-words">
              <span className="material-symbols-outlined text-blue-600">receipt_long</span>
              Security Audit Logs
            </h2>

            <div className="sec-table-wrapper w-full min-w-0 overflow-x-auto">
              <table className="sec-table w-full min-w-[600px] text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                    <th className="p-2.5">Date &amp; Time</th>
                    <th className="p-2.5">User</th>
                    <th className="p-2.5">Activity Event</th>
                    <th className="p-2.5">Device</th>
                    <th className="p-2.5">IP Address</th>
                    <th className="p-2.5">Status</th>
                    <th className="p-2.5">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockAuditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-2.5 whitespace-nowrap">{log.date}</td>
                      <td className="p-2.5 font-semibold text-slate-900 whitespace-nowrap">{log.user}</td>
                      <td className="p-2.5">{log.activity}</td>
                      <td className="p-2.5 whitespace-nowrap">{log.device}</td>
                      <td className="p-2.5 whitespace-nowrap">{log.ip}</td>
                      <td className="p-2.5 whitespace-nowrap">
                        <span className="sec-badge-green">{log.status}</span>
                      </td>
                      <td className="p-2.5 whitespace-nowrap font-bold">
                        <span className={log.risk === 'High' ? 'text-red-600' : log.risk === 'Medium' ? 'text-amber-600' : 'text-emerald-600'}>
                          {log.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="sec-column-right flex flex-col gap-5 w-full min-w-0">
          {/* Security Health Ring Card */}
          <div className="sec-card-box flex flex-col items-center text-center w-full min-w-0">
            <h3 className="sec-card-title text-sm sm:text-base font-bold text-slate-900">Overall Security Health</h3>

            <div className="relative w-28 h-28 flex items-center justify-center my-2">
              <svg width="110" height="110" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3.2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3.2"
                  strokeDasharray="94, 100"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-extrabold text-blue-600 leading-none">94%</span>
                <span className="text-[10px] text-slate-500">Score</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-600 w-full text-left">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Last Security Scan</span>
                <span className="font-semibold text-slate-800">Today at 06:00 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Last Policy Update</span>
                <span className="font-semibold text-slate-800">Aug 01, 2026</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Next Scheduled Scan</span>
                <span className="font-semibold text-slate-800">Tomorrow, 06:00 AM</span>
              </div>
            </div>
          </div>

          {/* Security Alerts */}
          <div className="sec-card-box w-full min-w-0">
            <h3 className="sec-card-title text-sm sm:text-base font-bold text-slate-900">Recent Security Alerts</h3>

            <div className="flex flex-col gap-2.5 w-full">
              <div className="sec-alert-card warning p-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-xs flex items-start gap-2.5">
                <span className="material-symbols-outlined shrink-0 text-amber-600">warning</span>
                <div className="break-words min-w-0">
                  <strong>Suspicious IP Activity:</strong> Blocked 5 login attempts from unknown proxy IP 185.220.x.x.
                </div>
              </div>

              <div className="sec-alert-card danger p-3 rounded-lg border border-red-200 bg-red-50 text-red-900 text-xs flex items-start gap-2.5">
                <span className="material-symbols-outlined shrink-0 text-red-600">error</span>
                <div className="break-words min-w-0">
                  <strong>Policy Warning:</strong> 3 user accounts have passwords expiring in 48 hours.
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Certifications */}
          <div className="sec-card-box w-full min-w-0">
            <h3 className="sec-card-title text-sm sm:text-base font-bold text-slate-900">Compliance Certifications</h3>

            <div className="flex flex-col gap-2 text-xs w-full">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                <span>🛡️ ISO 27001</span>
                <span className="sec-badge-green">Certified</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                <span>🔒 GDPR Compliant</span>
                <span className="sec-badge-green">Verified</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                <span>🏥 HIPAA Ready</span>
                <span className="sec-badge-green">Compliant</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
                <span>📋 SOC 2 Type II</span>
                <span className="sec-badge-green">Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <section className="sec-quick-actions-bar flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-4 rounded-xl bg-white border border-slate-200 w-full min-w-0">
        <span className="text-xs font-bold text-slate-900 shrink-0">Quick Actions:</span>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full flex-1 flex-wrap">
          <button type="button" className="sec-qa-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">play_arrow</span>
            Run Security Scan
          </button>
          <button type="button" className="sec-qa-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">phonelink_lock</span>
            Enable MFA
          </button>
          <button type="button" className="sec-qa-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">lock_reset</span>
            Reset Password Policies
          </button>
          <button type="button" className="sec-qa-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">power_settings_new</span>
            Lock All Sessions
          </button>
          <button type="button" className="sec-qa-btn w-full sm:w-auto justify-center">
            <span className="material-symbols-outlined">download</span>
            Download Audit Report
          </button>
        </div>
      </section>
    </div>
  );
}
