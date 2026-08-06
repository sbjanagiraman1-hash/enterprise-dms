import React from 'react';
import FileStatusBadge from './FileStatusBadge';
import UserAvatarGroup from './UserAvatarGroup';
import { 
  FiFileText, 
  FiGrid, 
  FiPieChart, 
  FiCode, 
  FiFile 
} from 'react-icons/fi';

export default function FileCard({ file, isSelected, onSelectFile }) {
  const getFileIcon = (ext) => {
    switch (ext?.toLowerCase()) {
      case 'pdf':
        return <FiFileText className="dms-file-icon pdf" />;
      case 'docx':
      case 'doc':
        return <FiFileText className="dms-file-icon word" />;
      case 'xlsx':
      case 'csv':
        return <FiGrid className="dms-file-icon excel" />;
      case 'pptx':
      case 'ppt':
        return <FiPieChart className="dms-file-icon ppt" />;
      case 'sql':
      case 'js':
      case 'json':
        return <FiCode className="dms-file-icon code" />;
      default:
        return <FiFile className="dms-file-icon default" />;
    }
  };

  return (
    <div
      onClick={() => onSelectFile(file)}
      className={`dms-file-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
    >
      {/* Top Row: File Icon & Status Badge */}
      <div className="dms-file-card-header">
        <div className="dms-file-preview-icon-wrapper">
          {getFileIcon(file.extension)}
        </div>

        <FileStatusBadge status={file.lockStatus} />
      </div>

      {/* Middle Row: File Name, Size & Modified Date */}
      <div className="dms-file-card-body">
        <h4 className="dms-file-name" title={file.name}>
          {file.name}
        </h4>
        
        <div className="dms-file-meta-row">
          <span className="dms-file-size">{file.size}</span>
          <span className="dms-file-dot">•</span>
          <span className="dms-file-date">{file.modifiedDate}</span>
        </div>
      </div>

      {/* Bottom Row: Owner & Collaborators */}
      <div className="dms-file-card-footer">
        <div className="dms-file-owner">
          <div className="dms-file-owner-avatar" title={`Owner: ${file.owner.name}`}>
            {file.owner.avatar}
          </div>
          <span className="dms-file-owner-name">{file.owner.name}</span>
        </div>

        <UserAvatarGroup users={file.collaborators} max={3} />
      </div>
    </div>
  );
}
