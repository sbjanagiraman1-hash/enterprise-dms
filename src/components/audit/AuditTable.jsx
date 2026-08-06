import React from 'react';
import AuditTableRow from './AuditTableRow';
import { FiSearch, FiInbox, FiRefreshCw } from 'react-icons/fi';

export default function AuditTable({
  logs,
  isLoading,
  onResetFilters,
}) {
  return (
    <div className="audit-table-card">
      <div className="audit-table-container">
        <table className="audit-table">
          <thead>
            <tr>
              <th scope="col" className="audit-th severity">Severity</th>
              <th scope="col" className="audit-th timestamp">Timestamp</th>
              <th scope="col" className="audit-th event-id">Event ID</th>
              <th scope="col" className="audit-th actor">Actor</th>
              <th scope="col" className="audit-th action">Action</th>
              <th scope="col" className="audit-th resource">Target Resource</th>
              <th scope="col" className="audit-th ip">IP Address</th>
              <th scope="col" className="audit-th status">Status</th>
              <th scope="col" className="audit-th toggle text-right">Details</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="9" className="audit-state-td">
                  <div className="audit-state-box">
                    <FiRefreshCw className="audit-loading-spinner" />
                    <span className="audit-state-title">Loading audit logs...</span>
                    <span className="audit-state-desc">Fetching security telemetry from enterprise logging server</span>
                  </div>
                </td>
              </tr>
            ) : logs && logs.length > 0 ? (
              logs.map((log) => (
                <AuditTableRow key={log.id} log={log} />
              ))
            ) : (
              <tr>
                <td colSpan="9" className="audit-state-td">
                  <div className="audit-state-box">
                    <div className="audit-state-icon-bg">
                      <FiInbox className="audit-empty-icon" />
                    </div>
                    <span className="audit-state-title">No audit logs found</span>
                    <p className="audit-state-desc">
                      No security event records match your current filter parameters.
                    </p>
                    {onResetFilters && (
                      <button
                        type="button"
                        onClick={onResetFilters}
                        className="audit-btn-secondary mt-2"
                      >
                        Reset All Filters
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
