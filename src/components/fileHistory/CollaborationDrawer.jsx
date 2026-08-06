import React, { useState } from 'react';
import DrawerHeader from './DrawerHeader';
import DrawerTabs from './DrawerTabs';
import FileDetails from './FileDetails';
import VersionTimeline from './VersionTimeline';
import CommentsPanel from './CommentsPanel';

export default function CollaborationDrawer({
  file,
  isOpen,
  onClose,
  versionHistory = [],
  comments = [],
  onDownload,
  onRequestUnlock,
  onRestoreVersion,
  onDeleteVersion,
  onPostComment,
  onReply,
  onResolveThread,
}) {
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'versions' | 'comments'
  const [activeVersionId, setActiveVersionId] = useState(null);

  if (!isOpen || !file) return null;

  return (
    <aside className={`dms-collaboration-drawer ${isOpen ? 'is-open' : ''}`}>
      {/* 1. Drawer Header */}
      <DrawerHeader 
        file={file} 
        onClose={onClose} 
        onDownload={onDownload} 
      />

      {/* 2. Drawer Navigation Tabs */}
      <DrawerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        versionCount={versionHistory.length}
        commentCount={comments.length}
      />

      {/* 3. Drawer Active Tab Body */}
      <div className="dms-drawer-body">
        {activeTab === 'details' && (
          <FileDetails 
            file={file} 
            onRequestUnlock={onRequestUnlock} 
          />
        )}

        {activeTab === 'versions' && (
          <VersionTimeline
            versions={versionHistory}
            activeVersionId={activeVersionId}
            onSelectVersion={(v) => setActiveVersionId(v.id)}
            onRestoreVersion={onRestoreVersion}
            onDeleteVersion={onDeleteVersion}
          />
        )}

        {activeTab === 'comments' && (
          <CommentsPanel
            comments={comments}
            onPostComment={onPostComment}
            onReply={onReply}
            onResolveThread={onResolveThread}
          />
        )}
      </div>
    </aside>
  );
}
