import React from 'react';
import { FiX, FiFileText, FiDownload } from 'react-icons/fi';

export default function DrawerHeader({ file, onClose, onDownload }) {
  if (!file) return null;

  return (
    <div className="dms-drawer-header">
      <div className="dms-drawer-header-left">
        <div className="dms-drawer-file-icon-box">
          <FiFileText className="dms-drawer-file-icon" />
        </div>

        <div className="dms-drawer-file-titles">
          <h3 className="dms-drawer-file-name" title={file.name}>
            {file.name}
          </h3>
          <div className="dms-drawer-file-badges">
            <span className="dms-file-type-badge">{file.type}</span>
            <span className="dms-file-size-badge">{file.size}</span>
          </div>
        </div>
      </div>

      <div className="dms-drawer-header-actions">
        {onDownload && (
          <button
            type="button"
            onClick={() => onDownload(file)}
            className="dms-btn-drawer-action primary"
            title="Download document"
          >
            <FiDownload className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </button>
        )}

        <button
          type="button"
          onClick={onClose}
          className="dms-drawer-close-btn"
          title="Close Collaboration Drawer"
          aria-label="Close Collaboration Drawer"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
