export const mockGlobalStorageQuota = {
  totalCapacityGB: 10240, // 10.0 TB
  usedStorageGB: 5280, // 5.28 TB
  remainingStorageGB: 4960,
  unit: 'TB',
  percentageUsed: 52
};

export const mockBranchQuotas = [
  {
    id: 'bq-01',
    branchId: 'hq-01',
    branchName: 'Global Headquarters (New York)',
    allocatedStorageGB: 5120, // 5.0 TB
    usedStorageGB: 2850,
    remainingStorageGB: 2270,
    percentageUsed: 56,
    status: 'Normal', // 'Normal' | 'Warning' | 'Critical'
    manager: 'Jonathan Vance'
  },
  {
    id: 'bq-02',
    branchId: 'branch-us-east',
    branchName: 'Americas East Regional Hub',
    allocatedStorageGB: 2048, // 2.0 TB
    usedStorageGB: 1200,
    remainingStorageGB: 848,
    percentageUsed: 59,
    status: 'Normal',
    manager: 'Sarah Miller'
  },
  {
    id: 'bq-03',
    branchId: 'branch-eu-london',
    branchName: 'EMEA Regional Hub (London)',
    allocatedStorageGB: 1536, // 1.5 TB
    usedStorageGB: 980,
    remainingStorageGB: 556,
    percentageUsed: 64,
    status: 'Warning',
    manager: 'Alistair Finch'
  },
  {
    id: 'bq-04',
    branchId: 'branch-apac-sg',
    branchName: 'APAC Operations Center (Singapore)',
    allocatedStorageGB: 1024, // 1.0 TB
    usedStorageGB: 450,
    remainingStorageGB: 574,
    percentageUsed: 44,
    status: 'Normal',
    manager: 'Mei-Ling Tan'
  }
];
