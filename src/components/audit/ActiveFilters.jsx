import React from 'react';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { actionTypeOptions, dateRangeOptions } from '../../data/auditLogs';

export default function ActiveFilters({
  activeFiltersList,
  onRemoveFilter,
  onClearAll,
}) {
  if (!activeFiltersList || activeFiltersList.length === 0) {
    return null;
  }

  const getLabelForValue = (type, val) => {
    if (type === 'actionType') {
      const match = actionTypeOptions.find((o) => o.value === val);
      return match ? match.label : val;
    }
    if (type === 'dateRange') {
      const match = dateRangeOptions.find((o) => o.value === val);
      return match ? match.label : val;
    }
    return val;
  };

  return (
    <div className="audit-active-filters-container">
      <span className="audit-active-filters-title">Active Filters:</span>

      <div className="audit-chips-wrapper">
        {activeFiltersList.map((filter) => (
          <div key={filter.key} className="audit-chip">
            <span className="audit-chip-category">{filter.label}:</span>
            <span className="audit-chip-val">
              {getLabelForValue(filter.key, filter.value)}
            </span>
            <button
              type="button"
              onClick={() => onRemoveFilter(filter.key)}
              className="audit-chip-remove-btn"
              title={`Remove ${filter.label} filter`}
            >
              <FiX className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={onClearAll}
          className="audit-clear-all-btn"
        >
          <FiTrash2 className="w-3.5 h-3.5" />
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
}
