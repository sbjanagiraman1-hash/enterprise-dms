import React from 'react';
import PermissionDropdown from './PermissionDropdown';
import PermissionBadge from './PermissionBadge';
import { FiTrash2, FiUsers, FiUser, FiShield, FiLock } from 'react-icons/fi';

export default function AccessRow({
  userItem,
  onUpdatePermission,
  onRemoveUser,
}) {
  const isOwner = userItem.isOwner || userItem.role === 'Owner';

  return (
    <div className="share-access-row">
      {/* User Avatar & Info */}
      <div className="share-access-user-box">
        <div className={`share-user-avatar ${userItem.type === 'group' ? 'group' : ''}`}>
          {userItem.type === 'group' ? <FiUsers className="w-4 h-4" /> : userItem.avatar}
        </div>

        <div className="share-user-details">
          <div className="flex items-center gap-2">
            <span className="share-user-name">{userItem.name}</span>
            {isOwner && <span className="share-chip owner">Owner</span>}
            {userItem.isInherited && <span className="share-chip inherited">Inherited</span>}
          </div>
          <span className="share-user-email">{userItem.email}</span>
        </div>
      </div>

      {/* Permission Control & Delete Trigger */}
      <div className="share-access-actions">
        {isOwner ? (
          <PermissionBadge role="Owner" />
        ) : (
          <PermissionDropdown
            currentRole={userItem.role}
            onChangeRole={(newRole) => onUpdatePermission(userItem.id, newRole)}
          />
        )}

        {!isOwner && (
          <button
            type="button"
            onClick={() => onRemoveUser(userItem.id)}
            className="share-remove-btn"
            title="Revoke user access"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
