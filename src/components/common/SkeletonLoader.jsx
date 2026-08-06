import React from 'react';
import './Common.css';

export default function SkeletonLoader({ type = 'text', count = 1, className = '' }) {
  const items = Array.from({ length: count });

  if (type === 'table-row') {
    return (
      <>
        {items.map((_, idx) => (
          <tr key={idx} className="common-skeleton-tr">
            <td colSpan="10" className="p-4">
              <div className="flex items-center gap-4">
                <div className="common-skeleton-box circle w-9 h-9 shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="common-skeleton-box w-1/3 h-4" />
                  <div className="common-skeleton-box w-1/4 h-3" />
                </div>
                <div className="common-skeleton-box w-20 h-6 rounded-full" />
                <div className="common-skeleton-box w-16 h-4" />
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {items.map((_, idx) => (
          <div key={idx} className={`common-skeleton-card ${className}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="common-skeleton-box circle w-10 h-10" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="common-skeleton-box w-3/4 h-4" />
                <div className="common-skeleton-box w-1/2 h-3" />
              </div>
            </div>
            <div className="common-skeleton-box w-full h-3 mb-2" />
            <div className="common-skeleton-box w-5/6 h-3 mb-4" />
            <div className="common-skeleton-box w-full h-8 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {items.map((_, idx) => (
        <div key={idx} className={`common-skeleton-box ${type} ${className}`} />
      ))}
    </div>
  );
}
