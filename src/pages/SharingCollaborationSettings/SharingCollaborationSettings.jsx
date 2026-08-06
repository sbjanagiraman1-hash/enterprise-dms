import React, { useState } from 'react';
import ShareDialog from '../../components/sharing/ShareDialog';
import PermissionBadge from '../../components/sharing/PermissionBadge';
import { mockUsersAndGroups } from '../../data/users';
import { mockSharingSettings } from '../../data/sharingSettings';
import { 
  FiShare2, 
  FiUsers, 
  FiGlobe, 
  FiLock, 
  FiCheckCircle, 
  FiCopy, 
  FiShield, 
  FiFileText 
} from 'react-icons/fi';
import './SharingCollaborationSettings.css';

export default function SharingCollaborationSettings() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [usersList, setUsersList] = useState(mockUsersAndGroups);
  const [sharingConfig, setSharingConfig] = useState(mockSharingSettings);
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Action Functions Ready for Future API Integration
  const handleAddUser = (newUser) => {
    setUsersList((prev) => [...prev, newUser]);
    showNotification(`Added ${newUser.name} as ${newUser.role}.`);
  };

  const handleRemoveUser = (userId) => {
    const userToRemove = usersList.find((u) => u.id === userId);
    setUsersList((prev) => prev.filter((u) => u.id !== userId));
    showNotification(`Revoked access for ${userToRemove?.name || 'user'}.`);
  };

  const handleUpdatePermission = (userId, newRole) => {
    if (newRole === 'No Access') {
      handleRemoveUser(userId);
      return;
    }
    setUsersList((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
    showNotification(`Updated role to ${newRole}.`);
  };

  const handleCopyLink = (linkUrl) => {
    navigator.clipboard.writeText(linkUrl || sharingConfig.shareableLink);
    showNotification('Shareable public link copied to clipboard!');
  };

  const handleGenerateQRCode = () => {
    showNotification('Regenerated mobile QR code for document.');
  };

  const handleDownloadQRCode = () => {
    showNotification('Downloading QR code image PNG payload...');
  };

  const handleSaveSharingSettings = (updatedConfig) => {
    setSharingConfig((prev) => ({ ...prev, ...updatedConfig }));
    showNotification('Sharing & Collaboration preferences saved successfully!');
  };

  const handleOpenAdvancedMatrix = () => {
    showNotification('Opened enterprise role-based access control (RBAC) matrix.');
  };

  return (
    <div className="share-page-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="org-toast" role="status" aria-live="polite">
          <FiCheckCircle className="org-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <header className="share-page-header">
        <div>
          <h1 className="share-page-title">Sharing & Collaboration Settings</h1>
          <p className="share-page-subtitle">
            Configure internal access permissions, external public links, and data loss prevention (DLP) security controls.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className="org-btn-primary"
        >
          <FiShare2 className="w-4 h-4" />
          <span>Manage Sharing Settings</span>
        </button>
      </header>

      {/* Document Sharing Overview Card */}
      <div className="share-overview-card">
        <div className="share-overview-info">
          <div className="share-overview-icon-bg">
            <FiFileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="share-overview-title">{sharingConfig.fileName}</h3>
            <p className="share-overview-desc">
              {sharingConfig.fileType} • {sharingConfig.fileSize} • Currently shared with {usersList.length} internal collaborators
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
            <FiGlobe className="text-blue-400 w-3.5 h-3.5" />
            <span>Public Link: <strong>{sharingConfig.publicSharingEnabled ? 'Active' : 'Disabled'}</strong></span>
          </div>

          <button
            type="button"
            onClick={() => setIsDialogOpen(true)}
            className="org-btn-secondary"
          >
            <FiShare2 className="w-4 h-4" />
            <span>Open Share Dialog</span>
          </button>
        </div>
      </div>

      {/* Centered Share Dialog Modal */}
      <ShareDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        sharingConfig={sharingConfig}
        usersList={usersList}
        onAddUser={handleAddUser}
        onUpdatePermission={handleUpdatePermission}
        onRemoveUser={handleRemoveUser}
        onSaveSharingSettings={handleSaveSharingSettings}
        onCopyLink={handleCopyLink}
        onGenerateQRCode={handleGenerateQRCode}
        onDownloadQRCode={handleDownloadQRCode}
        onOpenAdvancedMatrix={handleOpenAdvancedMatrix}
      />
    </div>
  );
}
