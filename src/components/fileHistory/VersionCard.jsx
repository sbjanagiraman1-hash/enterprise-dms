import React from 'react';
import { FiRotateCcw, FiCheck, FiDownload } from 'react-icons/fi';

export default function VersionCard({
  versionItem,
  isActive,
  onSelectVersion,
  onRestoreVersion,
  onDownloadVersion,
}) {
  return (
    <div 
      className={`dms-version-card ${versionItem.isCurrent ? 'is-current' : ''} ${isActive ? 'active' : ''}`}
      onClick={() => onSelectVersion(versionItem)}
    >
      <div className="dms-version-card-header">
        <div className="flex items-center gap-2">
          <span className="dms-version-number">{versionItem.version}</span>
          {versionItem.isCurrent && (
            <span className="dms-current-badge">
              <FiCheck className="w-3 h-3" /> Current Version
            </span>
          )}
        </div>

        <div className="dms-version-card-actions">
          {onDownloadVersion && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDownloadVersion(versionItem);
              }}
              className="dms-version-action-btn"
              title="Download version copy"
            >
              <FiDownload className="w-3.5 h-3.5" />
            </button>
          )}

          {!versionItem.isCurrent && onRestoreVersion && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRestoreVersion(versionItem);
              }}
              className="dms-btn-restore"
              title="Restore this version"
            >
              <FiRotateCcw className="w-3.5 h-3.5" />
              <span>Restore</span>
            </button>
          )}
        </div>
      </div>

      <p className="dms-version-description">{versionItem.description}</p>

      <div className="dms-version-meta-footer">
        <div className="dms-version-author">
          <div className="dms-version-avatar">
            {versionItem.author.avatar}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="dms-version-author-name">{versionItem.author.name}</span>
            <span className="dms-version-timestamp">
              {versionItem.uploadDate} at {versionItem.uploadTime} ({versionItem.size})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
