import React from 'react';
import ExportButtons from './ExportButtons';

export default function AuditHeader({ onExportCSV, onExportPDF }) {
  return (
    <header className="audit-header">
      <div className="audit-header-content">
        <h1 className="audit-title">Audit Logs & Compliance</h1>
        <p className="audit-subtitle">
          Comprehensive tracking of system events, security policy changes, and user actions.
        </p>
      </div>

      <ExportButtons 
        onExportCSV={onExportCSV} 
        onExportPDF={onExportPDF} 
      />
    </header>
  );
}
