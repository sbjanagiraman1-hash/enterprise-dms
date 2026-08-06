import React, { useState, useMemo } from 'react';
import OrganizationHeader from '../../components/organization/OrganizationHeader';
import SearchToolbar from '../../components/organization/SearchToolbar';
import BranchTree from '../../components/organization/BranchTree';
import DepartmentCard from '../../components/organization/DepartmentCard';
import BranchCard from '../../components/organization/BranchCard';
import StoragePanel from '../../components/organization/StoragePanel';
import QuotaModal from '../../components/organization/QuotaModal';
import { mockOrganizationTree, statisticsPlaceholderData } from '../../data/organizationTree';
import { mockGlobalStorageQuota, mockBranchQuotas } from '../../data/storageQuota';
import { 
  FiGitBranch, 
  FiGrid, 
  FiUsers, 
  FiHardDrive, 
  FiCheckCircle, 
  FiClock,
  FiShare2
} from 'react-icons/fi';
import './OrganizationStructureQuotas.css';

export default function OrganizationStructureQuotas() {
  // Tree State
  const [treeData, setTreeData] = useState(mockOrganizationTree);
  const [selectedNode, setSelectedNode] = useState(mockOrganizationTree[0] || null);
  const [expandedStateMap, setExpandedStateMap] = useState({
    'hq-01': true,
    'branch-us-east': true,
    'branch-eu-london': false,
    'branch-apac-sg': false,
  });

  // Quota & Storage State
  const [globalQuota, setGlobalQuota] = useState(mockGlobalStorageQuota);
  const [branchQuotas, setBranchQuotas] = useState(mockBranchQuotas);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [branchFilter, setBranchFilter] = useState('ALL');
  const [departmentFilter, setDepartmentFilter] = useState('ALL');
  const [storageFilter, setStorageFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('NAME_ASC');

  // Modal State
  const [isQuotaModalOpen, setIsQuotaModalOpen] = useState(false);
  const [editingQuota, setEditingQuota] = useState(null);

  // Toast Feedback State
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Tree Expansion Helpers
  const toggleExpandNode = (nodeId) => {
    setExpandedStateMap((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const handleExpandAll = () => {
    const newMap = {};
    const traverse = (list) => {
      list.forEach((node) => {
        newMap[node.id] = true;
        if (node.children) traverse(node.children);
      });
    };
    traverse(treeData);
    setExpandedStateMap(newMap);
    showNotification('Expanded all hierarchy nodes.');
  };

  const handleCollapseAll = () => {
    const newMap = {};
    const traverse = (list) => {
      list.forEach((node) => {
        newMap[node.id] = false;
        if (node.children) traverse(node.children);
      });
    };
    traverse(treeData);
    setExpandedStateMap(newMap);
    showNotification('Collapsed all hierarchy nodes.');
  };

  // Action Functions (Ready for Future API Integration)
  const handleAddBranch = (parentNode = null) => {
    const parentName = parentNode ? parentNode.name : 'Root';
    showNotification(`Opened form to create new branch under "${parentName}".`);
  };

  const handleEditBranch = (node) => {
    showNotification(`Opened editor for branch "${node.name}".`);
  };

  const handleDeleteBranch = (node) => {
    if (window.confirm(`Are you sure you want to remove node "${node.name}" from organization structure?`)) {
      showNotification(`Node "${node.name}" removed.`);
    }
  };

  const handleExportStructure = () => {
    showNotification('Exporting organization hierarchy map as PDF / JSON schema...');
  };

  // Quota Handlers
  const handleEditGlobalQuota = () => {
    setEditingQuota(null);
    setIsQuotaModalOpen(true);
  };

  const handleEditBranchQuota = (quotaItem) => {
    setEditingQuota(quotaItem);
    setIsQuotaModalOpen(true);
  };

  const handleAllocateNewQuota = () => {
    setEditingQuota(null);
    setIsQuotaModalOpen(true);
  };

  const handleSaveQuota = ({ branchId, allocatedStorageGB, notes }) => {
    // Update branch quotas state
    const updatedQuotas = branchQuotas.map((item) => {
      if (item.branchId === branchId || item.id === branchId) {
        const remaining = Math.max(0, allocatedStorageGB - item.usedStorageGB);
        const percent = Math.min(100, Math.round((item.usedStorageGB / allocatedStorageGB) * 100));
        return {
          ...item,
          allocatedStorageGB,
          remainingStorageGB: remaining,
          percentageUsed: percent,
        };
      }
      return item;
    });

    setBranchQuotas(updatedQuotas);
    showNotification('Branch storage quota updated successfully.');
  };

  // Flattened Branches list for Quota Modal dropdown
  const flatBranchesList = useMemo(() => {
    const result = [];
    const traverse = (list) => {
      list.forEach((node) => {
        if (node.type === 'headquarters' || node.type === 'branch') {
          result.push({ id: node.id, name: node.name });
        }
        if (node.children) traverse(node.children);
      });
    };
    traverse(treeData);
    return result;
  }, [treeData]);

  return (
    <div className="org-struct-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="org-toast" role="status" aria-live="polite">
          <FiCheckCircle className="org-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Page Header */}
      <OrganizationHeader
        onExport={handleExportStructure}
        onAddBranch={() => handleAddBranch(null)}
      />

      {/* 2. Organization Statistics Overview Cards */}
      <div className="org-stats-overview-grid">
        <div className="org-stat-card">
          <span className="org-stat-card-title">Total Branches</span>
          <span className="org-stat-card-val">{statisticsPlaceholderData.totalBranches}</span>
        </div>
        <div className="org-stat-card">
          <span className="org-stat-card-title">Total Departments</span>
          <span className="org-stat-card-val">{statisticsPlaceholderData.totalDepartments}</span>
        </div>
        <div className="org-stat-card">
          <span className="org-stat-card-title">Total Employees</span>
          <span className="org-stat-card-val">{statisticsPlaceholderData.totalEmployees}</span>
        </div>
        <div className="org-stat-card">
          <span className="org-stat-card-title">Allocated Storage</span>
          <span className="org-stat-card-val">{statisticsPlaceholderData.totalStorageTB}</span>
        </div>
        <div className="org-stat-card">
          <span className="org-stat-card-title">Active Branches</span>
          <span className="org-stat-card-val text-green-400">{statisticsPlaceholderData.activeBranches}</span>
        </div>
        <div className="org-stat-card">
          <span className="org-stat-card-title">Pending Requests</span>
          <span className="org-stat-card-val text-amber-400">{statisticsPlaceholderData.pendingRequests}</span>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <SearchToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        branchFilter={branchFilter}
        setBranchFilter={setBranchFilter}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        storageFilter={storageFilter}
        setStorageFilter={setStorageFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* 4. Main Two-Column View: Tree Left & Quota Panel Right */}
      <div className="org-main-content-grid">
        {/* Left Column: Organization Tree & Selected Node Details */}
        <div className="flex flex-col gap-4">
          <BranchTree
            treeData={treeData}
            selectedNodeId={selectedNode?.id}
            onSelectNode={(node) => setSelectedNode(node)}
            onAddBranch={handleAddBranch}
            onEditBranch={handleEditBranch}
            onDeleteBranch={handleDeleteBranch}
            expandedStateMap={expandedStateMap}
            toggleExpandNode={toggleExpandNode}
            onExpandAll={handleExpandAll}
            onCollapseAll={handleCollapseAll}
            onAddRootBranch={() => handleAddBranch(null)}
          />

          {/* Selected Node Summary Card */}
          {selectedNode && selectedNode.type === 'department' ? (
            <DepartmentCard node={selectedNode} />
          ) : selectedNode ? (
            <BranchCard branch={selectedNode} />
          ) : null}
        </div>

        {/* Right Column: Storage Quota Management Panel */}
        <StoragePanel
          globalQuota={globalQuota}
          branchQuotas={branchQuotas}
          onEditGlobalQuota={handleEditGlobalQuota}
          onEditBranchQuota={handleEditBranchQuota}
          onAllocateNewQuota={handleAllocateNewQuota}
        />
      </div>

      {/* Quota Modal */}
      <QuotaModal
        isOpen={isQuotaModalOpen}
        onClose={() => setIsQuotaModalOpen(false)}
        branchesList={flatBranchesList}
        editingQuota={editingQuota}
        onSaveQuota={handleSaveQuota}
      />
    </div>
  );
}
