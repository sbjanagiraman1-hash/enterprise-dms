import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './EnterpriseReportsInsights.css';

/**
 * Reusable Chart Datasets
 */
const uploadTrendData = [
  { month: 'Jan', Uploads: 4200, Downloads: 18400 },
  { month: 'Feb', Uploads: 5100, Downloads: 22100 },
  { month: 'Mar', Uploads: 6800, Downloads: 27500 },
  { month: 'Apr', Uploads: 7400, Downloads: 31200 },
  { month: 'May', Uploads: 8900, Downloads: 36400 },
  { month: 'Jun', Uploads: 9600, Downloads: 41800 },
  { month: 'Jul', Uploads: 11200, Downloads: 48900 }
];

const storageGrowthData = [
  { month: 'Jan', Usage: 420, Capacity: 1000 },
  { month: 'Feb', Usage: 490, Capacity: 1000 },
  { month: 'Mar', Usage: 540, Capacity: 1000 },
  { month: 'Apr', Usage: 610, Capacity: 1000 },
  { month: 'May', Usage: 680, Capacity: 1000 },
  { month: 'Jun', Usage: 740, Capacity: 1024 },
  { month: 'Jul', Usage: 790, Capacity: 1024 }
];

const docTypesData = [
  { name: 'PDF', value: 45, color: '#2563eb' },
  { name: 'Word', value: 22, color: '#3b82f6' },
  { name: 'Excel', value: 15, color: '#10b981' },
  { name: 'Images', value: 10, color: '#8b5cf6' },
  { name: 'Videos', value: 5, color: '#f59e0b' },
  { name: 'CAD Files', value: 3, color: '#ef4444' }
];

const deptActivityData = [
  { dept: 'HR', Documents: 1420 },
  { dept: 'Finance', Documents: 3890 },
  { dept: 'Sales', Documents: 2450 },
  { dept: 'Legal', Documents: 1980 },
  { dept: 'Eng', Documents: 4120 },
  { dept: 'Ops', Documents: 2840 }
];

const userActivityData = [
  { day: 'Mon', DAU: 1420, WAU: 2400, MAU: 2840 },
  { day: 'Tue', DAU: 1680, WAU: 2510, MAU: 2840 },
  { day: 'Wed', DAU: 1890, WAU: 2640, MAU: 2840 },
  { day: 'Thu', DAU: 1750, WAU: 2590, MAU: 2840 },
  { day: 'Fri', DAU: 1620, WAU: 2530, MAU: 2840 },
  { day: 'Sat', DAU: 840, WAU: 2210, MAU: 2840 },
  { day: 'Sun', DAU: 720, WAU: 2180, MAU: 2840 }
];

const workflowData = [
  { dept: 'HR', Completed: 120, Pending: 15, Rejected: 4, InProgress: 22 },
  { dept: 'Finance', Completed: 340, Pending: 42, Rejected: 12, InProgress: 55 },
  { dept: 'Sales', Completed: 210, Pending: 28, Rejected: 8, InProgress: 31 },
  { dept: 'Legal', Completed: 180, Pending: 35, Rejected: 5, InProgress: 40 },
  { dept: 'Eng', Completed: 290, Pending: 18, Rejected: 2, InProgress: 26 }
];

const mockRecentReports = [
  { id: 'rep-1', name: 'Q3_Compliance_Audit_Report.pdf', user: 'Sarah Jenkins', dept: 'Finance', date: 'Aug 03, 2026', type: 'Audit Log', status: 'Completed' },
  { id: 'rep-2', name: 'Monthly_Storage_Analytics_Jul2026.xlsx', user: 'Alex Rivera', dept: 'IT Operations', date: 'Aug 01, 2026', type: 'Storage', status: 'Completed' },
  { id: 'rep-3', name: 'User_Access_Security_Assessment.pdf', user: 'Michael Chen', dept: 'Security', date: 'Jul 28, 2026', type: 'Security', status: 'Completed' },
  { id: 'rep-4', name: 'Retention_Policy_Verification_2026.docx', user: 'Emily Watson', dept: 'Legal', date: 'Jul 20, 2026', type: 'Compliance', status: 'Completed' }
];

export default function EnterpriseReportsInsights() {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReport, setSelectedReport] = useState(mockRecentReports[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (rep) => {
    setSelectedReport(rep);
    setIsDrawerOpen(true);
  };

  return (
    <div className="eri-page-container">
      {/* Page Header */}
      <header className="eri-header">
        <h1 className="eri-title">Enterprise Reports &amp; Insights</h1>
        <p className="eri-subtitle">Analyze document usage, storage growth, user activity, and business intelligence.</p>
      </header>

      {/* Top Action Bar & Filters */}
      <section className="eri-action-bar">
        <div className="eri-search-filters">
          <div className="eri-search-box">
            <span className="material-symbols-outlined" style={{ color: '#64748b' }}>search</span>
            <input
              type="text"
              className="eri-search-input"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="eri-select-filter"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="Last 30 Days">Date: Last 30 Days</option>
            <option value="Q3 2026">Date: Q3 2026</option>
            <option value="YTD">Date: Year To Date (YTD)</option>
          </select>

          <select
            className="eri-select-filter"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="All">Dept: All Departments</option>
            <option value="Finance">Dept: Finance</option>
            <option value="Legal">Dept: Legal</option>
            <option value="HR">Dept: HR</option>
            <option value="Engineering">Dept: Engineering</option>
          </select>
        </div>

        <div className="eri-btn-group">
          <button type="button" className="eri-secondary-btn">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Export PDF
          </button>
          <button type="button" className="eri-secondary-btn">
            <span className="material-symbols-outlined">table_view</span>
            Export Excel
          </button>
          <button type="button" className="eri-secondary-btn">
            <span className="material-symbols-outlined">event</span>
            Schedule
          </button>
          <button type="button" className="eri-primary-btn">
            <span className="material-symbols-outlined">analytics</span>
            Generate Report
          </button>
        </div>
      </section>

      {/* 6 Summary KPI Cards */}
      <section className="eri-kpi-grid">
        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">Total Documents</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">description</span>
            </div>
          </div>
          <span className="eri-kpi-value">1.48M</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>trending_up</span>
            +12.4% vs last month
          </span>
        </div>

        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">Total Downloads</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">download</span>
            </div>
          </div>
          <span className="eri-kpi-value">342.8K</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>trending_up</span>
            +8.2% vs last month
          </span>
        </div>

        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">Total Uploads</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">cloud_upload</span>
            </div>
          </div>
          <span className="eri-kpi-value">84.2K</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>trending_up</span>
            +14.1% vs last month
          </span>
        </div>

        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">Storage Growth</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">hard_drive</span>
            </div>
          </div>
          <span className="eri-kpi-value">1.24 TB</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>trending_up</span>
            +5.6% vs last month
          </span>
        </div>

        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">Active Users</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          <span className="eri-kpi-value">2,840</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>trending_up</span>
            +18.9% active today
          </span>
        </div>

        <div className="eri-kpi-card">
          <div className="eri-kpi-top">
            <span className="eri-kpi-title">System Health</span>
            <div className="eri-kpi-icon">
              <span className="material-symbols-outlined">health_metrics</span>
            </div>
          </div>
          <span className="eri-kpi-value">99.9%</span>
          <span className="eri-kpi-change">
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>verified</span>
            Optimal Performance
          </span>
        </div>
      </section>

      {/* 6 Recharts Responsive Analytics Grid */}
      <section className="eri-charts-grid">
        {/* Chart 1: Document Upload Trend (Line Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">show_chart</span>
            1. Document Upload &amp; Download Trend
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={uploadTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Uploads" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="Downloads" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Storage Growth (Area Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">area_chart</span>
            2. Storage Usage Growth (GB)
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={storageGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Area type="monotone" dataKey="Usage" stroke="#2563eb" fill="#dbeafe" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Document Types Distribution (Donut Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">pie_chart</span>
            3. Document Types Breakdown
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={docTypesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {docTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Department Activity (Bar Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">bar_chart</span>
            4. Department Activity Distribution
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="dept" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Bar dataKey="Documents" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 5: User Activity Metrics (Line Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">insights</span>
            5. User Activity (DAU / WAU)
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="DAU" stroke="#2563eb" strokeWidth={2} />
                <Line type="monotone" dataKey="WAU" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 6: Workflow Performance (Stacked Bar Chart) */}
        <div className="eri-chart-card">
          <h3 className="eri-chart-title">
            <span className="material-symbols-outlined">checklist</span>
            6. Workflow Performance Status
          </h3>
          <div className="eri-chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workflowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="dept" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Completed" stackId="a" fill="#10b981" />
                <Bar dataKey="InProgress" stackId="a" fill="#3b82f6" />
                <Bar dataKey="Pending" stackId="a" fill="#f59e0b" />
                <Bar dataKey="Rejected" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recent Reports Data Table */}
      <section className="eri-table-card">
        <h3 className="eri-chart-title" style={{ marginBottom: '14px' }}>
          <span className="material-symbols-outlined">table_chart</span>
          Recent Generated Reports
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table className="eri-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Generated By</th>
                <th>Department</th>
                <th>Generated Date</th>
                <th>Report Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockRecentReports.map((rep) => (
                <tr key={rep.id}>
                  <td style={{ fontWeight: 700, color: '#2563eb' }}>{rep.name}</td>
                  <td>{rep.user}</td>
                  <td>{rep.dept}</td>
                  <td>{rep.date}</td>
                  <td>{rep.type}</td>
                  <td>
                    <span className="brm-badge-success">{rep.status}</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        className="eri-secondary-btn"
                        style={{ padding: '4px 8px', fontSize: '11px' }}
                        onClick={() => handleOpenDrawer(rep)}
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Searches & Top Cards */}
      <section className="eri-top-grid">
        <div className="eri-chart-card">
          <h4 className="eri-ai-card-title">
            <span className="material-symbols-outlined">visibility</span>
            Most Viewed Documents
          </h4>
          <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>1. Q3_Financial_Statement_2026.pdf (1,420 views)</div>
            <div>2. Employee_Handbook_v4.pdf (980 views)</div>
            <div>3. Q3_Tax_Assessment.pdf (740 views)</div>
          </div>
        </div>

        <div className="eri-chart-card">
          <h4 className="eri-ai-card-title">
            <span className="material-symbols-outlined">download</span>
            Most Downloaded Files
          </h4>
          <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>1. Vendor_Agreement_Supply.docx (412 downloads)</div>
            <div>2. Asset_Inventory_2026.xlsx (380 downloads)</div>
            <div>3. Security_Compliance_Guide.pdf (290 downloads)</div>
          </div>
        </div>

        <div className="eri-chart-card">
          <h4 className="eri-ai-card-title">
            <span className="material-symbols-outlined">corporate_fare</span>
            Most Active Departments
          </h4>
          <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>1. Engineering (4,120 activities)</div>
            <div>2. Finance (3,890 activities)</div>
            <div>3. Operations (2,840 activities)</div>
          </div>
        </div>

        <div className="eri-chart-card">
          <h4 className="eri-ai-card-title">
            <span className="material-symbols-outlined">key</span>
            Frequently Used Keywords
          </h4>
          <div style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>• "Audit 2026" (840 searches)</div>
            <div>• "Tax Receipt OCR" (620 searches)</div>
            <div>• "NDA Agreement" (410 searches)</div>
          </div>
        </div>
      </section>

      {/* AI Insights Panel */}
      <section className="eri-ai-grid">
        <div className="eri-ai-card">
          <div className="eri-ai-card-title">
            <span className="material-symbols-outlined">auto_awesome</span>
            Storage Forecast AI
          </div>
          <p style={{ fontSize: '12px', color: '#334155', margin: 0 }}>
            Current storage growth predicts hitting 85% capacity threshold in 42 days. Cloud auto-archival policy recommended.
          </p>
        </div>

        <div className="eri-ai-card">
          <div className="eri-ai-card-title">
            <span className="material-symbols-outlined">delete_sweep</span>
            Inactive Documents Insight
          </div>
          <p style={{ fontSize: '12px', color: '#334155', margin: 0 }}>
            14.2 GB of unaccessed documents detected (&gt;365 days). Moving to S3 Glacier will reduce storage costs by $240/mo.
          </p>
        </div>

        <div className="eri-ai-card">
          <div className="eri-ai-card-title">
            <span className="material-symbols-outlined">content_copy</span>
            Duplicate Files Detected
          </div>
          <p style={{ fontSize: '12px', color: '#334155', margin: 0 }}>
            AI deduplication scan found 182 duplicate files taking up 4.8 GB space across Finance and Ops directories.
          </p>
        </div>
      </section>

      {/* Quick Actions Strip */}
      <section className="eri-quick-actions-bar">
        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginRight: '6px' }}>Quick Actions:</span>
        <button type="button" className="eri-qa-btn">
          <span className="material-symbols-outlined">analytics</span>
          Generate Analytics
        </button>
        <button type="button" className="eri-qa-btn">
          <span className="material-symbols-outlined">ios_share</span>
          Export Dashboard
        </button>
        <button type="button" className="eri-qa-btn">
          <span className="material-symbols-outlined">event</span>
          Create Scheduled Report
        </button>
        <button type="button" className="eri-qa-btn">
          <span className="material-symbols-outlined">share</span>
          Share Dashboard
        </button>
        <button type="button" className="eri-qa-btn">
          <span className="material-symbols-outlined">print</span>
          Print Report
        </button>
      </section>

      {/* Right Details Drawer */}
      {isDrawerOpen && selectedReport && (
        <div className="brm-drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="brm-drawer-container" onClick={(e) => e.stopPropagation()}>
            <div className="brm-drawer-header">
              <h3 className="brm-drawer-title">Report Details</h3>
              <button type="button" className="brm-drawer-close" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="brm-drawer-body">
              <div className="brm-drawer-section">
                <h4 className="ocr-drawer-sec-title">Report Information</h4>
                <div className="dms-info-row">
                  <span className="dms-info-label">Name</span>
                  <span className="dms-info-value">{selectedReport.name}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Generated By</span>
                  <span className="dms-info-value">{selectedReport.user}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Department</span>
                  <span className="dms-info-value">{selectedReport.dept}</span>
                </div>
                <div className="dms-info-row">
                  <span className="dms-info-label">Date</span>
                  <span className="dms-info-value">{selectedReport.date}</span>
                </div>
              </div>
            </div>

            <div className="ocr-drawer-footer">
              <button type="button" className="eri-primary-btn" style={{ flex: 1, justifyContent: 'center' }}>
                <span className="material-symbols-outlined">download</span>
                Download Report
              </button>
              <button type="button" className="eri-secondary-btn" onClick={() => setIsDrawerOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
