import React, { useState, useEffect } from 'react';
import { Database, FileText, Folder, Users, AlertCircle } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import StorageChart from '../components/StorageChart';
import DistributionChart from '../components/DistributionChart';
import ActivityTimeline from '../components/ActivityTimeline';
import QuickActions from '../components/QuickActions';
import ApprovalsCard from '../components/ApprovalsCard';

export default function EnterpriseAnalytics() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate API Fetch
    const timer = setTimeout(() => {
      setLoading(false);
      // Change to true to test Error State
      setError(false); 
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[60vh] animate-in fade-in">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Failed to load analytics</h2>
        <p className="text-slate-500 mb-6 max-w-sm text-center">There was a problem connecting to the server. Please try again later.</p>
        <button 
          onClick={() => { setLoading(true); setError(false); setTimeout(() => setLoading(false), 1000); }}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/50"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" role="main" aria-label="Enterprise Analytics Dashboard">
      <DashboardHeader />
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {loading ? (
          <>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-card dark:bg-slate-900 border border-border rounded-2xl p-6 shadow-sm animate-pulse">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                  <div className="w-16 h-6 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                </div>
                <div className="w-24 h-4 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                <div className="w-32 h-8 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            ))}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* Main Content Area - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        
        {/* Charts section spanning 2 columns on desktop */}
        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {loading ? (
              <>
                <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl h-80 animate-pulse"></div>
                <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl h-80 animate-pulse"></div>
              </>
            ) : (
              <>
                <StorageChart />
                <DistributionChart />
              </>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
             {loading ? (
              <>
                <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl h-64 animate-pulse"></div>
                <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl h-64 animate-pulse"></div>
              </>
             ) : (
              <>
                <QuickActions />
                <ApprovalsCard />
              </>
             )}
          </div>
        </div>
        
        {/* Sidebar/Timeline section spanning 1 column */}
        <div className="lg:col-span-1">
          {loading ? (
            <div className="bg-card dark:bg-slate-900 border border-border rounded-2xl h-[500px] animate-pulse"></div>
          ) : (
            <ActivityTimeline />
          )}
        </div>
        
      </div>
    </div>
  );
}
