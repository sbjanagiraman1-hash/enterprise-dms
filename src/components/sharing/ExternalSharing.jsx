import React from 'react';
import ExternalLinkSettings from './ExternalLinkSettings';
import QRCodePanel from './QRCodePanel';
import SecuritySettings from './SecuritySettings';

export default function ExternalSharing({
  publicSharingEnabled,
  onTogglePublicSharing,
  shareableLink,
  onCopyLink,
  passwordProtected,
  setPasswordProtected,
  linkPassword,
  setLinkPassword,
  expirationDate,
  setExpirationDate,
  downloadLimit,
  setDownloadLimit,
  qrCodeUrl,
  onGenerateQRCode,
  onDownloadQRCode,
  requireLogin,
  setRequireLogin,
  applyWatermark,
  setApplyWatermark,
  allowDownloads,
  setAllowDownloads,
  enableAuditLogging,
  setEnableAuditLogging,
  viewOnlyMode,
  setViewOnlyMode,
}) {
  return (
    <div className="share-tab-content-container">
      {/* 1. Link Settings */}
      <ExternalLinkSettings
        publicSharingEnabled={publicSharingEnabled}
        onTogglePublicSharing={onTogglePublicSharing}
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
      />

      {/* 2. QR Code & Security Control Grid */}
      {publicSharingEnabled && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QRCodePanel
            qrCodeUrl={qrCodeUrl}
            onGenerateQRCode={onGenerateQRCode}
            onDownloadQRCode={onDownloadQRCode}
          />

          <SecuritySettings
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
        </div>
      )}
    </div>
  );
}
