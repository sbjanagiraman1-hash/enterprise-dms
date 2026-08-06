import React, { useState } from 'react';
import { 
  FiChevronRight, 
  FiChevronDown, 
  FiGrid, 
  FiUsers, 
  FiUser, 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiMoreVertical,
  FiHardDrive
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

export default function TreeNode({
  node,
  selectedNodeId,
  onSelectNode,
  onAddBranch,
  onEditBranch,
  onDeleteBranch,
  expandedStateMap,
  toggleExpandNode,
}) {
  const [showContextMenu, setShowContextMenu] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedStateMap[node.id] ?? true;
  const isSelected = selectedNodeId === node.id;

  const getNodeIcon = () => {
    switch (node.type?.toLowerCase()) {
      case 'headquarters':
        return <FaBuilding className="org-tree-icon hq" />;
      case 'branch':
        return <FaBuilding className="org-tree-icon branch" />;
      case 'department':
        return <FiGrid className="org-tree-icon dept" />;
      case 'team':
      default:
        return <FiUsers className="org-tree-icon team" />;
    }
  };

  const getTypeBadgeClass = () => {
    switch (node.type?.toLowerCase()) {
      case 'headquarters': return 'badge-hq';
      case 'branch': return 'badge-branch';
      case 'department': return 'badge-dept';
      case 'team': default: return 'badge-team';
    }
  };

  return (
    <li className="org-tree-node-item">
      {/* Node Row Header Card */}
      <div 
        className={`org-tree-node-row ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelectNode(node)}
      >
        {/* Connector Bullet & Expand/Collapse Toggle */}
        <div className="org-tree-toggle-box">
          {hasChildren ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpandNode(node.id);
              }}
              className="org-tree-expand-btn"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? (
                <FiChevronDown className="w-3.5 h-3.5" />
              ) : (
                <FiChevronRight className="w-3.5 h-3.5" />
              )}
            </button>
          ) : (
            <span className="org-tree-bullet-dot" />
          )}
        </div>

        {/* Node Main Icon & Name */}
        <div className="org-tree-node-info">
          {getNodeIcon()}
          
          <div className="org-tree-node-title-group">
            <span className="org-tree-node-name">{node.name}</span>
            <span className={`org-tree-type-badge ${getTypeBadgeClass()}`}>
              {node.type}
            </span>
          </div>
        </div>

        {/* Manager Info */}
        {node.manager && (
          <div className="org-tree-manager-box">
            <div className="org-tree-manager-avatar">
              {node.managerAvatar || 'M'}
            </div>
            <div className="flex flex-col">
              <span className="org-tree-manager-name">{node.manager}</span>
              <span className="org-tree-manager-role">Head / Manager</span>
            </div>
          </div>
        )}

        {/* Counts & Quota Badges */}
        <div className="org-tree-metrics-group">
          {node.employeeCount > 0 && (
            <span className="org-metric-chip" title="Employees count">
              <FiUser className="w-3 h-3 text-slate-400" />
              <span>{node.employeeCount}</span>
            </span>
          )}

          {node.allocatedStorageGB > 0 && (
            <span className="org-metric-chip storage" title="Allocated Storage Quota">
              <FiHardDrive className="w-3 h-3 text-blue-400" />
              <span>
                {node.allocatedStorageGB >= 1024 
                  ? `${(node.allocatedStorageGB / 1024).toFixed(1)} TB` 
                  : `${node.allocatedStorageGB} GB`}
              </span>
            </span>
          )}
        </div>

        {/* Context Actions Menu */}
        <div className="org-tree-actions-relative">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowContextMenu(!showContextMenu);
            }}
            className="org-tree-options-btn"
            title="Node options"
          >
            <FiMoreVertical className="w-4 h-4" />
          </button>

          {showContextMenu && (
            <div className="org-context-menu">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowContextMenu(false);
                  onAddBranch(node);
                }}
                className="org-context-item"
              >
                <FiPlus className="w-3.5 h-3.5 text-blue-400" />
                <span>Add Sub-Node</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowContextMenu(false);
                  onEditBranch(node);
                }}
                className="org-context-item"
              >
                <FiEdit className="w-3.5 h-3.5 text-amber-400" />
                <span>Edit Details</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowContextMenu(false);
                  onDeleteBranch(node);
                }}
                className="org-context-item danger"
              >
                <FiTrash2 className="w-3.5 h-3.5 text-red-400" />
                <span>Delete Node</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recursive Children Sub-Tree */}
      {hasChildren && isExpanded && (
        <ul className="org-tree-children-list">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              selectedNodeId={selectedNodeId}
              onSelectNode={onSelectNode}
              onAddBranch={onAddBranch}
              onEditBranch={onEditBranch}
              onDeleteBranch={onDeleteBranch}
              expandedStateMap={expandedStateMap}
              toggleExpandNode={toggleExpandNode}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
