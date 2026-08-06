import React from 'react';
import { 
  FiSearch, 
  FiFilter, 
  FiSliders, 
  FiHardDrive, 
  FiGrid, 
  FiLayers 
} from 'react-icons/fi';

export default function SearchToolbar({
  searchQuery,
  setSearchQuery,
  branchFilter,
  setBranchFilter,
  departmentFilter,
  setDepartmentFilter,
  storageFilter,
  setStorageFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="org-search-toolbar">
      {/* Search Input */}
      <div className="org-search-input-wrapper">
        <FiSearch className="org-search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search branches, departments, managers, or teams..."
          className="org-search-input"
        />
      </div>

      {/* Filter Selects */}
      <div className="org-search-filters">
        {/* Branch Filter */}
        <div className="org-filter-select-wrapper">
          <FiLayers className="org-filter-icon" />
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="org-select-input"
          >
            <option value="ALL">All Branches</option>
            <option value="Americas">Americas East</option>
            <option value="EMEA">EMEA Hub</option>
            <option value="APAC">APAC Ops</option>
          </select>
        </div>

        {/* Department Filter */}
        <div className="org-filter-select-wrapper">
          <FiGrid className="org-filter-icon" />
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="org-select-input"
          >
            <option value="ALL">All Department Types</option>
            <option value="Financial Operations">Financial Operations</option>
            <option value="Technology & R&D">Technology & R&D</option>
            <option value="SecOps & Legal">SecOps & Legal</option>
            <option value="Operations">Operations</option>
          </select>
        </div>

        {/* Storage Limit Filter */}
        <div className="org-filter-select-wrapper">
          <FiHardDrive className="org-filter-icon" />
          <select
            value={storageFilter}
            onChange={(e) => setStorageFilter(e.target.value)}
            className="org-select-input"
          >
            <option value="ALL">All Quota Limits</option>
            <option value="HIGH">&gt; 2.0 TB Allocated</option>
            <option value="MID">1.0 TB - 2.0 TB Allocated</option>
            <option value="LOW">&lt; 1.0 TB Allocated</option>
          </select>
        </div>

        {/* Sort Options */}
        <div className="org-filter-select-wrapper">
          <FiSliders className="org-filter-icon" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="org-select-input"
          >
            <option value="NAME_ASC">Name (A-Z)</option>
            <option value="EMPLOYEES_DESC">Most Employees</option>
            <option value="STORAGE_DESC">Highest Quota</option>
          </select>
        </div>
      </div>
    </div>
  );
}
