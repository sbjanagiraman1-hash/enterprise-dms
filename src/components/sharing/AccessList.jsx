import React from 'react';
import AccessRow from './AccessRow';

export default function AccessList({
  usersList = [],
  onUpdatePermission,
  onRemoveUser,
}) {
  return (
    <div className="share-access-list-section">
      <div className="flex items-center justify-between mb-2">
        <h4 className="share-section-title">People & Groups with Access</h4>
        <span className="text-xs text-slate-400">{usersList.length} collaborators</span>
      </div>

      <div className="share-access-list">
        {usersList.map((userItem) => (
          <AccessRow
            key={userItem.id}
            userItem={userItem}
            onUpdatePermission={onUpdatePermission}
            onRemoveUser={onRemoveUser}
          />
        ))}
      </div>
    </div>
  );
}
