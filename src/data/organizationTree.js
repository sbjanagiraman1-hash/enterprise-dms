export const mockOrganizationTree = [
  {
    id: 'hq-01',
    name: 'Global Headquarters (New York)',
    type: 'headquarters',
    manager: 'Jonathan Vance',
    managerEmail: 'jonathan.v@acme.corp',
    managerAvatar: 'JV',
    employeeCount: 450,
    allocatedStorageGB: 5120, // 5 TB
    usedStorageGB: 2850,
    status: 'Active',
    children: [
      {
        id: 'branch-us-east',
        name: 'Americas East Regional Hub',
        type: 'branch',
        manager: 'Sarah Miller',
        managerEmail: 'sarah.m@acme.corp',
        managerAvatar: 'SM',
        employeeCount: 180,
        allocatedStorageGB: 2048,
        usedStorageGB: 1200,
        status: 'Active',
        children: [
          {
            id: 'dept-fin-ny',
            name: 'Corporate Finance & Accounting',
            type: 'department',
            departmentType: 'Financial Operations',
            manager: 'Elena Rostova',
            managerEmail: 'elena.r@acme.corp',
            managerAvatar: 'ER',
            employeeCount: 45,
            allocatedStorageGB: 800,
            usedStorageGB: 520,
            status: 'Active',
            children: [
              {
                id: 'team-audit',
                name: 'Financial Audit Team',
                type: 'team',
                manager: 'Alex Johnson',
                managerAvatar: 'AJ',
                employeeCount: 12,
                allocatedStorageGB: 300,
                usedStorageGB: 210,
                status: 'Active',
                children: []
              },
              {
                id: 'team-payroll',
                name: 'Payroll Operations',
                type: 'team',
                manager: 'Michael Chang',
                managerAvatar: 'MC',
                employeeCount: 8,
                allocatedStorageGB: 150,
                usedStorageGB: 95,
                status: 'Active',
                children: []
              }
            ]
          },
          {
            id: 'dept-eng-ny',
            name: 'Core Software Engineering',
            type: 'department',
            departmentType: 'Technology & R&D',
            manager: 'David Chen',
            managerEmail: 'david.c@acme.corp',
            managerAvatar: 'DC',
            employeeCount: 110,
            allocatedStorageGB: 1000,
            usedStorageGB: 610,
            status: 'Active',
            children: [
              {
                id: 'team-cloud-infra',
                name: 'Cloud Infrastructure & DevOps',
                type: 'team',
                manager: 'Robert Taylor',
                managerAvatar: 'RT',
                employeeCount: 25,
                allocatedStorageGB: 500,
                usedStorageGB: 380,
                status: 'Active',
                children: []
              }
            ]
          }
        ]
      },

      {
        id: 'branch-eu-london',
        name: 'EMEA Regional Hub (London)',
        type: 'branch',
        manager: 'Alistair Finch',
        managerEmail: 'alistair.f@acme.corp',
        managerAvatar: 'AF',
        employeeCount: 150,
        allocatedStorageGB: 1536,
        usedStorageGB: 980,
        status: 'Active',
        children: [
          {
            id: 'dept-sec-london',
            name: 'Global Security & Compliance',
            type: 'department',
            departmentType: 'SecOps & Legal',
            manager: 'Jessica Wu',
            managerEmail: 'jessica.w@acme.corp',
            managerAvatar: 'JW',
            employeeCount: 35,
            allocatedStorageGB: 600,
            usedStorageGB: 410,
            status: 'Active',
            children: []
          }
        ]
      },

      {
        id: 'branch-apac-sg',
        name: 'APAC Operations Center (Singapore)',
        type: 'branch',
        manager: 'Mei-Ling Tan',
        managerEmail: 'meiling.t@acme.corp',
        managerAvatar: 'MT',
        employeeCount: 120,
        allocatedStorageGB: 1024,
        usedStorageGB: 450,
        status: 'Active',
        children: [
          {
            id: 'dept-ops-sg',
            name: 'Asia Customer Success',
            type: 'department',
            departmentType: 'Operations',
            manager: 'Rajesh Kumar',
            managerEmail: 'rajesh.k@acme.corp',
            managerAvatar: 'RK',
            employeeCount: 50,
            allocatedStorageGB: 400,
            usedStorageGB: 190,
            status: 'Active',
            children: []
          }
        ]
      }
    ]
  }
];

export const statisticsPlaceholderData = {
  totalBranches: 4,
  totalDepartments: 8,
  totalEmployees: 720,
  totalStorageTB: '10.0 TB',
  activeBranches: 4,
  pendingRequests: 2
};
