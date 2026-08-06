import React, { useState, useEffect } from 'react';
import { FiX, FiHardDrive, FiSave } from 'react-icons/fi';

export default function QuotaModal({
  isOpen,
  onClose,
  branchesList = [],
  editingQuota = null,
  onSaveQuota,
}) {
  const [selectedBranchId, setSelectedBranchId] = useState('');
  const [storageLimit, setStorageLimit] = useState('1024');
  const [unit, setUnit] = useState('GB'); // 'GB' | 'TB'
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingQuota) {
      setSelectedBranchId(editingQuota.branchId || editingQuota.id || '');
      if (editingQuota.allocatedStorageGB >= 1024) {
        setStorageLimit((editingQuota.allocatedStorageGB / 1024).toString());
        setUnit('TB');
      } else {
        setStorageLimit(editingQuota.allocatedStorageGB.toString());
        setUnit('GB');
      }
    } else {
      setSelectedBranchId(branchesList[0]?.id || '');
      setStorageLimit('1024');
      setUnit('GB');
      setNotes('');
    }
  }, [editingQuota, branchesList, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const limitVal = parseFloat(storageLimit) || 0;
    const finalGB = unit === 'TB' ? limitVal * 1024 : limitVal;

    setTimeout(() => {
      setIsSubmitting(false);
      onSaveQuota({
        branchId: selectedBranchId,
        allocatedStorageGB: finalGB,
        notes,
      });
      onClose();
    }, 500);
  };

  return (
    <div className="org-modal-overlay">
      <div className="org-modal-card">
        <div className="org-modal-header">
          <div className="flex items-center gap-2.5">
            <FiHardDrive className="text-blue-500 w-5 h-5" />
            <h3 className="org-modal-title">
              {editingQuota ? 'Update Storage Quota' : 'Allocate Branch Storage Quota'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="org-modal-close-btn"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="org-modal-body space-y-4">
          {/* Branch Select */}
          <div className="org-field-group">
            <label className="org-field-label">Target Organizational Branch</label>
            <select
              value={selectedBranchId}
              onChange={(e) => setSelectedBranchId(e.target.value)}
              className="org-select"
              required
            >
              {branchesList.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name || b.branchName}
                </option>
              ))}
            </select>
          </div>

          {/* Storage Limit & Unit */}
          <div className="org-form-grid">
            <div className="org-field-group">
              <label className="org-field-label">Storage Capacity Limit</label>
              <input
                type="number"
                min="1"
                step="0.1"
                value={storageLimit}
                onChange={(e) => setStorageLimit(e.target.value)}
                placeholder="e.g. 2048"
                className="org-input plain"
                required
              />
            </div>

            <div className="org-field-group">
              <label className="org-field-label">Unit Scale</label>
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="org-select"
              >
                <option value="GB">Gigabytes (GB)</option>
                <option value="TB">Terabytes (TB)</option>
              </select>
            </div>
          </div>

          {/* Justification Notes */}
          <div className="org-field-group">
            <label className="org-field-label">Administrative Notes / Justification</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Provide reason for quota allocation or limit update..."
              className="org-textarea"
            />
          </div>

          {/* Footer Actions */}
          <div className="org-modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="org-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="org-btn-primary"
            >
              {isSubmitting ? (
                <>
                  <span className="org-spinner" />
                  <span>Saving Quota...</span>
                </>
              ) : (
                <>
                  <FiSave className="w-4 h-4" />
                  <span>Save Quota</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
