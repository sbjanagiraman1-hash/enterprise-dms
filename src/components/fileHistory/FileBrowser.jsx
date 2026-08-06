import React, { useState, useMemo } from 'react';
import Breadcrumbs from './Breadcrumbs';
import FileToolbar from './FileToolbar';
import FileCard from './FileCard';
import { FiFolder, FiInbox } from 'react-icons/fi';

export default function FileBrowser({
  files,
  selectedFile,
  onSelectFile,
  onUploadClick,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const filteredFiles = useMemo(() => {
    return files.filter((file) => {
      // Category Filter
      if (selectedCategory !== 'ALL' && file.category !== selectedCategory) {
        return false;
      }
      // Search Query (matches name, owner, or extension)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = file.name.toLowerCase().includes(query);
        const matchesOwner = file.owner.name.toLowerCase().includes(query);
        const matchesType = file.type.toLowerCase().includes(query);
        if (!matchesName && !matchesOwner && !matchesType) return false;
      }
      return true;
    });
  }, [files, selectedCategory, searchQuery]);

  return (
    <div className="dms-file-browser">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs />

      {/* 2. File Toolbar */}
      <FileToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onUploadClick={onUploadClick}
      />

      {/* 3. File Grid Container */}
      <div className={`dms-file-grid ${viewMode}`}>
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              isSelected={selectedFile?.id === file.id}
              onSelectFile={onSelectFile}
            />
          ))
        ) : (
          <div className="dms-empty-files-card">
            <div className="dms-empty-icon-bg">
              <FiInbox className="w-8 h-8 text-slate-400" />
            </div>
            <h4 className="dms-empty-title">No matching files found</h4>
            <p className="dms-empty-desc">
              Try adjusting your search criteria or uploading a new file.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
