import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft, KeyRound, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function PermissionCard() {
  const navigate = useNavigate();
  const [requestSent, setRequestSent] = useState(false);

  const handleRequestAccess = () => {
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
    }, 3000);
  };

  const requiredPermissions = [
    { name: 'Doc.Read.All', level: 'Required' },
    { name: 'Admin.Security.Group', level: 'Required' },
    { name: 'Clearance Level 3', level: 'Mandatory' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group"
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
            <ShieldAlert className="w-3.5 h-3.5" />
            Security Restrict (403)
          </span>
          <span className="text-xs text-slate-400 font-mono">POLICY: SEC_RESTRICTED</span>
        </div>

        {/* Lock Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 flex items-center justify-center mb-4 shadow-inner relative group-hover:scale-105 transition-transform duration-300"
          >
            <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 dark:text-amber-400" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            Access Denied
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            You do not have the required security credentials or role permissions to view this protected enterprise directory.
          </p>
        </div>

        {/* Required Permissions Section */}
        <div className="mb-6 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Required Permissions
            </span>
            <span className="text-[11px] font-medium text-slate-500">3 Controls Active</span>
          </div>

          <div className="space-y-2">
            {requiredPermissions.map((perm) => (
              <div
                key={perm.name}
                className="flex items-center justify-between bg-white dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200/70 dark:border-slate-800 text-xs font-mono"
              >
                <span className="text-slate-800 dark:text-slate-200 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {perm.name}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] uppercase font-sans font-semibold">
                  {perm.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(-1)}
          className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-xl transition-all duration-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleRequestAccess}
          disabled={requestSent}
          className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm shadow-blue-500/20 disabled:opacity-80"
        >
          {requestSent ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              Request Sent
            </>
          ) : (
            <>
              <KeyRound className="w-4 h-4" />
              Request Access
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
