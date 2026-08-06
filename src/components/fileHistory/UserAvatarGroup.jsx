import React from 'react';

export default function UserAvatarGroup({ users = [], max = 3 }) {
  if (!users || users.length === 0) return null;

  const visibleUsers = users.slice(0, max);
  const remainingCount = users.length - max;

  return (
    <div className="dms-avatar-group">
      {visibleUsers.map((user, idx) => (
        <div 
          key={user.email || idx} 
          className="dms-avatar-item"
          title={`${user.name} (${user.email || 'Collaborator'})`}
        >
          {user.avatar}
        </div>
      ))}

      {remainingCount > 0 && (
        <div className="dms-avatar-item overflow-badge" title={`${remainingCount} more collaborators`}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
