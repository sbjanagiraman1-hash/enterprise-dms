import React from 'react';
import { 
  FiMaximize2, 
  FiMinimize2, 
  FiPlus, 
  FiFolderPlus 
} from 'react-icons/fi';

export default function TreeToolbar({ onExpandAll, onCollapseAll, onAddRootBranch }) {
  return (
    <div className="org-tree-toolbar">
      <div className="flex items-center gap-2">
        <span className="org-tree-toolbar-title">Hierarchical Organization Map</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onExpandAll}
          className="org-tree-action-btn"
          title="Expand all tree branches"
        >
          <FiMaximize2 className="w-3.5 h-3.5" />
          <span>Expand All</span>
        </button>

        <button
          type="button"
          onClick={onCollapseAll}
          className="org-tree-action-btn"
          title="Collapse all tree branches"
        >
          <FiMinimize2 className="w-3.5 h-3.5" />
          <span>Collapse All</span>
        </button>

        <button
          type="button"
          onClick={onAddRootBranch}
          className="org-tree-action-btn primary"
          title="Add new branch node"
        >
          <FiFolderPlus className="w-3.5 h-3.5" />
          <span>Add Node</span>
        </button>
      </div>
    </div>
  );
}
