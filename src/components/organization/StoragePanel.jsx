import React from 'react';
import GlobalQuotaCard from './GlobalQuotaCard';
import BranchQuotaList from './BranchQuotaList';

export default function StoragePanel({
  globalQuota,
  branchQuotas,
  onEditGlobalQuota,
  onEditBranchQuota,
  onAllocateNewQuota,
}) {
  return (
    <div className="org-storage-panel-container">
      {/* 1. Global Quota Card */}
      <GlobalQuotaCard
        globalQuota={globalQuota}
        onEditGlobalQuota={onEditGlobalQuota}
      />

      {/* 2. Branch Quota Cards List */}
      <BranchQuotaList
        branchQuotas={branchQuotas}
        onEditQuota={onEditBranchQuota}
        onAllocateNewQuota={onAllocateNewQuota}
      />
    </div>
  );
}
