import React from 'react';
import { permissionLevels } from '../../data/permissions';

export default function PermissionDropdown({ currentRole, onChangeRole, disabled = false }) {
  return (
    <select
      value={currentRole}
      onChange={(e) => onChangeRole(e.target.value)}
      disabled={disabled}
      className="perm-select-dropdown"
    >
      {permissionLevels.map((p) => (
        <option key={p.value} value={p.value}>
          {p.label}
        </option>
      ))}
    </select>
  );
}
