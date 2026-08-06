import React from 'react';
import { Database, FileText, Folder, Users } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import StorageChart from '../components/StorageChart';
import DistributionChart from '../components/DistributionChart';
import ActivityTimeline from '../components/ActivityTimeline';
import QuickActions from '../components/QuickActions';
import ApprovalsCard from '../components/ApprovalsCard';

export default function AnalyticsDashboard() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader />
      
      {/* Stat Cards - 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        <StatCard 
          title="Total Storage" 
          metric="14.2 TB" 
          badge="+12%" 
          icon={Database} 
          iconColor="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" 
        />
        <StatCard 
          title="Total Files" 
          metric="1.2M" 
          badge="+5.4%" 
          icon={FileText} 
          iconColor="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" 
        />
        <StatCard 
          title="Folders" 
          metric="84,302" 
          icon={Folder} 
          iconColor="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" 
        />
        <StatCard 
          title="Active Users" 
          metric="2,405" 
          badge="+2%" 
          icon={Users} 
          iconColor="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" 
        />
      </div>

      {/* Main Content Area - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        
        {/* Charts section spanning 2 columns on desktop */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <StorageChart />
            <DistributionChart />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
             <QuickActions />
             <ApprovalsCard />
          </div>
        </div>
        
        {/* Sidebar/Timeline section spanning 1 column */}
        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
        
      </div>
    </div>
  );
}
