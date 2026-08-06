export const mockUsersAndGroups = [
  {
    id: 'usr-101',
    name: 'Alex Johnson',
    email: 'alex.j@acme.corp',
    avatar: 'AJ',
    type: 'user',
    role: 'Owner',
    isOwner: true,
    isInherited: false,
    department: 'Executive'
  },
  {
    id: 'usr-102',
    name: 'Elena Rostova',
    email: 'elena.r@acme.corp',
    avatar: 'ER',
    type: 'user',
    role: 'Admin',
    isOwner: false,
    isInherited: false,
    department: 'Finance'
  },
  {
    id: 'usr-103',
    name: 'David Chen',
    email: 'david.c@acme.corp',
    avatar: 'DC',
    type: 'user',
    role: 'Editor',
    isOwner: false,
    isInherited: false,
    department: 'Engineering'
  },
  {
    id: 'grp-201',
    name: 'SecOps Audit Team',
    email: 'secops-team@acme.corp',
    avatar: 'ST',
    type: 'group',
    role: 'Contributor',
    isOwner: false,
    isInherited: true,
    department: 'Security & Compliance'
  },
  {
    id: 'usr-104',
    name: 'Sarah Miller',
    email: 'sarah.m@acme.corp',
    avatar: 'SM',
    type: 'user',
    role: 'Viewer',
    isOwner: false,
    isInherited: false,
    department: 'Product Management'
  },
  {
    id: 'usr-105',
    name: 'Robert Taylor',
    email: 'robert.t@acme.corp',
    avatar: 'RT',
    type: 'user',
    role: 'Comment Only',
    isOwner: false,
    isInherited: false,
    department: 'DevOps'
  }
];

export const mockSearchableDirectory = [
  { id: 'usr-106', name: 'Jessica Wu', email: 'jessica.w@acme.corp', avatar: 'JW', type: 'user', department: 'Legal' },
  { id: 'usr-107', name: 'Michael Chang', email: 'michael.c@acme.corp', avatar: 'MC', type: 'user', department: 'Payroll' },
  { id: 'grp-202', name: 'Financial Analysts Group', email: 'fin-analysts@acme.corp', avatar: 'FA', type: 'group', department: 'Finance' },
  { id: 'grp-203', name: 'Executive Leadership Board', email: 'board@acme.corp', avatar: 'EL', type: 'group', department: 'Executive' }
];
