import React from 'react';
import { FiInfo, FiClock, FiMessageSquare } from 'react-icons/fi';

export default function DrawerTabs({ activeTab, setActiveTab, versionCount = 0, commentCount = 0 }) {
  const tabs = [
    { id: 'details', label: 'Details', icon: FiInfo },
    { id: 'versions', label: 'Versions', icon: FiClock, badge: versionCount },
    { id: 'comments', label: 'Comments', icon: FiMessageSquare, badge: commentCount },
  ];

  return (
    <div className="dms-drawer-tabs-wrapper">
      <div className="dms-drawer-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`dms-tab-btn ${isActive ? 'active' : ''}`}
            >
              <Icon className="dms-tab-icon" />
              <span>{tab.label}</span>
              {tab.badge > 0 && (
                <span className={`dms-tab-badge ${isActive ? 'active' : ''}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
