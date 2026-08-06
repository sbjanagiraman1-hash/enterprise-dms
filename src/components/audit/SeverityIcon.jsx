import React from 'react';
import { 
  FiAlertOctagon, 
  FiAlertTriangle, 
  FiInfo, 
  FiCheckCircle 
} from 'react-icons/fi';

export default function SeverityIcon({ severity }) {
  const getIconConfig = () => {
    switch (severity?.toLowerCase()) {
      case 'critical':
        return {
          icon: FiAlertOctagon,
          className: 'audit-severity-critical',
          label: 'Critical Severity',
        };
      case 'warning':
        return {
          icon: FiAlertTriangle,
          className: 'audit-severity-warning',
          label: 'Warning Severity',
        };
      case 'success':
        return {
          icon: FiCheckCircle,
          className: 'audit-severity-success',
          label: 'Success Severity',
        };
      case 'information':
      case 'info':
      default:
        return {
          icon: FiInfo,
          className: 'audit-severity-info',
          label: 'Info Severity',
        };
    }
  };

  const config = getIconConfig();
  const IconComponent = config.icon;

  return (
    <div 
      className={`audit-severity-badge ${config.className}`} 
      title={config.label}
    >
      <IconComponent className="audit-severity-icon" />
    </div>
  );
}
