import React, { useState, useRef } from 'react';
import { FiUploadCloud, FiImage, FiTrash2, FiCheckCircle } from 'react-icons/fi';

export default function UploadLogo({ logoUrl, setLogoUrl, logoFile, setLogoFile }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, SVG, JPG).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds maximum limit of 5MB.');
      return;
    }

    setLogoFile(file);
    const objectUrl = URL.createObjectURL(file);
    setLogoUrl(objectUrl);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveLogo = () => {
    setLogoUrl(null);
    setLogoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="org-upload-container">
      <label className="org-field-label">Organization Logo</label>
      
      {logoUrl ? (
        <div className="org-logo-preview-card">
          <div className="org-logo-preview-box">
            <img src={logoUrl} alt="Organization Logo Preview" className="org-logo-preview-img" />
          </div>
          
          <div className="org-logo-info">
            <div className="org-logo-status">
              <FiCheckCircle className="org-logo-success-icon" />
              <span className="org-logo-filename">
                {logoFile ? logoFile.name : 'current_brand_logo.png'}
              </span>
            </div>
            <span className="org-logo-meta">
              {logoFile ? `${(logoFile.size / 1024).toFixed(1)} KB` : 'Recommended size: 512x512px (PNG, SVG)'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleRemoveLogo}
            className="org-logo-remove-btn"
            title="Remove logo"
          >
            <FiTrash2 className="w-4 h-4" />
            <span>Remove</span>
          </button>
        </div>
      ) : (
        <div
          className={`org-dropzone ${isDragging ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="org-hidden-file-input"
            accept="image/png, image/jpeg, image/svg+xml, image/webp"
            onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
          />
          
          <div className="org-dropzone-content">
            <div className="org-dropzone-icon-bg">
              <FiUploadCloud className="org-dropzone-icon" />
            </div>
            
            <div className="org-dropzone-text">
              <p className="org-dropzone-title">
                <span className="org-dropzone-link">Click to upload</span> or drag and drop
              </p>
              <p className="org-dropzone-hint">
                SVG, PNG, JPG or WEBP (Max. 5MB, recommended square format)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
