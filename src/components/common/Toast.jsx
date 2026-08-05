import React, { useEffect } from 'react';
import { 
  FiCheckCircle, 
  FiAlertCircle, 
  FiAlertTriangle, 
  FiInfo, 
  FiX 
} from 'react-icons/fi';
import './Common.css';

export default function Toast({
  message,
  type = 'success', // 'success' | 'error' | 'warning' | 'info'
  duration = 4000,
  onClose,
}) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const getToastIcon = () => {
    switch (type) {
      case 'error':
        return <FiAlertCircle className="common-toast-icon error" />;
      case 'warning':
        return <FiAlertTriangle className="common-toast-icon warning" />;
      case 'info':
        return <FiInfo className="common-toast-icon info" />;
      case 'success':
      default:
        return <FiCheckCircle className="common-toast-icon success" />;
    }
  };

  return (
    <div className={`common-toast-banner ${type}`} role="status" aria-live="polite">
      {getToastIcon()}
      <span className="common-toast-message">{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="common-toast-close"
          aria-label="Close notification"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
