import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, Search, Plus, AlertCircle } from 'lucide-react';
import ApprovalBoard from '../components/ApprovalBoard';
import ApprovalFilters from '../components/ApprovalFilters';
import ApprovalModal from '../components/ApprovalModal';
import ApprovalTimeline from '../components/ApprovalTimeline';
import CommentSection from '../components/CommentSection';
import { mockApprovals } from '../data/mockApprovals';
import EmptyState from '../components/EmptyState';

export default function ApprovalWorkflow() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRequest, setActiveRequest] = useState(null);
  
  // View toggle is present but mock logic will just rely on ApprovalBoard
  const [view, setView] = useState('board');

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setRequests(mockApprovals);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (request) => {
    setActiveRequest(request);
  };

  const filteredRequests = requests.filter(req => 
    req.documentName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    req.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex relative w-full">
      
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${activeRequest ? 'lg:pr-[400px] xl:pr-[500px]' : ''}`}>
        <div className="flex flex-col w-full">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-6 gap-4 shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Approval Workflow</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage document reviews, approvals and enterprise workflow requests.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl hidden sm:flex items-center">
                <button 
                  onClick={() => setView('board')}
                  className={`p-1.5 rounded-lg transition-colors ${view === 'board' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-lg transition-colors ${view === 'list' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <div className="relative flex-1 sm:flex-none">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search requests..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                />
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/50"
              >
                <Plus className="w-4 h-4" /> New Request
              </button>
            </div>
          </div>

          <ApprovalFilters onClear={() => {}} />

          {error ? (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in flex-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unable to load approval requests</h3>
              <p className="text-slate-500 text-center max-w-sm mb-6">There was an error communicating with the server.</p>
              <button 
                onClick={() => { setLoading(true); setError(false); setTimeout(() => setLoading(false), 1000); }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-blue-500/50"
              >
                Retry
              </button>
            </div>
          ) : loading ? (
            <div className="flex-1 flex gap-4 overflow-hidden animate-pulse px-1">
               {[1,2,3,4].map(i => (
                 <div key={i} className="min-w-[320px] bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-border h-full p-4 flex flex-col gap-4">
                   <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-full"></div>
                   <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl w-full"></div>
                   <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl w-full"></div>
                 </div>
               ))}
            </div>
          ) : filteredRequests.length === 0 ? (
            <EmptyState onUpload={() => setIsModalOpen(true)} />
          ) : (
            <ApprovalBoard requests={filteredRequests} onCardClick={handleCardClick} />
          )}

        </div>
      </div>

      {/* Right Side Panel */}
      <div className={`fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto w-full sm:w-[400px] xl:w-[500px] bg-card border-t sm:border-t-0 sm:border-l border-border shadow-2xl transition-transform duration-300 z-40 pt-4 sm:pt-16 lg:pt-0 ${
        activeRequest ? 'translate-y-0 sm:translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
      } lg:fixed lg:top-16 lg:bottom-0 lg:right-0 rounded-t-3xl sm:rounded-none max-h-[90vh] sm:max-h-none flex flex-col`}>
        {activeRequest && (
          <>
            <div className="flex-1 overflow-y-auto">
              <ApprovalTimeline request={activeRequest} onClose={() => setActiveRequest(null)} />
            </div>
            <div className="h-1/3 min-h-[250px] border-t-4 border-slate-100 dark:border-slate-800 shrink-0">
              <CommentSection />
            </div>
          </>
        )}
      </div>

      {/* Mobile overlay for panel */}
      {activeRequest && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setActiveRequest(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile FAB */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="sm:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all z-20"
      >
        <Plus className="w-6 h-6" />
      </button>

      <ApprovalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
