import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import UserManagement from './pages/UserManagement';
import SystemStatus from './pages/SystemStatus';
import GlobalCommandPalette from './pages/GlobalCommandPalette';
import MobileAnalytics from './pages/MobileAnalytics';
import MobileFileExplorer from './pages/MobileFileExplorer';
import EnterpriseNotificationCenter from './pages/EnterpriseNotificationCenter';
import { useNavigate } from 'react-router-dom';

// Dummy placeholder pages
const Dashboard = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Dashboard Content</div>;
const MyFiles = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">My Files Content</div>;
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
      <BrowserRouter>
        <CommandPaletteShortcutListener />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="my-files" element={<MyFiles />} />
            <Route path="shared-files" element={<SharedFiles />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="user-management" element={<UserManagement />} />
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
    </ThemeProvider>
  );
}

export default App;
