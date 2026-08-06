import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SidebarDrawer from '../components/SidebarDrawer';
import { useSidebar } from '../context/SidebarContext';

export default function MainLayout() {
  const { isOpen, closeSidebar, toggleSidebar } = useSidebar();

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <SidebarDrawer isOpen={isOpen} onClose={closeSidebar} />
      
      <Sidebar />
      
      <div className="flex flex-col flex-1 min-h-screen min-w-0 transition-all duration-300 lg:ml-64">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
