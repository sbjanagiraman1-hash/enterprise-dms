import React, { useState } from 'react';
import SeverityIcon from './SeverityIcon';
import StatusBadge from './StatusBadge';
import { FiChevronDown, FiChevronUp, FiCopy, FiCheck, FiEye } from 'react-icons/fi';

export default function AuditTableRow({ log }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEventId = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(log.eventId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <tr 
        className={`audit-table-row ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Severity Icon */}
        <td className="audit-td severity">
          <SeverityIcon severity={log.severity} />
        </td>

        {/* Timestamp */}
        <td className="audit-td text-mono timestamp">
          {log.timestamp}
        </td>

        {/* Event ID */}
        <td className="audit-td event-id">
          <div className="flex items-center gap-1.5">
            <span className="text-mono font-medium">{log.eventId}</span>
            <button
              type="button"
              onClick={handleCopyEventId}
              className="audit-copy-btn"
              title="Copy Event ID"
            >
              {copied ? <FiCheck className="text-green-500 w-3.5 h-3.5" /> : <FiCopy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </td>

        {/* User / Actor */}
        <td className="audit-td actor">
          <div className="audit-actor-box">
            <div className="audit-actor-avatar">
              {log.actor.avatar}
            </div>
            <div className="audit-actor-info">
              <span className="audit-actor-name">{log.actor.name}</span>
              <span className="audit-actor-email">{log.actor.email}</span>
            </div>
          </div>
        </td>

        {/* Action */}
        <td className="audit-td action">
          <span className="audit-action-tag">
            {log.action}
          </span>
        </td>

        {/* Target Resource */}
        <td className="audit-td resource">
          <span className="audit-resource-text">{log.targetResource}</span>
        </td>

        {/* IP Address */}
        <td className="audit-td text-mono ip">
          {log.ipAddress}
        </td>

        {/* Status Badge */}
        <td className="audit-td status">
          <StatusBadge status={log.status} />
        </td>

        {/* View Details Action Button */}
        <td className="audit-td toggle text-right">
          <button
            type="button"
            className="audit-view-details-btn"
            title={isExpanded ? 'Hide audit event details' : 'View full execution details'}
            aria-label="View Details"
          >
            <FiEye className="w-3.5 h-3.5" />
            <span>Details</span>
            {isExpanded ? <FiChevronUp className="w-3.5 h-3.5" /> : <FiChevronDown className="w-3.5 h-3.5" />}
          </button>
        </td>
      </tr>

      {/* Expanded Details Drawer */}
      {isExpanded && (
        <tr className="audit-details-row">
          <td colSpan="9" className="audit-details-td">
            <div className="audit-details-box">
              <div className="audit-details-header">
                <span className="audit-details-title">Event Execution Payload & Telemetry Log</span>
                <span className="audit-details-meta">ID: {log.id}</span>
              </div>
              <p className="audit-details-text">{log.details}</p>
              
              <div className="audit-details-meta-grid">
                <div>
                  <span className="label">Timestamp:</span>
                  <span className="val">{log.timestamp}</span>
                </div>
                <div>
                  <span className="label">Actor Email:</span>
                  <span className="val">{log.actor.email}</span>
                </div>
                <div>
                  <span className="label">IP Address:</span>
                  <span className="val">{log.ipAddress}</span>
                </div>
                <div>
                  <span className="label">Status:</span>
                  <span className="val">{log.status}</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
