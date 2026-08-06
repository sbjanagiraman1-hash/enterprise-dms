import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination({
  currentPage,
  totalPages,
  totalRecords,
  pageSize,
  onPageChange,
}) {
  if (totalRecords === 0) return null;

  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="audit-pagination-container">
      {/* Total records info */}
      <div className="audit-pagination-info">
        Showing <span className="font-semibold text-foreground">{startRecord}</span> to{' '}
        <span className="font-semibold text-foreground">{endRecord}</span> of{' '}
        <span className="font-semibold text-foreground">{totalRecords}</span> entries
      </div>

      {/* Pagination Controls */}
      <div className="audit-pagination-controls">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="audit-page-btn arrow"
          title="Previous Page"
        >
          <FiChevronLeft className="w-4 h-4" />
          <span className="sr-only">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="audit-page-numbers">
          {pageNumbers.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`audit-page-btn ${page === currentPage ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="audit-page-btn arrow"
          title="Next Page"
        >
          <FiChevronRight className="w-4 h-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}
