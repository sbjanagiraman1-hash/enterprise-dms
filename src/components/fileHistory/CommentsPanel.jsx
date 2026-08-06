import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { FiSend, FiPaperclip, FiAtSign, FiMessageSquare } from 'react-icons/fi';

export default function CommentsPanel({
  comments = [],
  onPostComment,
  onReply,
  onResolveThread,
}) {
  const [commentText, setCommentText] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    onPostComment({
      text: commentText,
      attachments: attachedFiles,
    });

    setCommentText('');
    setAttachedFiles([]);
  };

  const handleSimulateAttachment = () => {
    const fakeAttachment = {
      name: `Revision_Notes_${Math.floor(Math.random() * 100)}.pdf`,
      size: '850 KB',
    };
    setAttachedFiles([...attachedFiles, fakeAttachment]);
  };

  return (
    <div className="dms-comments-panel">
      {/* New Comment Input Box */}
      <form onSubmit={handleSubmit} className="dms-new-comment-box">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={3}
          placeholder="Add a collaboration note or comment... Use @username to notify team members."
          className="dms-comment-textarea"
        />

        {attachedFiles.length > 0 && (
          <div className="dms-staged-attachments">
            {attachedFiles.map((att, idx) => (
              <span key={idx} className="dms-staged-attachment-chip">
                <FiPaperclip className="w-3 h-3 text-blue-400" />
                <span>{att.name}</span>
              </span>
            ))}
          </div>
        )}

        <div className="dms-comment-input-footer">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleSimulateAttachment}
              className="dms-comment-icon-btn"
              title="Attach document snippet"
            >
              <FiPaperclip className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCommentText((prev) => prev + ' @')}
              className="dms-comment-icon-btn"
              title="Mention teammate"
            >
              <FiAtSign className="w-4 h-4" />
            </button>
          </div>

          <button
            type="submit"
            disabled={!commentText.trim()}
            className="dms-btn-post-comment"
          >
            <FiSend className="w-4 h-4" />
            <span>Post Comment</span>
          </button>
        </div>
      </form>

      {/* Threaded Comments List */}
      <div className="dms-comments-list">
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={onReply}
              onResolveThread={onResolveThread}
            />
          ))
        ) : (
          <div className="dms-empty-state">
            <FiMessageSquare className="w-8 h-8 text-slate-500 mb-2" />
            <p className="font-semibold text-slate-300">No collaboration comments yet</p>
            <p className="text-xs text-slate-500">Be the first to post a note or tag a teammate.</p>
          </div>
        )}
      </div>
    </div>
  );
}
