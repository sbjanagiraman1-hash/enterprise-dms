import React, { useState } from 'react';
import ShareHeader from './ShareHeader';
import ShareTabs from './ShareTabs';
import InternalSharing from './InternalSharing';
import ExternalSharing from './ExternalSharing';
import ShareFooter from './ShareFooter';

export default function ShareDialog({
  isOpen,
  onClose,
  sharingConfig,
  usersList,
  onAddUser,
  onUpdatePermission,
  onRemoveUser,
  onSaveSharingSettings,
  onCopyLink,
  onGenerateQRCode,
  onDownloadQRCode,
  onOpenAdvancedMatrix,
}) {
  const [activeTab, setActiveTab] = useState('internal'); // 'internal' | 'external'
  const [isSaving, setIsSaving] = useState(false);

  // External Sharing Local States
  const [publicSharingEnabled, setPublicSharingEnabled] = useState(sharingConfig?.publicSharingEnabled ?? true);
  const [shareableLink] = useState(sharingConfig?.shareableLink || 'https://share.acme.corp/dms/link/v98a7c2e1f4b');
  const [passwordProtected, setPasswordProtected] = useState(sharingConfig?.passwordProtected ?? true);
  const [linkPassword, setLinkPassword] = useState(sharingConfig?.linkPassword || 'Secret123!');
  const [expirationDate, setExpirationDate] = useState(sharingConfig?.expirationDate || '2026-09-30');
  const [downloadLimit, setDownloadLimit] = useState(sharingConfig?.downloadLimit || '50');
  const [requireLogin, setRequireLogin] = useState(sharingConfig?.requireLogin ?? true);
  const [applyWatermark, setApplyWatermark] = useState(sharingConfig?.applyWatermark ?? true);
  const [allowDownloads, setAllowDownloads] = useState(sharingConfig?.allowDownloads ?? true);
  const [enableAuditLogging, setEnableAuditLogging] = useState(sharingConfig?.enableAuditLogging ?? true);
  const [viewOnlyMode, setViewOnlyMode] = useState(sharingConfig?.viewOnlyMode ?? false);

  if (!isOpen) return null;

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onSaveSharingSettings({
        publicSharingEnabled,
        shareableLink,
        passwordProtected,
        linkPassword,
        expirationDate,
        downloadLimit,
        requireLogin,
        applyWatermark,
        allowDownloads,
        enableAuditLogging,
        viewOnlyMode,
      });
      onClose();
    }, 600);
  };

  return (
    <div className="share-dialog-overlay" onClick={onClose}>
      <div 
        className="share-dialog-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <ShareHeader
          fileName={sharingConfig?.fileName}
          fileType={sharingConfig?.fileType}
          fileSize={sharingConfig?.fileSize}
          onClose={onClose}
        />

        {/* Tabs */}
        <ShareTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Content Body */}
        <div className="share-dialog-body">
          {activeTab === 'internal' ? (
            <InternalSharing
              usersList={usersList}
              onAddUser={onAddUser}
              onUpdatePermission={onUpdatePermission}
              onRemoveUser={onRemoveUser}
              onOpenAdvancedMatrix={onOpenAdvancedMatrix}
            />
          ) : (
            <ExternalSharing
              publicSharingEnabled={publicSharingEnabled}
              onTogglePublicSharing={setPublicSharingEnabled}
              shareableLink={shareableLink}
              onCopyLink={onCopyLink}
              passwordProtected={passwordProtected}
              setPasswordProtected={setPasswordProtected}
              linkPassword={linkPassword}
              setLinkPassword={setLinkPassword}
              expirationDate={expirationDate}
              setExpirationDate={setExpirationDate}
              downloadLimit={downloadLimit}
              setDownloadLimit={setDownloadLimit}
              qrCodeUrl={sharingConfig?.qrCodeUrl}
              onGenerateQRCode={onGenerateQRCode}
              onDownloadQRCode={onDownloadQRCode}
              requireLogin={requireLogin}
              setRequireLogin={setRequireLogin}
              applyWatermark={applyWatermark}
              setApplyWatermark={setApplyWatermark}
              allowDownloads={allowDownloads}
              setAllowDownloads={setAllowDownloads}
              enableAuditLogging={enableAuditLogging}
              setEnableAuditLogging={setEnableAuditLogging}
              viewOnlyMode={viewOnlyMode}
              setViewOnlyMode={setViewOnlyMode}
            />
          )}
        </div>

        {/* Footer */}
        <ShareFooter
          shareableLink={shareableLink}
          onCopyLink={onCopyLink}
          onCancel={onClose}
          onSave={handleSave}
          isSaving={isSaving}
        />
      </div>
    </div>
  );
}
