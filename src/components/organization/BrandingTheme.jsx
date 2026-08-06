import React, { useState } from 'react';
import { FiSun, FiMoon, FiMonitor, FiSave, FiCheckCircle } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

export default function BrandingTheme({ showNotification }) {
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [secondaryColor, setSecondaryColor] = useState('#4f46e5');
  const [themeMode, setThemeMode] = useState('dark');
  const [accentColor, setAccentColor] = useState('#3b82f6');
  const [isSaving, setIsSaving] = useState(false);

  const themeOptions = [
    {
      id: 'dark',
      name: 'Dark Mode',
      desc: 'Optimized for high contrast and reduced eye strain',
      icon: FiMoon,
      previewBg: '#0f172a',
      previewCard: '#1e293b',
    },
    {
      id: 'light',
      name: 'Light Mode',
      desc: 'Clean and vibrant interface for bright environments',
      icon: FiSun,
      previewBg: '#f8fafc',
      previewCard: '#ffffff',
    },
    {
      id: 'auto',
      name: 'Auto (System)',
      desc: 'Matches your operating system settings dynamically',
      icon: FiMonitor,
      previewBg: 'linear-gradient(135deg, #0f172a 50%, #f8fafc 50%)',
      previewCard: 'linear-gradient(135deg, #1e293b 50%, #ffffff 50%)',
    },
  ];

  const presetColors = [
    '#2563eb', // Royal Blue
    '#0d9488', // Teal
    '#7c3aed', // Purple
    '#dc2626', // Crimson Red
    '#ea580c', // Orange
    '#16a34a', // Emerald Green
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      if (showNotification) {
        showNotification('Branding & Theme preferences saved!');
      }
    }, 600);
  };

  return (
    <div className="org-card" id="section-branding">
      <div className="org-card-header">
        <div>
          <h2 className="org-card-title">Branding & Theme</h2>
          <p className="org-card-subtitle">
            Customize primary and secondary brand colors, accents, and workspace theme modes.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="org-card-body space-y-8">
        {/* Theme Mode Selection Cards */}
        <div className="org-theme-section">
          <label className="org-field-label">Default Theme Mode</label>
          <div className="org-theme-grid">
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = themeMode === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setThemeMode(option.id)}
                  className={`org-theme-card ${isSelected ? 'selected' : ''}`}
                >
                  {/* Visual Preview Box */}
                  <div 
                    className="org-theme-preview-box"
                    style={{ background: option.previewBg }}
                  >
                    <div 
                      className="org-theme-preview-inner"
                      style={{ background: option.previewCard }}
                    >
                      <div className="org-theme-preview-line short" />
                      <div className="org-theme-preview-line long" />
                    </div>
                  </div>

                  <div className="org-theme-card-content">
                    <div className="org-theme-card-header">
                      <div className="org-theme-card-title">
                        <Icon className="org-theme-icon" />
                        <span>{option.name}</span>
                      </div>
                      {isSelected && (
                        <FiCheckCircle className="org-theme-check-icon" />
                      )}
                    </div>
                    <p className="org-theme-card-desc">{option.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand Colors Grid */}
        <div className="org-colors-section">
          <label className="org-field-label">Brand Palette & Accent Colors</label>
          
          <div className="org-colors-grid">
            {/* Primary Brand Color */}
            <div className="org-color-card">
              <span className="org-color-card-title">Primary Brand Color</span>
              <p className="org-color-card-subtitle">Used for main call-to-actions and sidebar accents</p>
              
              <div className="org-color-picker-row">
                <div className="org-color-swatch-wrapper">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="org-color-input"
                  />
                  <div 
                    className="org-color-swatch" 
                    style={{ backgroundColor: primaryColor }} 
                  />
                </div>
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="org-input text-mono"
                />
              </div>

              {/* Presets */}
              <div className="org-presets-row">
                <span className="org-presets-label">Presets:</span>
                <div className="org-presets-list">
                  {presetColors.map((color) => (
                    <button
                      key={`primary-${color}`}
                      type="button"
                      onClick={() => setPrimaryColor(color)}
                      className={`org-preset-dot ${primaryColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Brand Color */}
            <div className="org-color-card">
              <span className="org-color-card-title">Secondary Brand Color</span>
              <p className="org-color-card-subtitle">Used for secondary highlights, gradients, and badges</p>
              
              <div className="org-color-picker-row">
                <div className="org-color-swatch-wrapper">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="org-color-input"
                  />
                  <div 
                    className="org-color-swatch" 
                    style={{ backgroundColor: secondaryColor }} 
                  />
                </div>
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="org-input text-mono"
                />
              </div>

              {/* Presets */}
              <div className="org-presets-row">
                <span className="org-presets-label">Presets:</span>
                <div className="org-presets-list">
                  {presetColors.map((color) => (
                    <button
                      key={`secondary-${color}`}
                      type="button"
                      onClick={() => setSecondaryColor(color)}
                      className={`org-preset-dot ${secondaryColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
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
                <span>Applying Theme...</span>
              </>
            ) : (
              <>
                <FiSave className="w-4 h-4" />
                <span>Save Theme Settings</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
