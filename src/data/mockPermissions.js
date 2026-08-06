export const mockPermissions = [
  {
    id: '1',
    principalType: 'Role',
    principalName: 'Finance Manager',
    department: 'Finance',
    avatar: 'FM',
    type: 'Inherited',
    permissions: {
      read: { value: true, type: 'Inherited' },
      write: { value: true, type: 'Inherited' },
      delete: { value: false, type: 'Explicit' },
      share: { value: true, type: 'Inherited' },
      archive: { value: false, type: 'Explicit' },
      admin: { value: false, type: 'Explicit' }
    }
  },
  {
    id: '2',
    principalType: 'User',
    principalName: 'Sarah Chen',
    department: 'Finance',
    avatar: 'SC',
    type: 'Explicit',
    permissions: {
      read: { value: true, type: 'Inherited' },
      write: { value: true, type: 'Explicit' },
      delete: { value: true, type: 'Explicit' },
      share: { value: true, type: 'Explicit' },
      archive: { value: false, type: 'Explicit' },
      admin: { value: false, type: 'Explicit' }
    }
  },
  {
    id: '3',
    principalType: 'Role',
    principalName: 'Auditor',
    department: 'Compliance',
    avatar: 'AU',
    type: 'Explicit',
    permissions: {
      read: { value: true, type: 'Explicit' },
      write: { value: false, type: 'Explicit' },
      delete: { value: false, type: 'Explicit' },
      share: { value: false, type: 'Explicit' },
      archive: { value: false, type: 'Explicit' },
      admin: { value: false, type: 'Explicit' }
    }
  },
  {
    id: '4',
    principalType: 'User',
    principalName: 'Michael Chang',
    department: 'Engineering',
    avatar: 'MC',
    type: 'Explicit',
    permissions: {
      read: { value: true, type: 'Explicit' },
      write: { value: false, type: 'Explicit' },
      delete: { value: false, type: 'Explicit' },
      share: { value: false, type: 'Explicit' },
      archive: { value: false, type: 'Explicit' },
      admin: { value: false, type: 'Explicit' }
    }
  },
  {
    id: '5',
    principalType: 'Role',
    principalName: 'System Admin',
    department: 'IT',
    avatar: 'SA',
    type: 'Inherited',
    permissions: {
      read: { value: true, type: 'Inherited' },
      write: { value: true, type: 'Inherited' },
      delete: { value: true, type: 'Inherited' },
      share: { value: true, type: 'Inherited' },
      archive: { value: true, type: 'Inherited' },
      admin: { value: true, type: 'Inherited' }
    }
  }
];
