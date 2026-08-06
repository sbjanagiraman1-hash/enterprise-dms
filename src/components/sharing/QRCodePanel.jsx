import React from 'react';
import { FiDownload, FiRefreshCw } from 'react-icons/fi';
import { MdQrCode } from 'react-icons/md';

export default function QRCodePanel({
  qrCodeUrl,
  onGenerateQRCode,
  onDownloadQRCode,
}) {
  return (
    <div className="share-qr-panel-card">
      <div className="share-qr-preview-box">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="Document Share QR Code" className="share-qr-image" />
        ) : (
          <MdQrCode className="w-16 h-16 text-slate-500" />
        )}
      </div>

      <div className="share-qr-info">
        <h4 className="share-qr-title">Share via Mobile QR Code</h4>
        <p className="share-qr-desc">Scan with camera to immediately access public document</p>
        
        <div className="share-qr-actions">
          <button
            type="button"
            onClick={onGenerateQRCode}
            className="share-btn-qr secondary"
          >
            <FiRefreshCw className="w-3.5 h-3.5" />
            <span>Regenerate</span>
          </button>

          <button
            type="button"
            onClick={onDownloadQRCode}
            className="share-btn-qr primary"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Download PNG</span>
          </button>
        </div>
      </div>
    </div>
  );
}
