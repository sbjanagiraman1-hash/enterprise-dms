import React from 'react';
import ApprovalColumn from './ApprovalColumn';

export default function ApprovalBoard({ requests, onCardClick }) {
  const columns = ['Pending', 'In Review', 'Approved', 'Rejected', 'Archived'];

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 lg:gap-6 px-1">
        {columns.map(col => (
          <ApprovalColumn 
            key={col} 
            title={col} 
            requests={requests.filter(r => r.status === col)} 
            onCardClick={onCardClick} 
          />
        ))}
      </div>
    </div>
  );
}
