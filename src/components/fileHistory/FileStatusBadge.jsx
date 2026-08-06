import React from 'react';
import { 
  FiLock, 
  FiUnlock, 
  FiEye, 
  FiClock, 
  FiArchive 
} from 'react-icons/fi';

export default function FileStatusBadge({ status }) {
  const getBadgeConfig = () => {
    switch (status?.toLowerCase()) {
      case 'locked':
        return {
          label: 'Locked',
          className: 'dms-badge-locked',
          icon: FiLock
        };
      case 'unlocked':
        return {
          label: 'Unlocked',
          className: 'dms-badge-unlocked',
          icon: FiUnlock
        };
      case 'read only':
      case 'readonly':
        return {
          label: 'Read Only',
          className: 'dms-badge-readonly',
          icon: FiEye
        };
      case 'expired':
        return {
          label: 'Expired',
          className: 'dms-badge-expired',
          icon: FiClock
        };
      case 'archived':
        return {
          label: 'Archived',
          className: 'dms-badge-archived',
          icon: FiArchive
        };
      default:
        return {
          label: status || 'Available',
          className: 'dms-badge-unlocked',
          icon: FiUnlock
        };
    }
  };

  const config = getBadgeConfig();
  const IconComponent = config.icon;

  return (
    <span className={`dms-status-badge ${config.className}`}>
      <IconComponent className="dms-badge-icon" />
      <span>{config.label}</span>
    </span>
  );
}
