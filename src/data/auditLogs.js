export const mockAuditLogs = [
  {
    id: 'log-101',
    eventId: 'EVT-89201',
    timestamp: '2026-08-05 14:32:10',
    severity: 'Critical',
    actor: {
      name: 'Alex Johnson',
      email: 'alex.j@acme.corp',
      avatar: 'AJ'
    },
    action: 'DELETE_USER',
    targetResource: 'User: mark.t@acme.corp',
    ipAddress: '192.168.1.105',
    status: 'Success',
    details: 'User account mark.t@acme.corp was permanently purged from directory.'
  },
  {
    id: 'log-102',
    eventId: 'EVT-89202',
    timestamp: '2026-08-05 14:15:44',
    severity: 'Warning',
    actor: {
      name: 'Elena Rostova',
      email: 'elena.r@acme.corp',
      avatar: 'ER'
    },
    action: 'LOGIN_FAILED',
    targetResource: 'Auth Service / SSO',
    ipAddress: '203.0.113.88',
    status: 'Blocked',
    details: '3 consecutive invalid password attempts from untrusted subnet.'
  },
  {
    id: 'log-103',
    eventId: 'EVT-89203',
    timestamp: '2026-08-05 13:50:02',
    severity: 'Information',
    actor: {
      name: 'David Chen',
      email: 'david.c@acme.corp',
      avatar: 'DC'
    },
    action: 'UPDATE_PERMISSIONS',
    targetResource: 'Role: SecOps Lead',
    ipAddress: '10.0.4.12',
    status: 'Success',
    details: 'Granted write access to security audit logging policy.'
  },
  {
    id: 'log-104',
    eventId: 'EVT-89204',
    timestamp: '2026-08-05 12:22:19',
    severity: 'Critical',
    actor: {
      name: 'System Automation',
      email: 'daemon@acme.corp',
      avatar: 'SA'
    },
    action: 'EXPORT_DATABASE',
    targetResource: 'DB Cluster: prod-primary-v2',
    ipAddress: '10.0.0.1',
    status: 'Failed',
    details: 'Automated snapshot export failed due to storage quota restriction.'
  },
  {
    id: 'log-105',
    eventId: 'EVT-89205',
    timestamp: '2026-08-05 11:05:30',
    severity: 'Success',
    actor: {
      name: 'Sarah Miller',
      email: 'sarah.m@acme.corp',
      avatar: 'SM'
    },
    action: 'MFA_ENABLED',
    targetResource: 'User: sarah.m@acme.corp',
    ipAddress: '172.16.0.45',
    status: 'Success',
    details: 'Hardware YubiKey registered for multi-factor authentication.'
  },
  {
    id: 'log-106',
    eventId: 'EVT-89206',
    timestamp: '2026-08-05 09:40:12',
    severity: 'Warning',
    actor: {
      name: 'Robert Taylor',
      email: 'robert.t@acme.corp',
      avatar: 'RT'
    },
    action: 'CONFIG_CHANGED',
    targetResource: 'SMTP Outbound Gateway',
    ipAddress: '192.168.1.18',
    status: 'Warning',
    details: 'Changed SMTP encryption protocol from SSL to STARTTLS.'
  },
  {
    id: 'log-107',
    eventId: 'EVT-89207',
    timestamp: '2026-08-04 18:12:05',
    severity: 'Information',
    actor: {
      name: 'Jessica Wu',
      email: 'jessica.w@acme.corp',
      avatar: 'JW'
    },
    action: 'SESSION_TERMINATED',
    targetResource: 'Session ID #88412',
    ipAddress: '198.51.100.22',
    status: 'Success',
    details: 'Manual session termination requested via admin panel.'
  },
  {
    id: 'log-108',
    eventId: 'EVT-89208',
    timestamp: '2026-08-04 16:04:55',
    severity: 'Critical',
    actor: {
      name: 'Unknown Actor',
      email: 'unauthenticated@external',
      avatar: 'UA'
    },
    action: 'UNAUTHORIZED_ACCESS',
    targetResource: 'API Gateway /v1/admin',
    ipAddress: '198.51.100.99',
    status: 'Blocked',
    details: 'Automated IP firewall rule dropped malicious request payload.'
  },
  {
    id: 'log-109',
    eventId: 'EVT-89209',
    timestamp: '2026-08-04 14:30:00',
    severity: 'Information',
    actor: {
      name: 'David Chen',
      email: 'david.c@acme.corp',
      avatar: 'DC'
    },
    action: 'QUOTA_INCREASE_REQUESTED',
    targetResource: 'Storage Allocation: 2.0 TB',
    ipAddress: '10.0.4.12',
    status: 'Pending',
    details: 'Submitted capacity request to organization super-administrator.'
  },
  {
    id: 'log-110',
    eventId: 'EVT-89210',
    timestamp: '2026-08-04 11:15:20',
    severity: 'Success',
    actor: {
      name: 'Alex Johnson',
      email: 'alex.j@acme.corp',
      avatar: 'AJ'
    },
    action: 'BRANDING_UPDATED',
    targetResource: 'Theme & Logo Config',
    ipAddress: '192.168.1.105',
    status: 'Success',
    details: 'Updated primary brand colors and custom vector logo.'
  }
];

export const actionTypeOptions = [
  { value: 'ALL', label: 'All Action Types' },
  { value: 'DELETE_USER', label: 'Delete User' },
  { value: 'UPDATE_PERMISSIONS', label: 'Update Permissions' },
  { value: 'LOGIN_FAILED', label: 'Login Failed' },
  { value: 'EXPORT_DATABASE', label: 'Export Database' },
  { value: 'MFA_ENABLED', label: 'MFA Enabled' },
  { value: 'CONFIG_CHANGED', label: 'Config Changed' },
  { value: 'UNAUTHORIZED_ACCESS', label: 'Unauthorized Access' },
  { value: 'QUOTA_INCREASE_REQUESTED', label: 'Quota Increase Requested' }
];

export const dateRangeOptions = [
  { value: 'ALL', label: 'All Time' },
  { value: 'TODAY', label: 'Today' },
  { value: 'LAST_7_DAYS', label: 'Last 7 Days' },
  { value: 'LAST_30_DAYS', label: 'Last 30 Days' },
  { value: 'CUSTOM', label: 'Custom Range' }
];
