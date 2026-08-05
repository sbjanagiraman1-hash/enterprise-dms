import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Folder,
  ShieldCheck,
  Upload,
  FolderPlus,
  UserPlus,
  Download,
  LayoutDashboard,
  HardDrive,
  Activity,
  Users,
  Settings,
  SearchX,
  Command,
  CheckCircle2
} from 'lucide-react';
import SearchInput from './SearchInput';
import CommandSection from './CommandSection';
import CommandItem from './CommandItem';
import ShortcutBadge from './ShortcutBadge';

export default function CommandPalette() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [actionFeedback, setActionFeedback] = useState(null);

  // Command Palette Items grouped by category
  const commandData = useMemo(() => [
    {
      section: 'RECENT',
      items: [
        {
          id: 'rec-1',
          title: 'Q3 Financial Reports',
          subtitle: 'Recent document search',
          icon: FileText,
          shortcuts: ['↵'],
          action: () => triggerNotification('Opening Q3 Financial Reports...'),
        },
        {
          id: 'rec-2',
          title: 'Project Alpha Assets',
          subtitle: 'Shared repository folder',
          icon: Folder,
          shortcuts: ['↵'],
          action: () => triggerNotification('Opening Project Alpha Assets...'),
        },
        {
          id: 'rec-3',
          title: 'User Access Matrix',
          subtitle: 'Security clearance log',
          icon: ShieldCheck,
          shortcuts: ['↵'],
          action: () => triggerNotification('Opening User Access Matrix...'),
        },
      ],
    },
    {
      section: 'SUGGESTED ACTIONS',
      items: [
        {
          id: 'act-1',
          title: 'Upload File',
          subtitle: 'Upload a document or dataset',
          icon: Upload,
          shortcuts: ['Shift', 'U'],
          action: () => triggerNotification('File upload modal opened.'),
        },
        {
          id: 'act-2',
          title: 'New Folder',
          subtitle: 'Create a structured workspace folder',
          icon: FolderPlus,
          shortcuts: ['Shift', 'N'],
          action: () => triggerNotification('New folder wizard launched.'),
        },
        {
          id: 'act-3',
          title: 'Invite User',
          subtitle: 'Grant team member access permissions',
          icon: UserPlus,
          shortcuts: ['Shift', 'I'],
          action: () => triggerNotification('User invitation drawer opened.'),
        },
        {
          id: 'act-4',
          title: 'Export System Logs',
          subtitle: 'Download diagnostic report JSON',
          icon: Download,
          shortcuts: ['Shift', 'E'],
          action: () => triggerNotification('Exporting system audit logs...'),
        },
      ],
    },
    {
      section: 'NAVIGATION',
      items: [
        {
          id: 'nav-1',
          title: 'Dashboard',
          subtitle: 'Overview & system statistics',
          icon: LayoutDashboard,
          path: '/',
          shortcuts: ['G', 'D'],
          action: () => navigate('/'),
        },
        {
          id: 'nav-2',
          title: 'View My Files',
          subtitle: 'Personal document vault',
          icon: HardDrive,
          path: '/my-files',
          shortcuts: ['G', 'F'],
          action: () => navigate('/my-files'),
        },
        {
          id: 'nav-3',
          title: 'System Status',
          subtitle: 'Operational health & status previews',
          icon: Activity,
          path: '/system-status',
          shortcuts: ['G', 'S'],
          action: () => navigate('/system-status'),
        },
        {
          id: 'nav-4',
          title: 'User Management',
          subtitle: 'Manage system roles & access',
          icon: Users,
          path: '/user-management',
          shortcuts: ['G', 'U'],
          action: () => navigate('/user-management'),
        },
        {
          id: 'nav-5',
          title: 'System Settings',
          subtitle: 'Configure enterprise preferences',
          icon: Settings,
          path: '/settings',
          shortcuts: ['G', 'O'],
          action: () => navigate('/settings'),
        },
      ],
    },
  ], [navigate]);

  // Auto focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Filter items across sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return commandData;

    const query = searchQuery.toLowerCase().trim();
    return commandData
      .map((sec) => ({
        ...sec,
        items: sec.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
            sec.section.toLowerCase().includes(query)
        ),
      }))
      .filter((sec) => sec.items.length > 0);
  }, [commandData, searchQuery]);

  // Flat array of current filtered items for keyboard navigation index indexing
  const flatFilteredItems = useMemo(() => {
    return filteredSections.flatMap((sec) => sec.items);
  }, [filteredSections]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Feedback toast banner reset handler
  const triggerNotification = (msg) => {
    setActionFeedback(msg);
    setTimeout(() => {
      setActionFeedback(null);
    }, 3000);
  };

  // Keyboard navigation logic
  const handleKeyDown = (e) => {
    if (flatFilteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % flatFilteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + flatFilteredItems.length) % flatFilteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedItem = flatFilteredItems[selectedIndex];
      if (selectedItem && selectedItem.action) {
        selectedItem.action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      if (searchQuery) {
        setSearchQuery('');
      } else {
        navigate(-1);
      }
    }
  };

  // Keep selected index within bounds
  const clampedSelectedIndex = Math.min(selectedIndex, Math.max(0, flatFilteredItems.length - 1));

  // Global key listener for Ctrl+K / Cmd+K escape or navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Escape' && !searchQuery) {
        // Can optionally close/go back
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [searchQuery]);

  let globalIndexCounter = 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="w-full max-w-[720px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all"
    >
      {/* Top Search Input */}
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
        inputRef={inputRef}
        onKeyDown={handleKeyDown}
      />

      {/* Action Toast Feedback Banner */}
      <AnimatePresence>
        {actionFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 flex items-center justify-between shadow-inner"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              {actionFeedback}
            </span>
            <button
              onClick={() => setActionFeedback(null)}
              className="text-white/80 hover:text-white text-xs underline"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command List Body */}
      <div
        ref={listRef}
        className="max-h-[440px] overflow-y-auto p-2 sm:p-3 divide-y divide-slate-100 dark:divide-slate-800/60 custom-scrollbar"
        role="listbox"
      >
        {filteredSections.length > 0 ? (
          filteredSections.map((sec) => (
            <CommandSection key={sec.section} title={sec.section} count={sec.items.length}>
              {sec.items.map((item) => {
                const currentIndex = globalIndexCounter++;
                const isSelected = currentIndex === clampedSelectedIndex;

                return (
                  <CommandItem
                    key={item.id}
                    item={item}
                    isSelected={isSelected}
                    searchQuery={searchQuery}
                    onSelect={(it) => it.action && it.action()}
                    onMouseEnter={() => setSelectedIndex(currentIndex)}
                  />
                );
              })}
            </CommandSection>
          ))
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 px-6 text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              <SearchX className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No matching command found
            </h3>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              We couldn&apos;t find any actions, files, or navigation shortcuts matching &quot;<span className="font-semibold text-slate-700 dark:text-slate-300">{searchQuery}</span>&quot;.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear search filter
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer Shortcut Legend */}
      <div className="px-4 py-3 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <ShortcutBadge keys={['↑', '↓']} />
            <span className="text-[11px]">Navigate</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShortcutBadge keys={['↵']} />
            <span className="text-[11px]">Select</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShortcutBadge keys={['Esc']} />
            <span className="text-[11px]">Clear / Back</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
          <Command className="w-3.5 h-3.5 text-blue-500" />
          <span>Global Command Engine v2.4</span>
        </div>
      </div>
    </motion.div>
  );
}
