import React from 'react';
import { permissionLevels } from '../../data/permissions';

export default function PermissionBadge({ role }) {
  const permConfig = permissionLevels.find(
    (p) => p.value.toLowerCase() === role?.toLowerCase()
  ) || { label: role, badgeClass: 'perm-badge-viewer' };

  return (
    <span className={`perm-badge ${permConfig.badgeClass}`}>
      {permConfig.label}
    </span>
  );
}
