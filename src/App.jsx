import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext';
import MainLayout from './layouts/MainLayout';
import FileExplorer from './pages/FileExplorer';
import EnterpriseAnalytics from './pages/EnterpriseAnalytics';
import Dashboard from './pages/Dashboard';
import ApprovalWorkflow from './pages/ApprovalWorkflow';
import PermissionMatrix from './pages/PermissionMatrix';
import UserManagement from './pages/UserManagement';
import OrganizationSettings from './pages/OrganizationSettings/OrganizationSettings';
import AuditLogsCompliance from './pages/AuditLogsCompliance/AuditLogsCompliance';
import FileHistoryCollaboration from './pages/FileHistoryCollaboration/FileHistoryCollaboration';
import OrganizationStructureQuotas from './pages/OrganizationStructureQuotas/OrganizationStructureQuotas';
import SharingCollaborationSettings from './pages/SharingCollaborationSettings/SharingCollaborationSettings';
import SystemStatus from './pages/SystemStatus';
import GlobalCommandPalette from './pages/GlobalCommandPalette';
import MobileAnalytics from './pages/MobileAnalytics';
import MobileFileExplorer from './pages/MobileFileExplorer';
import EnterpriseNotificationCenter from './pages/EnterpriseNotificationCenter';
import { useNavigate } from 'react-router-dom';
import SystemState from './pages/SystemState';
import UserProfile from './pages/UserProfile';

// Dummy placeholder pages
const SharedFiles = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Shared Files Content</div>;
const Approvals = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Approvals Content</div>;
const Settings = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Settings Content</div>;

// Component to handle global Ctrl+K / Cmd+K shortcut
function CommandPaletteShortcutListener() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        navigate('/global-command-palette');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <CommandPaletteShortcutListener />
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<EnterpriseAnalytics />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="system-state" element={<SystemState />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="file-explorer" element={<FileExplorer />} />
              <Route path="approval-workflow" element={<ApprovalWorkflow />} />
              <Route path="permission-matrix" element={<PermissionMatrix />} />
            <Route path="shared-files" element={<SharedFiles />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="organization-settings" element={<OrganizationSettings />} />
            <Route path="audit-logs-compliance" element={<AuditLogsCompliance />} />
            <Route path="file-history-collaboration" element={<FileHistoryCollaboration />} />
            <Route path="organization-structure-quotas" element={<OrganizationStructureQuotas />} />
            <Route path="sharing-collaboration-settings" element={<SharingCollaborationSettings />} />
            <Route path="system-status" element={<SystemStatus />} />
            <Route path="global-command-palette" element={<GlobalCommandPalette />} />
            <Route path="mobile-analytics" element={<MobileAnalytics />} />
            <Route path="mobile-file-explorer" element={<MobileFileExplorer />} />
            <Route path="enterprise-notification-center" element={<EnterpriseNotificationCenter />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
