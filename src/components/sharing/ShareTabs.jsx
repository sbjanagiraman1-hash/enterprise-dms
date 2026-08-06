import React from 'react';
import { FiUsers, FiGlobe } from 'react-icons/fi';

export default function ShareTabs({ activeTab, setActiveTab }) {
  return (
    <div className="share-tabs-wrapper">
      <div className="share-tabs">
        <button
          type="button"
          onClick={() => setActiveTab('internal')}
          className={`share-tab-btn ${activeTab === 'internal' ? 'active' : ''}`}
        >
          <FiUsers className="share-tab-icon" />
          <span>Internal Sharing & Permissions</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('external')}
          className={`share-tab-btn ${activeTab === 'external' ? 'active' : ''}`}
        >
          <FiGlobe className="share-tab-icon" />
          <span>External Public Link & Security</span>
        </button>
      </div>
    </div>
  );
}
