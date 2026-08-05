import React from 'react';
import { 
  FiSearch, 
  FiCalendar, 
  FiFilter, 
  FiGlobe, 
  FiRotateCcw, 
  FiCheck 
} from 'react-icons/fi';
import { actionTypeOptions, dateRangeOptions } from '../../data/auditLogs';

export default function FilterPanel({
  dateRange,
  setDateRange,
  userSearch,
  setUserSearch,
  actionType,
  setActionType,
  ipSearch,
  setIpSearch,
  onResetFilters,
  onApplyFilters,
  isLoading = false,
}) {
  return (
    <div className="audit-filter-panel-card">
      <div className="audit-filter-panel-header">
        <div className="flex items-center gap-2">
          <FiFilter className="audit-filter-header-icon" />
          <h3 className="audit-filter-header-title">Audit Log Search & Filters</h3>
        </div>
        <span className="audit-filter-header-badge">Enterprise Governance</span>
      </div>

      <div className="audit-filter-grid">
        {/* 1. Date Range Field */}
        <div className="audit-filter-item">
          <label className="audit-filter-label" htmlFor="dateRange">
            Date Range
          </label>
          <div className="audit-input-wrapper">
            <FiCalendar className="audit-input-icon" />
            <select
              id="dateRange"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="audit-select"
            >
              {dateRangeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 2. User / Actor Search Field */}
        <div className="audit-filter-item">
          <label className="audit-filter-label" htmlFor="userSearch">
            User / Actor Search
          </label>
          <div className="audit-input-wrapper">
            <FiSearch className="audit-input-icon" />
            <input
              id="userSearch"
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="Search user name or email..."
              className="audit-input"
            />
          </div>
        </div>

        {/* 3. Action Type Field */}
        <div className="audit-filter-item">
          <label className="audit-filter-label" htmlFor="actionType">
            Action Type
          </label>
          <div className="audit-input-wrapper">
            <FiFilter className="audit-input-icon" />
            <select
              id="actionType"
              value={actionType}
              onChange={(e) => setActionType(e.target.value)}
              className="audit-select"
            >
              {actionTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 4. IP Address Field */}
        <div className="audit-filter-item">
          <label className="audit-filter-label" htmlFor="ipSearch">
            IP Address
          </label>
          <div className="audit-input-wrapper">
            <FiGlobe className="audit-input-icon" />
            <input
              id="ipSearch"
              type="text"
              value={ipSearch}
              onChange={(e) => setIpSearch(e.target.value)}
              placeholder="e.g. 192.168.1.105"
              className="audit-input"
            />
          </div>
        </div>
      </div>

      {/* Filter Footer Actions */}
      <div className="audit-filter-footer">
        <button
          type="button"
          onClick={onResetFilters}
          className="audit-btn-reset"
        >
          <FiRotateCcw className="w-4 h-4" />
          <span>Reset Filters</span>
        </button>

        <button
          type="button"
          onClick={onApplyFilters}
          disabled={isLoading}
          className="audit-btn-apply"
        >
          {isLoading ? (
            <>
              <span className="org-spinner" />
              <span>Applying...</span>
            </>
          ) : (
            <>
              <FiFilter className="w-4 h-4" />
              <span>Apply Filters</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
