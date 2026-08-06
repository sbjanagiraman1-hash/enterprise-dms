export const permissionLevels = [
  {
    value: 'Owner',
    label: 'Owner',
    description: 'Full control over file, security permissions, and deletion',
    badgeClass: 'perm-badge-owner'
  },
  {
    value: 'Admin',
    label: 'Admin',
    description: 'Can manage access list, edit document, and configure sharing',
    badgeClass: 'perm-badge-admin'
  },
  {
    value: 'Editor',
    label: 'Editor',
    description: 'Can edit content, upload new versions, and post comments',
    badgeClass: 'perm-badge-editor'
  },
  {
    value: 'Contributor',
    label: 'Contributor',
    description: 'Can suggest edits, upload attachments, and comment',
    badgeClass: 'perm-badge-contributor'
  },
  {
    value: 'Viewer',
    label: 'Viewer',
    description: 'Can view document and download copies',
    badgeClass: 'perm-badge-viewer'
  },
  {
    value: 'Comment Only',
    label: 'Comment Only',
    description: 'Can view content and leave discussion comments',
    badgeClass: 'perm-badge-comment'
  },
  {
    value: 'Read Only',
    label: 'Read Only',
    description: 'Can view content in browser without downloading',
    badgeClass: 'perm-badge-readonly'
  },
  {
    value: 'No Access',
    label: 'Remove Access',
    description: 'Revoke all permissions for this user or group',
    badgeClass: 'perm-badge-none'
  }
];
