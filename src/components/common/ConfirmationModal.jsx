import React from 'react';
import { FiAlertTriangle, FiTrash2, FiInfo, FiX, FiCheck } from 'react-icons/fi';
import './Common.css';

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed? This action cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger', // 'danger' | 'primary' | 'warning'
  isLoading = false,
}) {
  if (!isOpen) return null;

  const getVariantIcon = () => {
    switch (variant) {
      case 'danger':
        return <FiTrash2 className="w-6 h-6 text-red-500" />;
      case 'warning':
        return <FiAlertTriangle className="w-6 h-6 text-amber-500" />;
      case 'primary':
      default:
        return <FiInfo className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="common-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="common-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="common-modal-header">
          <div className="flex items-center gap-3">
            <div className={`common-modal-icon-bg ${variant}`}>
              {getVariantIcon()}
            </div>
            <h3 className="common-modal-title">{title}</h3>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="common-modal-close-btn"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="common-modal-body">
          <p className="common-modal-message">{message}</p>
        </div>

        <div className="common-modal-footer">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="common-btn-secondary"
          >
            {cancelText}
          </button>
          
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`common-btn-confirm ${variant}`}
          >
            {isLoading ? (
              <>
                <span className="common-spinner" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                {variant === 'danger' && <FiTrash2 className="w-4 h-4" />}
                {variant === 'primary' && <FiCheck className="w-4 h-4" />}
                <span>{confirmText}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
