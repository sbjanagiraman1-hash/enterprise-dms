import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function ExportButtons({ onExportCSV, onExportPDF }) {
  return (
    <div className="audit-export-group">
      <button
        type="button"
        onClick={onExportCSV}
        className="audit-btn-export secondary"
        title="Export logs as CSV spreadsheet"
      >
        <FiDownload className="audit-btn-icon" />
        <span>Export CSV</span>
      </button>

      <button
        type="button"
        onClick={onExportPDF}
        className="audit-btn-export primary"
        title="Export audit report as PDF document"
      >
        <FiDownload className="audit-btn-icon" />
        <span>Export PDF</span>
      </button>
    </div>
  );
}
