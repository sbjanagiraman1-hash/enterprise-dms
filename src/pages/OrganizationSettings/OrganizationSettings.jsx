import React, { useState, useEffect } from 'react';
import SettingsSidebar from '../../components/organization/SettingsSidebar';
import GeneralDetails from '../../components/organization/GeneralDetails';
import BrandingTheme from '../../components/organization/BrandingTheme';
import SMTPConfiguration from '../../components/organization/SMTPConfiguration';
import SecurityCompliance from '../../components/organization/SecurityCompliance';
import StorageAllocation from '../../components/organization/StorageAllocation';
import { FiCheckCircle } from 'react-icons/fi';
import './OrganizationSettings.css';

export default function OrganizationSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Helper to trigger toast notification feedback
  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // IntersectionObserver to auto-update active tab when scrolling
  useEffect(() => {
    const sectionIds = ['general', 'branding', 'smtp', 'security', 'storage'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(`section-${id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="org-settings-container">
      {/* Page Title & Context Header */}
      <header className="org-header">
        <h1 className="org-title">Organization Settings & Branding</h1>
        <p className="org-subtitle">
          Manage system identity, visual brand theme, email delivery, security compliance, and storage allocation.
        </p>
      </header>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="org-toast" role="status" aria-live="polite">
          <FiCheckCircle className="org-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Grid: Sidebar + Sections Column */}
      <div className="org-main-layout">
        {/* 1. Left Sticky Navigation Sidebar */}
        <SettingsSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* 2 - 6. Main Content Cards Column */}
        <div className="org-content-column">
          {/* General Details Section */}
          <GeneralDetails showNotification={showNotification} />

          {/* Branding & Theme Section */}
          <BrandingTheme showNotification={showNotification} />

          {/* SMTP Configuration Section */}
          <SMTPConfiguration showNotification={showNotification} />

          {/* Security & Compliance Section */}
          <SecurityCompliance showNotification={showNotification} />

          {/* Storage Allocation Section */}
          <StorageAllocation showNotification={showNotification} />
        </div>
      </div>
    </div>
  );
}
