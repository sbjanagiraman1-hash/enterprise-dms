import React from 'react';

export default function QuotaProgress({ percentage = 0, status = 'Normal' }) {
  const getProgressColor = () => {
    if (percentage > 85 || status === 'Critical') return '#ef4444'; // Red
    if (percentage > 70 || status === 'Warning') return '#f59e0b'; // Amber
    return '#2563eb'; // Blue
  };

  return (
    <div className="org-quota-progress-wrapper">
      <div className="org-progress-bar-track">
        <div
          className="org-progress-bar-fill"
          style={{
            width: `${Math.min(100, percentage)}%`,
            backgroundColor: getProgressColor(),
          }}
        />
      </div>
    </div>
  );
}
