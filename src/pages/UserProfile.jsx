import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Key, 
  Bell, 
  Building, 
  CheckCircle2, 
  Edit3, 
  Save, 
  Camera, 
  Globe, 
  Clock 
} from 'lucide-react';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@globalcorp.com',
    role: 'System Administrator',
    department: 'Enterprise Systems & Security',
    location: 'San Francisco, CA (PST)',
    bio: 'Senior Infrastructure Engineer managing enterprise DMS and distributed cloud cluster state.',
    status: 'Active',
    twoFactorEnabled: true,
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header Banner & Profile Overview */}
      <div className="relative rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm overflow-hidden">
        {/* Cover Accent Gradient */}
        <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-90 relative" />

        <div className="p-6 sm:p-8 pt-0 relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 -mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
            <div className="relative group">
              <img 
                src="https://ui-avatars.com/api/?name=Jane+Doe&background=2563eb&color=fff&size=128" 
                alt="Jane Doe" 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-card dark:border-slate-900 shadow-md object-cover bg-slate-100 dark:bg-slate-800"
              />
              <button className="absolute bottom-1 right-1 p-1.5 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-transform active:scale-95">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-foreground">{userInfo.fullName}</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {userInfo.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4 text-slate-400" />
                {userInfo.email}
              </p>
            </div>
          </div>

          <button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all flex items-center gap-2 active:scale-95 self-stretch sm:self-auto justify-center"
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4" /> Save Profile
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" /> Edit Profile
              </>
            )}
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Account Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm space-y-5">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Personal & Work Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">Full Name</label>
                <input 
                  type="text" 
                  disabled={!isEditing}
                  value={userInfo.fullName}
                  onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-80"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                <input 
                  type="email" 
                  disabled={!isEditing}
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-80"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">System Role</label>
                <input 
                  type="text" 
                  disabled
                  value={userInfo.role}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border text-slate-500 dark:text-slate-400 text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">Department</label>
                <input 
                  type="text" 
                  disabled={!isEditing}
                  value={userInfo.department}
                  onChange={(e) => setUserInfo({ ...userInfo, department: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-80"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">Professional Bio</label>
              <textarea 
                rows={3}
                disabled={!isEditing}
                value={userInfo.bio}
                onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-80 resize-none"
              />
            </div>
          </div>

          {/* Security & Credentials */}
          <div className="p-6 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Security & Access Control
            </h2>

            <div className="flex items-center justify-between py-2 border-b border-border/60">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">Two-Factor Authentication (2FA)</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Add an extra layer of security using TOTP or Hardware key.</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">Password Management</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Last changed 24 days ago.</p>
              </div>
              <button 
                onClick={() => alert('Password reset link sent to your email')}
                className="px-3.5 py-1.5 rounded-xl border border-border hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Stats & Activity */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-card dark:bg-slate-900 border border-border shadow-sm space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Account Overview
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-border/60">
                <Building className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-xs text-slate-400">Organization</p>
                  <p className="text-sm font-medium text-foreground">Global Corp Enterprise</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-border/60">
                <Globe className="w-4 h-4 text-cyan-500" />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-medium text-foreground">{userInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-border/60">
                <Clock className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="text-xs text-slate-400">Last Active Session</p>
                  <p className="text-sm font-medium text-foreground">Just now (Current IP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
