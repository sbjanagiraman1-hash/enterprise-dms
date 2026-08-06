import React from 'react';

export default function ReplyItem({ reply }) {
  return (
    <div className="dms-reply-card">
      <div className="dms-comment-header">
        <div className="dms-comment-author-avatar">
          {reply.author.avatar}
        </div>
        <div className="dms-comment-author-info">
          <span className="dms-comment-author-name">{reply.author.name}</span>
          <span className="dms-comment-timestamp">{reply.timestamp}</span>
        </div>
      </div>

      <p className="dms-comment-text">{reply.text}</p>
    </div>
  );
}
