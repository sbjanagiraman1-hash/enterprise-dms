import React from 'react';
import { organizationMenuItems } from '../../data/organizationMenu';
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

export default function SettingsSidebar({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <div className="org-settings-sidebar-wrapper">
      {/* Mobile Toggle Bar */}
      <div className="org-settings-mobile-toggle">
        <button 
          type="button"
          className="org-settings-mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="org-settings-mobile-btn-content">
            <FiMenu className="org-settings-mobile-icon" />
            <span>Settings Menu</span>
          </span>
          <span className="org-settings-active-badge">
            {organizationMenuItems.find(item => item.id === activeTab)?.label}
          </span>
        </button>
      </div>

      {/* Navigation Card */}
      <nav className={`org-settings-sidebar ${mobileMenuOpen ? 'is-mobile-open' : ''}`}>
        <div className="org-settings-sidebar-header">
          <h3 className="org-settings-sidebar-title">Settings & Config</h3>
          <p className="org-settings-sidebar-subtitle">Manage organization preferences</p>
        </div>

        <ul className="org-settings-menu">
          {organizationMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="org-settings-menu-item">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    // Smooth scroll to section if needed
                    const sectionEl = document.getElementById(`section-${item.id}`);
                    if (sectionEl) {
                      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`org-settings-menu-btn ${isActive ? 'active' : ''}`}
                >
                  {/* Left Active Indicator Strip */}
                  <span className="org-settings-active-indicator" />

                  <div className={`org-settings-icon-wrapper ${isActive ? 'active' : ''}`}>
                    <Icon className="org-settings-menu-icon" />
                  </div>

                  <div className="org-settings-menu-text">
                    <span className="org-settings-menu-label">{item.label}</span>
                    <span className="org-settings-menu-desc">{item.description}</span>
                  </div>

                  <FiChevronRight className={`org-settings-arrow-icon ${isActive ? 'active' : ''}`} />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
