import React from 'react';
import { FiCopy, FiSave, FiX } from 'react-icons/fi';

export default function ShareFooter({
  shareableLink,
  onCopyLink,
  onCancel,
  onSave,
  isSaving,
}) {
  return (
    <div className="share-dialog-footer">
      <button
        type="button"
        onClick={() => onCopyLink(shareableLink)}
        className="share-btn-footer secondary float-left"
      >
        <FiCopy className="w-4 h-4" />
        <span>Copy Link</span>
      </button>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="share-btn-footer secondary"
        >
          <span>Cancel</span>
        </button>

        <button
          type="button"
          onClick={onSave}
          disabled={isSaving}
          className="share-btn-footer primary"
        >
          {isSaving ? (
            <>
              <span className="org-spinner" />
              <span>Saving Preferences...</span>
            </>
          ) : (
            <>
              <FiSave className="w-4 h-4" />
              <span>Save Changes</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
