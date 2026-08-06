import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import NotificationHeader from './NotificationHeader';
import NotificationSearch from './NotificationSearch';
import NotificationTabs from './NotificationTabs';
import NotificationFilters from './NotificationFilters';
import NotificationSection from './NotificationSection';
import AccessRequestCard from './AccessRequestCard';
import CommentNotificationCard from './CommentNotificationCard';
import StorageWarningCard from './StorageWarningCard';
import UploadCompleteCard from './UploadCompleteCard';
import NotificationCard from './NotificationCard';
import EmptyNotifications from './EmptyNotifications';

export default function NotificationDrawer({ onClose }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'unread', 'mentions'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Initial Notifications Data covering all requested notification types & groups
  const [notifications, setNotifications] = useState([
    // TODAY GROUP
    {
      id: 'notif-1',
      group: 'Today',
      type: 'request',
      title: 'Access Request: Security Policy Clearance',
      description: 'Sarah Jenkins requested Clearance Level 3 permissions for Confidential Folder.',
      timestamp: '10 mins ago',
      isRead: false,
      isMention: false,
      requestStatus: 'pending',
    },
    {
      id: 'notif-2',
      group: 'Today',
      type: 'comment',
      title: 'Comment Mention in Q3 Audit File',
      description: 'Michael Chen tagged you in a document review comment.',
      authorName: 'Michael Chen',
      avatarInitials: 'MC',
      commentText: '@you Please review section 4.2 of the compliance framework.',
      timestamp: '35 mins ago',
      isRead: false,
      isMention: true,
    },
    {
      id: 'notif-3',
      group: 'Today',
      type: 'storage',
      title: 'Storage Capacity Warning (88% Full)',
      description: 'System storage node US-EAST-04 is approaching quota limits.',
      usedAmount: '44.0 TB / 50.0 TB',
      progressPercent: 88,
      timestamp: '1 hour ago',
      isRead: false,
      isMention: false,
    },
    {
      id: 'notif-4',
      group: 'Today',
      type: 'upload',
      title: 'Upload Completed: 12 Files Processed',
      description: 'Batch upload of Q3 Marketing Assets completed successfully.',
      destinationPath: '/Shared/Q3_Marketing_Assets',
      timestamp: '2 hours ago',
      isRead: true,
      isMention: false,
    },

    // YESTERDAY GROUP
    {
      id: 'notif-5',
      group: 'Yesterday',
      type: 'system',
      title: 'System Alert: Maintenance Scheduled',
      description: 'Database index optimization scheduled for tonight at 23:00 UTC.',
      timestamp: 'Yesterday at 18:40',
      isRead: true,
      isMention: false,
    },
    {
      id: 'notif-6',
      group: 'Yesterday',
      type: 'permission',
      title: 'Permission Changed: Admin Role Updated',
      description: 'Your account privileges were updated to Executive Group Administrator.',
      timestamp: 'Yesterday at 14:15',
      isRead: true,
      isMention: false,
    },
    {
      id: 'notif-7',
      group: 'Yesterday',
      type: 'comment',
      title: 'Mentioned in Project Alpha Roadmap',
      description: 'David Kim mentioned you in Project Alpha Strategy notes.',
      authorName: 'David Kim',
      avatarInitials: 'DK',
      commentText: '@you Can we schedule the security audit call tomorrow?',
      timestamp: 'Yesterday at 11:20',
      isRead: false,
      isMention: true,
    },

    // EARLIER GROUP
    {
      id: 'notif-8',
      group: 'Earlier',
      type: 'approval',
      title: 'Approval Request: Budget Reallocation',
      description: 'Financial approval requested for Q4 Server Hardware Upgrade.',
      timestamp: 'Aug 02, 2026',
      isRead: true,
      isMention: false,
    },
    {
      id: 'notif-9',
      group: 'Earlier',
      type: 'login',
      title: 'New Login Alert: Unknown Device',
      description: 'Successful login detected from Chrome on macOS (IP: 192.168.1.45).',
      timestamp: 'Aug 01, 2026',
      isRead: true,
      isMention: false,
    },
    {
      id: 'notif-10',
      group: 'Earlier',
      type: 'version',
      title: 'File Version Created: v3.4 Published',
      description: 'New revision published for Global_Security_Matrix.docx',
      timestamp: 'Jul 30, 2026',
      isRead: true,
      isMention: false,
    },
  ]);

  // Counts for tabs
  const tabCounts = useMemo(() => {
    const unread = notifications.filter((n) => !n.isRead).length;
    const mentions = notifications.filter((n) => n.isMention).length;
    return { all: notifications.length, unread, mentions };
  }, [notifications]);

  // Filtered Notifications based on Search, Tab, and Type Filter
  const filteredNotifications = useMemo(() => {
    return notifications.filter((n) => {
      // Tab filter
      if (activeTab === 'unread' && n.isRead) return false;
      if (activeTab === 'mentions' && !n.isMention) return false;

      // Type filter
      if (selectedType !== 'all' && n.type !== selectedType) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = n.title.toLowerCase().includes(q);
        const matchDesc = n.description ? n.description.toLowerCase().includes(q) : false;
        const matchAuthor = n.authorName ? n.authorName.toLowerCase().includes(q) : false;
        if (!matchTitle && !matchDesc && !matchAuthor) return false;
      }

      return true;
    });
  }, [notifications, activeTab, selectedType, searchQuery]);

  // Group notifications into Today, Yesterday, Earlier
  const groupedNotifications = useMemo(() => {
    const today = filteredNotifications.filter((n) => n.group === 'Today');
    const yesterday = filteredNotifications.filter((n) => n.group === 'Yesterday');
    const earlier = filteredNotifications.filter((n) => n.group === 'Earlier');

    return { Today: today, Yesterday: yesterday, Earlier: earlier };
  }, [filteredNotifications]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleMarkRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const renderCard = (item) => {
    switch (item.type) {
      case 'request':
        return <AccessRequestCard key={item.id} item={item} onMarkRead={handleMarkRead} onDelete={handleDelete} />;
      case 'comment':
        return <CommentNotificationCard key={item.id} item={item} onMarkRead={handleMarkRead} onDelete={handleDelete} />;
      case 'storage':
        return <StorageWarningCard key={item.id} item={item} onMarkRead={handleMarkRead} onDelete={handleDelete} />;
      case 'upload':
        return <UploadCompleteCard key={item.id} item={item} onMarkRead={handleMarkRead} onDelete={handleDelete} />;
      default:
        return <NotificationCard key={item.id} item={item} onMarkRead={handleMarkRead} onDelete={handleDelete} />;
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 300 }}
      className="w-full md:w-[65%] lg:w-[60%] xl:w-[65%] h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col z-30 shrink-0 min-h-0"
    >
      {/* Header */}
      <NotificationHeader
        unreadCount={tabCounts.unread}
        onMarkAllRead={handleMarkAllRead}
        onClose={onClose}
      />

      {/* Search Input */}
      <NotificationSearch
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      {/* Tabs */}
      <NotificationTabs
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        counts={tabCounts}
      />

      {/* Type Filters */}
      <NotificationFilters
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      {/* Scrollable Grouped Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar min-h-0">
        {filteredNotifications.length === 0 ? (
          <EmptyNotifications
            onReset={() => {
              setSearchQuery('');
              setSelectedType('all');
              setActiveTab('all');
            }}
          />
        ) : (
          <>
            <NotificationSection title="Today" count={groupedNotifications.Today.length}>
              {groupedNotifications.Today.map(renderCard)}
            </NotificationSection>

            <NotificationSection title="Yesterday" count={groupedNotifications.Yesterday.length}>
              {groupedNotifications.Yesterday.map(renderCard)}
            </NotificationSection>

            <NotificationSection title="Earlier" count={groupedNotifications.Earlier.length}>
              {groupedNotifications.Earlier.map(renderCard)}
            </NotificationSection>
          </>
        )}
      </div>
    </motion.div>
  );
}
