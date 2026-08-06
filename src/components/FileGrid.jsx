import React from 'react';
import FileCard from './FileCard';

export default function FileGrid({ files, selectedFiles, onSelect, onViewDetails }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-20">
      {files.map(file => (
        <FileCard 
          key={file.id} 
          file={file} 
          isSelected={selectedFiles.includes(file.id)}
          onSelect={onSelect}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
