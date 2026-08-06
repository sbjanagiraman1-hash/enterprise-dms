import React, { useState, useMemo } from 'react';
import AuditHeader from '../../components/audit/AuditHeader';
import FilterPanel from '../../components/audit/FilterPanel';
import ActiveFilters from '../../components/audit/ActiveFilters';
import AuditTable from '../../components/audit/AuditTable';
import Pagination from '../../components/audit/Pagination';
import { mockAuditLogs } from '../../data/auditLogs';
import { FiCheckCircle } from 'react-icons/fi';
import './AuditLogsCompliance.css';

export default function AuditLogsCompliance() {
  // Filter States
  const [dateRange, setDateRange] = useState('ALL');
  const [userSearch, setUserSearch] = useState('');
  const [actionType, setActionType] = useState('ALL');
  const [ipSearch, setIpSearch] = useState('');

  // Applied Filter States (triggered on "Apply Filters" or instant update)
  const [appliedFilters, setAppliedFilters] = useState({
    dateRange: 'ALL',
    userSearch: '',
    actionType: 'ALL',
    ipSearch: '',
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Feedback Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Filter logs dynamically based on appliedFilters
  const filteredLogs = useMemo(() => {
    return mockAuditLogs.filter((log) => {
      // 1. User Search (matches actor name or email)
      if (appliedFilters.userSearch.trim()) {
        const query = appliedFilters.userSearch.toLowerCase();
        const matchesName = log.actor.name.toLowerCase().includes(query);
        const matchesEmail = log.actor.email.toLowerCase().includes(query);
        if (!matchesName && !matchesEmail) return false;
      }

      // 2. Action Type
      if (appliedFilters.actionType !== 'ALL') {
        if (log.action !== appliedFilters.actionType) return false;
      }

      // 3. IP Search
      if (appliedFilters.ipSearch.trim()) {
        const query = appliedFilters.ipSearch.toLowerCase();
        if (!log.ipAddress.toLowerCase().includes(query)) return false;
      }

      // 4. Date Range Filtering (mock logic)
      if (appliedFilters.dateRange === 'TODAY') {
        if (!log.timestamp.startsWith('2026-08-05')) return false;
      } else if (appliedFilters.dateRange === 'LAST_7_DAYS') {
        // Includes all mock data within past 7 days
      }

      return true;
    });
  }, [appliedFilters]);

  // Paginated Logs
  const paginatedLogs = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredLogs.slice(start, start + pageSize);
  }, [filteredLogs, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredLogs.length / pageSize) || 1;

  // Handle Apply Filters
  const handleApplyFilters = () => {
    setIsLoading(true);
    setCurrentPage(1);
    setAppliedFilters({
      dateRange,
      userSearch,
      actionType,
      ipSearch,
    });

    setTimeout(() => {
      setIsLoading(false);
      showNotification('Filters applied successfully.');
    }, 300);
  };

  // Handle Reset Filters
  const handleResetFilters = () => {
    setDateRange('ALL');
    setUserSearch('');
    setActionType('ALL');
    setIpSearch('');
    setAppliedFilters({
      dateRange: 'ALL',
      userSearch: '',
      actionType: 'ALL',
      ipSearch: '',
    });
    setCurrentPage(1);
    showNotification('All filters have been reset.');
  };

  // Handle Removing single filter chip
  const handleRemoveFilter = (key) => {
    if (key === 'dateRange') {
      setDateRange('ALL');
      setAppliedFilters((prev) => ({ ...prev, dateRange: 'ALL' }));
    } else if (key === 'userSearch') {
      setUserSearch('');
      setAppliedFilters((prev) => ({ ...prev, userSearch: '' }));
    } else if (key === 'actionType') {
      setActionType('ALL');
      setAppliedFilters((prev) => ({ ...prev, actionType: 'ALL' }));
    } else if (key === 'ipSearch') {
      setIpSearch('');
      setAppliedFilters((prev) => ({ ...prev, ipSearch: '' }));
    }
    setCurrentPage(1);
  };

  // Active filters list for chips rendering
  const activeFiltersList = useMemo(() => {
    const list = [];
    if (appliedFilters.dateRange !== 'ALL') {
      list.push({ key: 'dateRange', label: 'Date Range', value: appliedFilters.dateRange });
    }
    if (appliedFilters.userSearch.trim()) {
      list.push({ key: 'userSearch', label: 'User', value: appliedFilters.userSearch });
    }
    if (appliedFilters.actionType !== 'ALL') {
      list.push({ key: 'actionType', label: 'Action', value: appliedFilters.actionType });
    }
    if (appliedFilters.ipSearch.trim()) {
      list.push({ key: 'ipSearch', label: 'IP Address', value: appliedFilters.ipSearch });
    }
    return list;
  }, [appliedFilters]);

  // Export CSV Functionality
  const handleExportCSV = () => {
    if (filteredLogs.length === 0) {
      alert('No audit log records available to export.');
      return;
    }

    const headers = ['Event ID,Timestamp,Severity,Actor Name,Actor Email,Action,Target Resource,IP Address,Status,Details\n'];
    const rows = filteredLogs.map((log) => 
      `"${log.eventId}","${log.timestamp}","${log.severity}","${log.actor.name}","${log.actor.email}","${log.action}","${log.targetResource}","${log.ipAddress}","${log.status}","${log.details.replace(/"/g, '""')}"`
    );

    const csvContent = 'data:text/csv;charset=utf-8,' + headers.concat(rows).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `audit_logs_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showNotification(`Exported ${filteredLogs.length} audit logs to CSV format.`);
  };

  // Export PDF Functionality
  const handleExportPDF = () => {
    window.print();
    showNotification('Opened browser print preview to export Audit Logs as PDF.');
  };

  return (
    <div className="audit-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="org-toast" role="status" aria-live="polite">
          <FiCheckCircle className="org-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Page Header */}
      <AuditHeader 
        onExportCSV={handleExportCSV} 
        onExportPDF={handleExportPDF} 
      />

      {/* 2. Filter Panel */}
      <FilterPanel
        dateRange={dateRange}
        setDateRange={setDateRange}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        actionType={actionType}
        setActionType={setActionType}
        ipSearch={ipSearch}
        setIpSearch={setIpSearch}
        onResetFilters={handleResetFilters}
        onApplyFilters={handleApplyFilters}
      />

      {/* 3. Active Filter Chips */}
      <ActiveFilters
        activeFiltersList={activeFiltersList}
        onRemoveFilter={handleRemoveFilter}
        onClearAll={handleResetFilters}
      />

      {/* 4. Audit Table */}
      <AuditTable
        logs={paginatedLogs}
        isLoading={isLoading}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Pagination Controls Footer */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={filteredLogs.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
