import React from 'react';
import TreeToolbar from './TreeToolbar';
import TreeNode from './TreeNode';

export default function BranchTree({
  treeData = [],
  selectedNodeId,
  onSelectNode,
  onAddBranch,
  onEditBranch,
  onDeleteBranch,
  expandedStateMap,
  toggleExpandNode,
  onExpandAll,
  onCollapseAll,
  onAddRootBranch,
}) {
  return (
    <div className="org-branch-tree-card">
      <TreeToolbar
        onExpandAll={onExpandAll}
        onCollapseAll={onCollapseAll}
        onAddRootBranch={onAddRootBranch}
      />

      <div className="org-tree-content-container">
        <ul className="org-tree-root-list">
          {treeData.map((node) => (
            <TreeNode
              key={node.id}
              node={node}
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
      </div>
    </div>
  );
}
