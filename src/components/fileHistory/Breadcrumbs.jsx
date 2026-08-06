import React from 'react';
import { FiHome, FiChevronRight, FiFolder } from 'react-icons/fi';

export default function Breadcrumbs({ currentPath = ['Root', 'Corporate Repository', 'Q3 Finance'] }) {
  return (
    <nav className="dms-breadcrumbs-container" aria-label="Breadcrumb navigation">
      <ol className="dms-breadcrumbs-list">
        <li className="dms-breadcrumbs-item">
          <a href="#root" onClick={(e) => e.preventDefault()} className="dms-breadcrumb-link">
            <FiHome className="dms-breadcrumb-icon" />
            <span>DMS Home</span>
          </a>
        </li>

        {currentPath.map((folder, index) => {
          const isLast = index === currentPath.length - 1;
          return (
            <React.Fragment key={folder}>
              <li className="dms-breadcrumbs-separator">
                <FiChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="dms-breadcrumbs-item">
                {isLast ? (
                  <span className="dms-breadcrumb-current">
                    <FiFolder className="dms-breadcrumb-icon" />
                    <span>{folder}</span>
                  </span>
                ) : (
                  <a href={`#${folder}`} onClick={(e) => e.preventDefault()} className="dms-breadcrumb-link">
                    <span>{folder}</span>
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
