import React, { useState } from 'react';
import './AdvancedSearchOCRDiscovery.css';

/**
 * Mock Dataset for Search Results
 */
const mockSearchResults = [
  {
    id: 'doc-1',
    name: 'Q3_Financial_Statement_2026.pdf',
    ext: 'pdf',
    type: 'PDF Document',
    department: 'Finance',
    owner: 'Sarah Jenkins',
    modifiedDate: 'Aug 03, 2026',
    size: '4.2 MB',
    ocrStatus: 'OCR Verified',
    aiScore: '98%',
    snippet: 'extracted via OCR: Tax compliance verified for Q3 Financial Audit with zero discrepancies found in ledger balances.',
    preview: 'Official financial statement for Q3 2026 including balance sheet, revenue breakdown, and tax assessment.',
    ocrText: '[OCR Confidence: 99.4%]\n-----------------------------\nDOCUMENT TITLE: Q3 FINANCIAL REPORT\nDATE: 2026-08-01\nTOTAL REVENUE: $14,250,000.00\nTAX LIABILITY: $2,850,000.00\nSTATUS: AUDITED & SIGNED',
    aiSummary: 'Comprehensive financial report showing 18% QoQ revenue growth. Tax compliance verified with no anomalies.',
    version: 'v2.4',
    security: 'Level 3 - Restricted'
  },
  {
    id: 'doc-2',
    name: 'Vendor_Agreement_Global_Supply.docx',
    ext: 'docx',
    type: 'Word Document',
    department: 'Legal',
    owner: 'Alex Rivera',
    modifiedDate: 'Jul 28, 2026',
    size: '1.8 MB',
    ocrStatus: 'OCR Processed',
    aiScore: '94%',
    snippet: 'OCR detected clause: Master Service Agreement section 14.2 regarding binding arbitration and SLA guarantees.',
    preview: 'Master service agreement governing logistics, SLA targets, and liability terms between Global Corp and partners.',
    ocrText: '[OCR Confidence: 97.8%]\n-----------------------------\nSECTION 14.2: INDEMNIFICATION\nPROVIDER AGREES TO MAINTAIN 99.9% UPTIME.\nPENALTY RATE: 2% PER HOUR OF UNPLANNED OUTAGE.',
    aiSummary: 'Legal contract detailing logistics SLAs, liability caps ($5M), and dispute resolution protocols.',
    version: 'v1.1',
    security: 'Level 2 - Confidential'
  },
  {
    id: 'doc-3',
    name: 'Asset_Inventory_Audit_2026.xlsx',
    ext: 'xlsx',
    type: 'Excel Sheet',
    department: 'Operations',
    owner: 'Michael Chen',
    modifiedDate: 'Jul 15, 2026',
    size: '8.4 MB',
    ocrStatus: 'OCR Verified',
    aiScore: '91%',
    snippet: 'OCR spreadsheet text match: Item barcode #8849-012 checked in at Warehouse Node B4 during inventory audit.',
    preview: 'Complete inventory ledger tracking hardware assets, servers, network switches, and depreciation metrics.',
    ocrText: '[OCR Confidence: 98.2%]\n-----------------------------\nLOCATION: NODE B4 DALLAS DC\nTOTAL ASSETS: 1,420 UNITS\nDEPRECIATION YTD: $142,000',
    aiSummary: 'Data sheet inventory audit covering 1,420 hardware assets with updated location tags.',
    version: 'v3.0',
    security: 'Level 1 - Internal'
  },
  {
    id: 'doc-4',
    name: 'Scanned_Receipt_Invoice_8829.png',
    ext: 'img',
    type: 'PNG Image OCR',
    department: 'Accounting',
    owner: 'Emily Watson',
    modifiedDate: 'Jun 30, 2026',
    size: '640 KB',
    ocrStatus: 'Handwritten OCR',
    aiScore: '89%',
    snippet: 'Handwritten OCR extracted text: "Approved by E. Watson - $12,450.00 for Server Room Air Conditioning Maintenance".',
    preview: 'Scanned paper receipt with handwritten manager approval signature and itemized expense lines.',
    ocrText: '[OCR Confidence: 94.1% - Handwritten Model]\n-----------------------------\nVENDOR: TEX-COOL HVAC SERVICES\nINVOICE #: 8829\nAMOUNT: $12,450.00\nAPPROVED BY: E. WATSON (HANDWRITTEN)',
    aiSummary: 'Handwritten scanned receipt processed via specialized handwriting OCR model.',
    version: 'v1.0',
    security: 'Level 2 - Internal'
  }
];

export default function AdvancedSearchOCRDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(mockSearchResults[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [sortBy, setSortBy] = useState('relevance');

  // Filter States
  const [searchScope, setSearchScope] = useState({
    allDocs: true,
    folderSearch: false,
    fileName: true,
    metadata: true,
    ocrText: true,
    versionHistory: false
  });

  const [docTypes, setDocTypes] = useState({
    pdf: true,
    word: true,
    excel: true,
    powerpoint: false,
    images: true,
    videos: false,
    cad: false
  });

  const [ocrFilters, setOcrFilters] = useState({
    ocrEnabled: true,
    imageToText: true,
    pdfOcr: true,
    multiLang: false,
    handwritten: true,
    barcode: true,
    qrCode: true
  });

  const [aiSettings, setAiSettings] = useState({
    semanticSearch: true,
    keywordSuggestions: true,
    autoComplete: true,
    similarDocs: true,
    relatedDocs: true,
    smartRanking: true,
    naturalLanguage: true
  });

  const handleChipClick = (term) => {
    setSearchTerm(term);
  };

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setIsDrawerOpen(true);
  };

  return (
    <div className="ocr-page-container">
      {/* Page Header */}
      <header className="ocr-header">
        <h1 className="ocr-title">Advanced Search &amp; OCR Discovery</h1>
        <p className="ocr-subtitle">AI Powered Enterprise Document Search</p>
      </header>

      {/* Top Search Bar Card */}
      <section className="ocr-search-section">
        <div className="ocr-search-input-wrapper">
          <span className="material-symbols-outlined ocr-search-icon">search</span>
          <input
            type="text"
            className="ocr-search-input"
            placeholder="Search documents, folders, metadata or OCR text..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="ocr-input-action-btn" title="Voice Search">
            <span className="material-symbols-outlined">mic</span>
          </button>
          <button type="button" className="ocr-input-action-btn" title="Filter Options">
            <span className="material-symbols-outlined">tune</span>
          </button>
          <button type="button" className="ocr-primary-btn">
            <span className="material-symbols-outlined">search</span>
            Search
          </button>
        </div>

        {/* Search Chips */}
        <div className="ocr-chips-wrapper">
          <div className="ocr-chips-group">
            <span className="ocr-chip-label">Recent:</span>
            <button type="button" className="ocr-chip" onClick={() => handleChipClick('Financial Audit 2026')}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
              Financial Audit 2026
            </button>
            <button type="button" className="ocr-chip" onClick={() => handleChipClick('Invoice OCR Text')}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
              Invoice OCR Text
            </button>
            <button type="button" className="ocr-chip" onClick={() => handleChipClick('Q3 Tax Report')}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
              Q3 Tax Report
            </button>
          </div>

          <div className="ocr-chips-group">
            <span className="ocr-chip-label">Saved:</span>
            <button type="button" className="ocr-chip saved" onClick={() => handleChipClick('Confidential PDFs')}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span>
              Confidential PDFs
            </button>
            <button type="button" className="ocr-chip saved" onClick={() => handleChipClick('High Priority Taxes')}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>star</span>
              High Priority Taxes
            </button>
          </div>
        </div>
      </section>

      {/* Quick Action Buttons Toolbar */}
      <section className="ocr-quick-actions">
        <button type="button" className="ocr-secondary-btn">
          <span className="material-symbols-outlined">document_scanner</span>
          Start OCR Scan
        </button>

        <button type="button" className="ocr-secondary-btn">
          <span className="material-symbols-outlined">sync</span>
          Reindex Documents
        </button>

        <button type="button" className="ocr-secondary-btn">
          <span className="material-symbols-outlined">download</span>
          Export Results
        </button>

        <button type="button" className="ocr-secondary-btn">
          <span className="material-symbols-outlined">bookmark</span>
          Save Search
        </button>

        <button type="button" className="ocr-secondary-btn">
          <span className="material-symbols-outlined">filter_alt_off</span>
          Clear Filters
        </button>

        <button type="button" className="ocr-secondary-btn ai">
          <span className="material-symbols-outlined">auto_awesome</span>
          Generate AI Summary
        </button>
      </section>

      {/* Two Column Layout: Left Filter Panel + Right Content Area */}
      <div className="ocr-main-layout">
        {/* Left Filter Panel */}
        <aside className="ocr-filter-panel">
          {/* Section 1: Search Scope */}
          <div className="ocr-filter-section">
            <h3 className="ocr-filter-title">
              <span className="material-symbols-outlined">radar</span>
              Search Scope
            </h3>
            <div className="ocr-checkbox-group">
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.allDocs}
                  onChange={(e) => setSearchScope({ ...searchScope, allDocs: e.target.checked })}
                />
                All Documents
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.folderSearch}
                  onChange={(e) => setSearchScope({ ...searchScope, folderSearch: e.target.checked })}
                />
                Folder Search
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.fileName}
                  onChange={(e) => setSearchScope({ ...searchScope, fileName: e.target.checked })}
                />
                File Name
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.metadata}
                  onChange={(e) => setSearchScope({ ...searchScope, metadata: e.target.checked })}
                />
                Metadata
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.ocrText}
                  onChange={(e) => setSearchScope({ ...searchScope, ocrText: e.target.checked })}
                />
                OCR Text
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={searchScope.versionHistory}
                  onChange={(e) => setSearchScope({ ...searchScope, versionHistory: e.target.checked })}
                />
                Version History
              </label>
            </div>
          </div>

          {/* Section 2: Document Type */}
          <div className="ocr-filter-section">
            <h3 className="ocr-filter-title">
              <span className="material-symbols-outlined">folder_zip</span>
              Document Type
            </h3>
            <div className="ocr-checkbox-group">
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.pdf}
                  onChange={(e) => setDocTypes({ ...docTypes, pdf: e.target.checked })}
                />
                PDF
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.word}
                  onChange={(e) => setDocTypes({ ...docTypes, word: e.target.checked })}
                />
                Word
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.excel}
                  onChange={(e) => setDocTypes({ ...docTypes, excel: e.target.checked })}
                />
                Excel
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.powerpoint}
                  onChange={(e) => setDocTypes({ ...docTypes, powerpoint: e.target.checked })}
                />
                PowerPoint
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.images}
                  onChange={(e) => setDocTypes({ ...docTypes, images: e.target.checked })}
                />
                Images
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.videos}
                  onChange={(e) => setDocTypes({ ...docTypes, videos: e.target.checked })}
                />
                Videos
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={docTypes.cad}
                  onChange={(e) => setDocTypes({ ...docTypes, cad: e.target.checked })}
                />
                CAD Files
              </label>
            </div>
          </div>

          {/* Section 3: OCR Discovery */}
          <div className="ocr-filter-section">
            <h3 className="ocr-filter-title">
              <span className="material-symbols-outlined">document_scanner</span>
              OCR Discovery
            </h3>
            <div className="ocr-checkbox-group">
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.ocrEnabled}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, ocrEnabled: e.target.checked })}
                />
                OCR Enabled
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.imageToText}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, imageToText: e.target.checked })}
                />
                Image to Text
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.pdfOcr}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, pdfOcr: e.target.checked })}
                />
                PDF OCR
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.multiLang}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, multiLang: e.target.checked })}
                />
                Multi-language OCR
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.handwritten}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, handwritten: e.target.checked })}
                />
                Handwritten OCR
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.barcode}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, barcode: e.target.checked })}
                />
                Barcode Detection
              </label>
              <label className="ocr-checkbox-label">
                <input
                  type="checkbox"
                  checked={ocrFilters.qrCode}
                  onChange={(e) => setOcrFilters({ ...ocrFilters, qrCode: e.target.checked })}
                />
                QR Detection
              </label>
            </div>
          </div>

          {/* Section 4: Advanced Filters */}
          <div className="ocr-filter-section">
            <h3 className="ocr-filter-title">
              <span className="material-symbols-outlined">filter_list</span>
              Advanced Filters
            </h3>
            <div className="ocr-checkbox-group">
              <div className="dms-info-row">
                <span className="dms-info-label">Department</span>
                <span className="dms-info-value">Finance, Legal, Ops</span>
              </div>
              <div className="dms-info-row">
                <span className="dms-info-label">Security Level</span>
                <span className="dms-info-value">Level 2+ Secret</span>
              </div>
              <div className="dms-info-row">
                <span className="dms-info-label">File Size</span>
                <span className="dms-info-value">&lt; 10 MB</span>
              </div>
            </div>
          </div>

          {/* Section 5: AI Search */}
          <div className="ocr-filter-section">
            <h3 className="ocr-filter-title">
              <span className="material-symbols-outlined">psychology</span>
              AI Search
            </h3>
            <div className="ocr-checkbox-group">
              <div className="ocr-switch-item">
                <span>Semantic Search</span>
                <input
                  type="checkbox"
                  checked={aiSettings.semanticSearch}
                  onChange={(e) => setAiSettings({ ...aiSettings, semanticSearch: e.target.checked })}
                />
              </div>
              <div className="ocr-switch-item">
                <span>Keyword Suggestions</span>
                <input
                  type="checkbox"
                  checked={aiSettings.keywordSuggestions}
                  onChange={(e) => setAiSettings({ ...aiSettings, keywordSuggestions: e.target.checked })}
                />
              </div>
              <div className="ocr-switch-item">
                <span>Smart Ranking</span>
                <input
                  type="checkbox"
                  checked={aiSettings.smartRanking}
                  onChange={(e) => setAiSettings({ ...aiSettings, smartRanking: e.target.checked })}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area: Results & Toolbar */}
        <main className="ocr-content-area">
          {/* Top Result Toolbar */}
          <div className="ocr-results-toolbar">
            <div className="ocr-results-meta">
              <span className="ocr-results-count">Found 148 documents</span>
              <span className="ocr-results-time">(0.12s)</span>
              <span className="ocr-filter-indicator">3 Filters Active</span>
            </div>

            <div className="ocr-toolbar-controls">
              <select
                className="ocr-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
                <option value="name">Sort by: A-Z</option>
              </select>

              <div className="ocr-view-toggle">
                <button
                  type="button"
                  className={`ocr-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <span className="material-symbols-outlined">format_list_bulleted</span>
                </button>
                <button
                  type="button"
                  className={`ocr-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Grid / List */}
          <div className="ocr-results-grid">
            {mockSearchResults.map((doc) => (
              <div
                key={doc.id}
                className={`ocr-result-card ${selectedDoc?.id === doc.id ? 'selected' : ''}`}
                onClick={() => handleDocClick(doc)}
              >
                <div className="ocr-card-top">
                  <div className="ocr-doc-header-left">
                    <div className={`ocr-doc-icon-wrapper ${doc.ext}`}>
                      {doc.ext.toUpperCase()}
                    </div>
                    <div className="ocr-doc-title-box">
                      <h4 className="ocr-doc-title">{doc.name}</h4>
                      <div className="ocr-doc-meta-row">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>Dept: {doc.department}</span>
                        <span>•</span>
                        <span>Owner: {doc.owner}</span>
                        <span>•</span>
                        <span>Modified: {doc.modifiedDate}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ocr-card-badges">
                    <span className="ocr-badge-green">
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
                      {doc.ocrStatus}
                    </span>
                    <span className="ocr-badge-blue">AI Match {doc.aiScore}</span>
                  </div>
                </div>

                {/* Highlighted Search Snippet */}
                <div className="ocr-snippet-box">
                  <strong>OCR Match:</strong>{' '}
                  <span dangerouslySetInnerHTML={{
                    __html: doc.snippet.replace(/OCR/g, '<mark class="ocr-snippet-highlight">OCR</mark>')
                  }} />
                </div>

                {/* Action Buttons */}
                <div className="ocr-card-actions">
                  <span style={{ fontSize: '11.5px', color: '#64748b' }}>{doc.preview}</span>
                  <div className="ocr-card-btn-group">
                    <button type="button" className="ocr-action-btn-sm">
                      <span className="material-symbols-outlined">download</span>
                      Download
                    </button>
                    <button type="button" className="ocr-action-btn-sm">
                      <span className="material-symbols-outlined">visibility</span>
                      Preview
                    </button>
                    <button type="button" className="ocr-action-btn-sm">
                      <span className="material-symbols-outlined">share</span>
                      Share
                    </button>
                    <button
                      type="button"
                      className="ocr-action-btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDocClick(doc);
                      }}
                    >
                      <span className="material-symbols-outlined">info</span>
                      Properties
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination */}
          <footer className="ocr-pagination">
            <button type="button" className="ocr-page-btn">
              <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: '16px' }}>
                navigate_before
              </span>
              Previous
            </button>
            <button type="button" className="ocr-page-btn active">1</button>
            <button type="button" className="ocr-page-btn">2</button>
            <button type="button" className="ocr-page-btn">3</button>
            <button type="button" className="ocr-page-btn">
              Next
              <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: '16px' }}>
                navigate_next
              </span>
            </button>
          </footer>
        </main>
      </div>

      {/* Right Properties Side Drawer */}
      {isDrawerOpen && selectedDoc && (
        <div className="ocr-drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="ocr-drawer-container" onClick={(e) => e.stopPropagation()}>
            <div className="ocr-drawer-header">
              <h3 className="ocr-drawer-title">Document Properties</h3>
              <button
                type="button"
                className="ocr-drawer-close"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="ocr-drawer-body">
              <div className="ocr-drawer-section">
                <h4 className="ocr-drawer-sec-title">Document Information</h4>
                <div className="dms-info-row">
                  <span className="dms-info-label">Name</span>
                  <span className="dms-info-value">{selectedDoc.name}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Type</span>
                  <span className="dms-info-value">{selectedDoc.type}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Owner</span>
                  <span className="dms-info-value">{selectedDoc.owner}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Security</span>
                  <span className="dms-info-value">{selectedDoc.security}</span>
                </div>
              </div>

              <div className="ocr-drawer-section">
                <h4 className="ocr-drawer-sec-title">OCR Extracted Text</h4>
                <div className="ocr-code-box">
                  {selectedDoc.ocrText}
                </div>
              </div>

              <div className="ocr-drawer-section">
                <h4 className="ocr-drawer-sec-title">AI Summary</h4>
                <p style={{ fontSize: '12.5px', color: '#334155', margin: 0, lineHeight: 1.45 }}>
                  {selectedDoc.aiSummary}
                </p>
              </div>

              <div className="ocr-drawer-section">
                <h4 className="ocr-drawer-sec-title">Activity Timeline</h4>
                <div style={{ fontSize: '11.5px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>• Aug 03, 2026: OCR Scan Verified by System</div>
                  <div>• Jul 28, 2026: Metadata updated by {selectedDoc.owner}</div>
                  <div>• Jun 15, 2026: Version {selectedDoc.version} uploaded</div>
                </div>
              </div>
            </div>

            <div className="ocr-drawer-footer">
              <button type="button" className="ocr-primary-btn" style={{ flex: 1, justifyContent: 'center' }}>
                <span className="material-symbols-outlined">document_scanner</span>
                Re-Scan OCR
              </button>
              <button type="button" className="ocr-secondary-btn" onClick={() => setIsDrawerOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
