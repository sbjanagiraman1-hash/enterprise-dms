import React, { useState } from 'react';
import FileBrowser from '../../components/fileHistory/FileBrowser';
import CollaborationDrawer from '../../components/fileHistory/CollaborationDrawer';
import { mockFiles } from '../../data/files';
import { mockVersionHistoryMap } from '../../data/versionHistory';
import { mockCommentsMap } from '../../data/comments';
import { FiCheckCircle } from 'react-icons/fi';
import './FileHistoryCollaboration.css';

export default function FileHistoryCollaboration() {
  const [filesList, setFilesList] = useState(mockFiles);
  const [selectedFile, setSelectedFile] = useState(mockFiles[0] || null);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [versionHistoryMap, setVersionHistoryMap] = useState(mockVersionHistoryMap);
  const [commentsMap, setCommentsMap] = useState(mockCommentsMap);
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleSelectFile = (file) => {
    setSelectedFile(file);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  // Action Placeholders for Future API Integration
  const handleUpload = () => {
    const newFile = {
      id: `file-${Date.now()}`,
      name: 'New_Uploaded_Document.pdf',
      type: 'PDF Document',
      extension: 'pdf',
      size: '5.2 MB',
      sizeBytes: 5452595,
      modifiedDate: 'Just now',
      createdDate: 'Just now',
      owner: {
        name: 'Alex Johnson',
        email: 'alex.j@acme.corp',
        avatar: 'AJ'
      },
      collaborators: [],
      lockStatus: 'Unlocked',
      lockedBy: null,
      expiryDate: '2027-12-31',
      permissions: ['Read', 'Write', 'Download', 'Comment'],
      category: 'Finance'
    };

    setFilesList([newFile, ...filesList]);
    setSelectedFile(newFile);
    setDrawerOpen(true);
    showNotification('New document uploaded successfully to DMS!');
  };

  const handleDownload = (file) => {
    showNotification(`Preparing download link for ${file.name}...`);
  };

  const handleRestoreVersion = (versionItem) => {
    if (!selectedFile) return;
    const fileId = selectedFile.id;
    const currentVersions = versionHistoryMap[fileId] || [];

    const updatedVersions = currentVersions.map((v) => ({
      ...v,
      isCurrent: v.id === versionItem.id,
    }));

    setVersionHistoryMap({
      ...versionHistoryMap,
      [fileId]: updatedVersions,
    });

    showNotification(`Restored document to version ${versionItem.version}.`);
  };

  const handleRequestUnlock = (file) => {
    showNotification(`Unlock permission request sent to ${file.lockedBy?.name || 'file administrator'}.`);
  };

  const handlePostComment = ({ text, attachments }) => {
    if (!selectedFile) return;
    const fileId = selectedFile.id;
    const currentComments = commentsMap[fileId] || [];

    const newCommentObj = {
      id: `comment-${Date.now()}`,
      author: {
        name: 'Alex Johnson',
        avatar: 'AJ',
        email: 'alex.j@acme.corp',
        role: 'Lead Architect'
      },
      timestamp: 'Just now',
      text,
      attachments: attachments || [],
      resolved: false,
      replies: []
    };

    setCommentsMap({
      ...commentsMap,
      [fileId]: [newCommentObj, ...currentComments]
    });

    showNotification('Comment posted to collaboration thread.');
  };

  const handleReply = (commentId, replyText) => {
    if (!selectedFile) return;
    const fileId = selectedFile.id;
    const currentComments = commentsMap[fileId] || [];

    const updatedComments = currentComments.map((c) => {
      if (c.id === commentId) {
        return {
          ...c,
          replies: [
            ...c.replies,
            {
              id: `reply-${Date.now()}`,
              author: {
                name: 'Alex Johnson',
                avatar: 'AJ',
                email: 'alex.j@acme.corp',
                role: 'Lead Architect'
              },
              timestamp: 'Just now',
              text: replyText
            }
          ]
        };
      }
      return c;
    });

    setCommentsMap({
      ...commentsMap,
      [fileId]: updatedComments
    });

    showNotification('Reply added to comment thread.');
  };

  const handleResolveThread = (commentId) => {
    if (!selectedFile) return;
    const fileId = selectedFile.id;
    const currentComments = commentsMap[fileId] || [];

    const updatedComments = currentComments.map((c) => {
      if (c.id === commentId) {
        return { ...c, resolved: !c.resolved };
      }
      return c;
    });

    setCommentsMap({
      ...commentsMap,
      [fileId]: updatedComments
    });

    showNotification('Comment thread status updated.');
  };

  const handleDeleteVersion = (versionId) => {
    showNotification(`Version ID ${versionId} marked for deletion.`);
  };

  const activeVersions = selectedFile ? versionHistoryMap[selectedFile.id] || [] : [];
  const activeComments = selectedFile ? commentsMap[selectedFile.id] || [] : [];

  return (
    <div className="dms-page-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="org-toast" role="status" aria-live="polite">
          <FiCheckCircle className="org-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Module Title Header */}
      <header className="dms-header">
        <h1 className="dms-title">File History & Collaboration Drawer</h1>
        <p className="dms-subtitle">
          Enterprise Document Management System (DMS) repository with revision timelines and multi-user collaboration.
        </p>
      </header>

      {/* Main Split Layout: File Browser + Fixed Collaboration Drawer */}
      <div className="dms-layout-wrapper">
        {/* Left Column: File Browser */}
        <div className="dms-file-browser-column">
          <FileBrowser
            files={filesList}
            selectedFile={selectedFile}
            onSelectFile={handleSelectFile}
            onUploadClick={handleUpload}
          />
        </div>

        {/* Right Fixed Slide-In Collaboration Drawer */}
        <CollaborationDrawer
          file={selectedFile}
          isOpen={drawerOpen}
          onClose={handleCloseDrawer}
          versionHistory={activeVersions}
          comments={activeComments}
          onDownload={handleDownload}
          onRequestUnlock={handleRequestUnlock}
          onRestoreVersion={handleRestoreVersion}
          onDeleteVersion={handleDeleteVersion}
          onPostComment={handlePostComment}
          onReply={handleReply}
          onResolveThread={handleResolveThread}
        />
      </div>
    </div>
  );
}
