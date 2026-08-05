import React, { useState } from 'react';
import { FiUserPlus, FiSearch, FiUsers, FiUser } from 'react-icons/fi';
import { mockSearchableDirectory } from '../../data/users';

export default function UserSearch({ onAddUser }) {
  const [query, setQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('Editor');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = mockSearchableDirectory.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase()) ||
    u.email.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectSuggestion = (u) => {
    onAddUser({
      ...u,
      role: selectedRole,
      isOwner: false,
      isInherited: false,
    });
    setQuery('');
    setShowSuggestions(false);
  };

  const handleManualAdd = (e) => {
    e.preventDefault();
    if (!query.trim() || !query.includes('@')) return;

    onAddUser({
      id: `usr-${Date.now()}`,
      name: query.split('@')[0],
      email: query,
      avatar: query.slice(0, 2).toUpperCase(),
      type: 'user',
      role: selectedRole,
      isOwner: false,
      isInherited: false,
    });
    setQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="share-user-search-container">
      <form onSubmit={handleManualAdd} className="share-search-row">
        <div className="share-search-input-wrapper">
          <FiSearch className="share-search-icon" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Add people, teams, or email addresses..."
            className="share-search-input"
          />

          {showSuggestions && query.trim() && (
            <div className="share-suggestions-dropdown">
              {suggestions.length > 0 ? (
                suggestions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectSuggestion(item)}
                    className="share-suggestion-item"
                  >
                    <div className="share-user-avatar">
                      {item.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">{item.name}</span>
                      <span className="text-xs text-slate-400">{item.email} • {item.department}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-xs text-slate-400">
                  Press enter to invite <strong>"{query}"</strong>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Initial Permission Dropdown */}
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="share-search-role-select"
        >
          <option value="Editor">Can edit</option>
          <option value="Contributor">Can contribute</option>
          <option value="Viewer">Can view</option>
          <option value="Comment Only">Can comment</option>
        </select>

        <button type="submit" className="share-btn-add-user">
          <FiUserPlus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}
