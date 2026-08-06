import React from 'react';
import { 
  FiSearch, 
  FiFilter, 
  FiUploadCloud, 
  FiGrid, 
  FiList 
} from 'react-icons/fi';

export default function FileToolbar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  viewMode,
  setViewMode,
  onUploadClick,
  onFilterClick,
}) {
  return (
    <div className="dms-toolbar-card">
      {/* Search Bar */}
      <div className="dms-toolbar-search-wrapper">
        <FiSearch className="dms-toolbar-search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documents by name, extension or owner..."
          className="dms-toolbar-search-input"
        />
      </div>

      {/* Toolbar Right Controls */}
      <div className="dms-toolbar-controls">
        {/* Categories Dropdown */}
        <div className="dms-toolbar-select-wrapper">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="dms-toolbar-select"
          >
            <option value="ALL">All Categories</option>
            <option value="Finance">Financial Reports</option>
            <option value="Legal">Legal Agreements</option>
            <option value="Engineering">Technical Spec</option>
            <option value="Security">Security Audit</option>
            <option value="Design">Marketing Assets</option>
          </select>
        </div>

        {/* Filter Button */}
        <button
          type="button"
          onClick={onFilterClick}
          className="dms-btn-filter-secondary"
          title="Filter documents"
        >
          <FiFilter className="w-4 h-4" />
          <span>Filter</span>
        </button>

        {/* Grid/List View Toggle */}
        <div className="dms-view-toggle">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`dms-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            title="Grid View"
          >
            <FiGrid className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`dms-view-btn ${viewMode === 'list' ? 'active' : ''}`}
            title="List View"
          >
            <FiList className="w-4 h-4" />
          </button>
        </div>

        {/* Upload File Button */}
        <button
          type="button"
          onClick={onUploadClick}
          className="dms-btn-upload-primary"
        >
          <FiUploadCloud className="w-4 h-4" />
          <span>Upload File</span>
        </button>
      </div>
    </div>
  );
}
