import React from 'react';
import VersionCard from './VersionCard';
import { FiClock, FiInbox } from 'react-icons/fi';

export default function VersionTimeline({
  versions = [],
  activeVersionId,
  onSelectVersion,
  onRestoreVersion,
  onDeleteVersion,
}) {
  if (!versions || versions.length === 0) {
    return (
      <div className="dms-empty-state">
        <FiInbox className="w-8 h-8 text-slate-500 mb-2" />
        <p className="font-semibold text-slate-300">No version history available</p>
        <p className="text-xs text-slate-500">Upload a new document revision to start tracking versions.</p>
      </div>
    );
  }

  return (
    <div className="dms-version-timeline-container">
      <div className="dms-timeline-connector-line" />

      <div className="dms-timeline-list">
        {versions.map((versionItem) => {
          const isActive = activeVersionId === versionItem.id || versionItem.isCurrent;
          return (
            <div key={versionItem.id} className="dms-timeline-node-wrapper">
              <div className={`dms-timeline-node ${versionItem.isCurrent ? 'current' : ''}`} />
              
              <VersionCard
                versionItem={versionItem}
                isActive={isActive}
                onSelectVersion={onSelectVersion}
                onRestoreVersion={onRestoreVersion}
                onDeleteVersion={onDeleteVersion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
