export const mockFiles = [
  {
    id: 'file-001',
    name: 'Q3_Financial_Audit_Report.pdf',
    type: 'PDF Document',
    extension: 'pdf',
    size: '14.2 MB',
    sizeBytes: 14889779,
    modifiedDate: '2026-08-05 11:20 AM',
    createdDate: '2026-07-15 09:00 AM',
    owner: {
      name: 'Alex Johnson',
      email: 'alex.j@acme.corp',
      avatar: 'AJ'
    },
    collaborators: [
      { name: 'Elena Rostova', avatar: 'ER', email: 'elena.r@acme.corp' },
      { name: 'David Chen', avatar: 'DC', email: 'david.c@acme.corp' },
      { name: 'Sarah Miller', avatar: 'SM', email: 'sarah.m@acme.corp' }
    ],
    lockStatus: 'Locked', // 'Locked' | 'Unlocked' | 'Read Only' | 'Expired' | 'Archived'
    lockedBy: {
      name: 'Elena Rostova',
      email: 'elena.r@acme.corp',
      since: '2026-08-05 10:15 AM'
    },
    expiryDate: '2026-12-31',
    permissions: ['Read', 'Write', 'Download', 'Comment'],
    category: 'Finance'
  },
  {
    id: 'file-002',
    name: 'Enterprise_Architecture_v4.docx',
    type: 'Word Document',
    extension: 'docx',
    size: '8.7 MB',
    sizeBytes: 9122611,
    modifiedDate: '2026-08-04 04:45 PM',
    createdDate: '2026-06-20 02:30 PM',
    owner: {
      name: 'David Chen',
      email: 'david.c@acme.corp',
      avatar: 'DC'
    },
    collaborators: [
      { name: 'Alex Johnson', avatar: 'AJ', email: 'alex.j@acme.corp' },
      { name: 'Robert Taylor', avatar: 'RT', email: 'robert.t@acme.corp' }
    ],
    lockStatus: 'Unlocked',
    lockedBy: null,
    expiryDate: '2027-06-30',
    permissions: ['Read', 'Write', 'Download', 'Share'],
    category: 'Engineering'
  },
  {
    id: 'file-003',
    name: 'Security_Compliance_Matrix_2026.xlsx',
    type: 'Excel Sheet',
    extension: 'xlsx',
    size: '22.5 MB',
    sizeBytes: 23592960,
    modifiedDate: '2026-08-03 09:15 AM',
    createdDate: '2026-05-10 11:00 AM',
    owner: {
      name: 'Robert Taylor',
      email: 'robert.t@acme.corp',
      avatar: 'RT'
    },
    collaborators: [
      { name: 'Jessica Wu', avatar: 'JW', email: 'jessica.w@acme.corp' },
      { name: 'Elena Rostova', avatar: 'ER', email: 'elena.r@acme.corp' },
      { name: 'Alex Johnson', avatar: 'AJ', email: 'alex.j@acme.corp' }
    ],
    lockStatus: 'Read Only',
    lockedBy: {
      name: 'Robert Taylor',
      email: 'robert.t@acme.corp',
      since: '2026-08-01 08:00 AM'
    },
    expiryDate: '2026-09-15',
    permissions: ['Read', 'Download'],
    category: 'Security'
  },
  {
    id: 'file-004',
    name: 'Brand_Guidelines_Presentation.pptx',
    type: 'PowerPoint Deck',
    extension: 'pptx',
    size: '45.1 MB',
    sizeBytes: 47290777,
    modifiedDate: '2026-08-02 02:10 PM',
    createdDate: '2026-04-01 10:00 AM',
    owner: {
      name: 'Sarah Miller',
      email: 'sarah.m@acme.corp',
      avatar: 'SM'
    },
    collaborators: [
      { name: 'Jessica Wu', avatar: 'JW', email: 'jessica.w@acme.corp' }
    ],
    lockStatus: 'Unlocked',
    lockedBy: null,
    expiryDate: '2027-01-01',
    permissions: ['Read', 'Write', 'Download', 'Comment'],
    category: 'Design'
  },
  {
    id: 'file-005',
    name: 'Legal_NDA_Template_Signed.pdf',
    type: 'PDF Document',
    extension: 'pdf',
    size: '3.4 MB',
    sizeBytes: 3565158,
    modifiedDate: '2026-07-28 01:30 PM',
    createdDate: '2026-01-15 03:00 PM',
    owner: {
      name: 'Jessica Wu',
      email: 'jessica.w@acme.corp',
      avatar: 'JW'
    },
    collaborators: [
      { name: 'Alex Johnson', avatar: 'AJ', email: 'alex.j@acme.corp' }
    ],
    lockStatus: 'Expired',
    lockedBy: null,
    expiryDate: '2026-07-01',
    permissions: ['Read'],
    category: 'Legal'
  },
  {
    id: 'file-006',
    name: 'Database_Backup_Schema_v1.sql',
    type: 'SQL File',
    extension: 'sql',
    size: '105.8 MB',
    sizeBytes: 110939340,
    modifiedDate: '2026-07-20 11:50 PM',
    createdDate: '2025-12-01 08:00 AM',
    owner: {
      name: 'David Chen',
      email: 'david.c@acme.corp',
      avatar: 'DC'
    },
    collaborators: [
      { name: 'Robert Taylor', avatar: 'RT', email: 'robert.t@acme.corp' }
    ],
    lockStatus: 'Archived',
    lockedBy: null,
    expiryDate: '2026-06-30',
    permissions: ['Read', 'Download'],
    category: 'Infrastructure'
  }
];
