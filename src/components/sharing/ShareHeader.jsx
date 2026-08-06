import React from 'react';
import { FiFileText, FiX, FiShare2 } from 'react-icons/fi';

export default function ShareHeader({ fileName, fileType, fileSize, onClose }) {
  return (
    <div className="share-dialog-header">
      <div className="share-header-left">
        <div className="share-file-icon-bg">
          <FiFileText className="share-file-icon" />
        </div>

        <div className="share-header-titles">
          <div className="flex items-center gap-2">
            <h3 className="share-file-name" title={fileName}>
              {fileName || 'Document_Share.pdf'}
            </h3>
            <span className="share-header-badge">Sharing Settings</span>
          </div>
          <p className="share-header-meta">
            {fileType || 'PDF File'} • {fileSize || '14.2 MB'}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="share-dialog-close-btn"
        title="Close sharing settings dialog"
      >
        <FiX className="w-5 h-5" />
      </button>
    </div>
  );
}
