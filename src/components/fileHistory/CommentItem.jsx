import React, { useState } from 'react';
import ReplyItem from './ReplyItem';
import { 
  FiCornerDownRight, 
  FiCheckCircle, 
  FiPaperclip, 
  FiSend,
  FiCheck
} from 'react-icons/fi';

export default function CommentItem({ comment, onReply, onResolveThread }) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyInput(false);
  };

  return (
    <div className={`dms-comment-card ${comment.resolved ? 'resolved' : ''}`}>
      {/* Header Info */}
      <div className="dms-comment-header">
        <div className="dms-comment-author-avatar">
          {comment.author.avatar}
        </div>

        <div className="dms-comment-author-info">
          <div className="flex items-center gap-2">
            <span className="dms-comment-author-name">{comment.author.name}</span>
            {comment.author.role && (
              <span className="dms-comment-role-badge">{comment.author.role}</span>
            )}
          </div>
          <span className="dms-comment-timestamp">{comment.timestamp}</span>
        </div>

        {/* Resolve Thread Button */}
        <button
          type="button"
          onClick={() => onResolveThread(comment.id)}
          className={`dms-btn-resolve ${comment.resolved ? 'is-resolved' : ''}`}
          title={comment.resolved ? 'Thread resolved' : 'Mark thread as resolved'}
        >
          <FiCheck className="w-3.5 h-3.5" />
          <span>{comment.resolved ? 'Resolved' : 'Resolve'}</span>
        </button>
      </div>

      {/* Body Text */}
      <p className="dms-comment-text">{comment.text}</p>

      {/* Attachments if any */}
      {comment.attachments && comment.attachments.length > 0 && (
        <div className="dms-comment-attachments">
          {comment.attachments.map((att, idx) => (
            <div key={idx} className="dms-comment-attachment-chip">
              <FiPaperclip className="w-3.5 h-3.5 text-blue-400" />
              <span>{att.name}</span>
              <span className="text-slate-400 text-xs">({att.size})</span>
            </div>
          ))}
        </div>
      )}

      {/* Action Footer (Reply trigger) */}
      <div className="dms-comment-footer">
        <button
          type="button"
          onClick={() => setShowReplyInput(!showReplyInput)}
          className="dms-btn-reply-trigger"
        >
          <FiCornerDownRight className="w-3.5 h-3.5" />
          <span>Reply</span>
        </button>
      </div>

      {/* Inline Reply Form */}
      {showReplyInput && (
        <form onSubmit={handleSendReply} className="dms-reply-form">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={`Reply to ${comment.author.name}... (@username to mention)`}
            className="dms-reply-input"
            autoFocus
          />
          <button type="submit" className="dms-btn-send-reply">
            <FiSend className="w-3.5 h-3.5" />
          </button>
        </form>
      )}

      {/* Nested Replies List */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="dms-nested-replies-list">
          {comment.replies.map((reply) => (
            <ReplyItem key={reply.id} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
}
