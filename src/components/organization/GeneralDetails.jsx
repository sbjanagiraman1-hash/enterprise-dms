import React, { useState } from 'react';
import UploadLogo from './UploadLogo';
import { FiGlobe, FiSave, FiCheck } from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function GeneralDetails({ showNotification }) {
  const [orgName, setOrgName] = useState('Acme Global Enterprise Inc.');
  const [primaryDomain, setPrimaryDomain] = useState('acme.corp.internal');
  const [supportEmail, setSupportEmail] = useState('admin@acme.corp.internal');
  const [timeZone, setTimeZone] = useState('UTC-05:00 (Eastern Time)');
  const [logoUrl, setLogoUrl] = useState('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80');
  const [logoFile, setLogoFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      if (showNotification) {
        showNotification('General details updated successfully!');
      }
    }, 600);
  };

  return (
    <div className="org-card" id="section-general">
      <div className="org-card-header">
        <div>
          <h2 className="org-card-title">General Details</h2>
          <p className="org-card-subtitle">
            Configure default organization identity, primary network domain, and visual brand assets.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="org-card-body space-y-6">
        {/* Upload Logo Component */}
        <UploadLogo 
          logoUrl={logoUrl}
          setLogoUrl={setLogoUrl}
          logoFile={logoFile}
          setLogoFile={setLogoFile}
        />

        <div className="org-form-grid">
          {/* Organization Name */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="orgName">
              Organization Legal Name
            </label>
            <div className="org-input-wrapper">
              <FaBuilding className="org-input-icon" />
              <input
                id="orgName"
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter organization name"
                className="org-input"
                required
              />
            </div>
          </div>

          {/* Primary Domain */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="primaryDomain">
              Primary Domain / Hostname
            </label>
            <div className="org-input-wrapper">
              <FiGlobe className="org-input-icon" />
              <input
                id="primaryDomain"
                type="text"
                value={primaryDomain}
                onChange={(e) => setPrimaryDomain(e.target.value)}
                placeholder="domain.example.com"
                className="org-input"
                required
              />
            </div>
          </div>

          {/* Support Contact Email */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="supportEmail">
              Support / Administrative Email
            </label>
            <input
              id="supportEmail"
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              placeholder="support@domain.com"
              className="org-input plain"
              required
            />
          </div>

          {/* System Timezone */}
          <div className="org-field-group">
            <label className="org-field-label" htmlFor="timeZone">
              Default System Timezone
            </label>
            <select
              id="timeZone"
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="org-select"
            >
              <option value="UTC-08:00 (Pacific Time)">UTC-08:00 (Pacific Time)</option>
              <option value="UTC-05:00 (Eastern Time)">UTC-05:00 (Eastern Time)</option>
              <option value="UTC+00:00 (London GMT)">UTC+00:00 (London GMT)</option>
              <option value="UTC+01:00 (Central European Time)">UTC+01:00 (Central European Time)</option>
              <option value="UTC+05:30 (India Standard Time)">UTC+05:30 (India Standard Time)</option>
              <option value="UTC+08:00 (Singapore / Standard Time)">UTC+08:00 (Singapore Standard Time)</option>
            </select>
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
                <span>Saving Changes...</span>
              </>
            ) : (
              <>
                <FiSave className="w-4 h-4" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
