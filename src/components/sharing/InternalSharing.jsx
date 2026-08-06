import React from 'react';
import UserSearch from './UserSearch';
import AccessList from './AccessList';
import { FiShield, FiChevronRight } from 'react-icons/fi';

export default function InternalSharing({
  usersList,
  onAddUser,
  onUpdatePermission,
  onRemoveUser,
  onOpenAdvancedMatrix,
}) {
  return (
    <div className="share-tab-content-container">
      {/* 1. Add User / Group Search Bar */}
      <UserSearch onAddUser={onAddUser} />

      {/* 2. Access List Rows */}
      <AccessList
        usersList={usersList}
        onUpdatePermission={onUpdatePermission}
        onRemoveUser={onRemoveUser}
      />

      {/* 3. Advanced Role Matrix Compact Settings Card */}
      <button
        type="button"
        onClick={onOpenAdvancedMatrix}
        className="share-role-matrix-card"
        title="Open Granular Enterprise Role Matrix"
      >
        <div className="share-role-matrix-left">
          <div className="share-role-matrix-icon-bg">
            <FiShield className="w-5 h-5" />
          </div>
          <div className="share-role-matrix-text">
            <h4 className="share-role-matrix-title">Advanced Role Matrix</h4>
            <span className="share-role-matrix-subtitle">Granular Enterprise Role Matrix</span>
            <p className="share-role-matrix-helper">
              Configure detailed permissions for roles and collaborators.
            </p>
          </div>
        </div>

        <div className="share-role-matrix-right">
          <FiChevronRight className="share-role-matrix-chevron" />
        </div>
      </button>
    </div>
  );
}
