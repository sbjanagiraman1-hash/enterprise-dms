import React from 'react';

export default function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'success':
        return 'audit-badge-success';
      case 'blocked':
        return 'audit-badge-blocked';
      case 'failed':
        return 'audit-badge-failed';
      case 'warning':
        return 'audit-badge-warning';
      case 'pending':
        return 'audit-badge-pending';
      case 'information':
      case 'info':
      default:
        return 'audit-badge-info';
    }
  };

  return (
    <span className={`audit-badge ${getStatusClass()}`}>
      <span className="audit-badge-dot" />
      <span>{status || 'Unknown'}</span>
    </span>
  );
}
