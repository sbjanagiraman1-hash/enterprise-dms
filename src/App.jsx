import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import UserManagement from './pages/UserManagement';
import SystemState from './pages/SystemState';
import UserProfile from './pages/UserProfile';

// Dummy placeholder pages
const Dashboard = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Dashboard Content</div>;
const MyFiles = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">My Files Content</div>;
const SharedFiles = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Shared Files Content</div>;
const Approvals = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Approvals Content</div>;
const Settings = () => <div className="p-4 bg-card dark:bg-slate-900 rounded-2xl border border-border">Settings Content</div>;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="system-state" element={<SystemState />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="my-files" element={<MyFiles />} />
            <Route path="shared-files" element={<SharedFiles />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
