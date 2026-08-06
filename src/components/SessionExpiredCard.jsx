import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, LogIn, Home, ShieldAlert } from 'lucide-react';

export default function SessionExpiredCard() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert('Redirecting to secure login authentication portal...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group relative overflow-hidden"
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">
            <Clock className="w-3.5 h-3.5" />
            Session Timeout (401)
          </span>
          <span className="text-xs text-slate-400 font-mono">AUTH: TOKEN_EXPIRED</span>
        </div>

        {/* Modal-style Preview Container */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 mb-6 shadow-inner text-center relative">
          <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
            <ShieldAlert className="w-3 h-3 text-amber-500" />
            Auto-Lock
          </div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-100/70 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300"
          >
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            Session Expired
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Your user authentication token has timed out due to period of inactivity. Please re-authenticate to protect confidential records.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-medium text-sm rounded-xl transition-all duration-200 shadow-sm"
        >
          <Home className="w-4 h-4" />
          Return Home
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleLogin}
          className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm shadow-blue-500/20"
        >
          <LogIn className="w-4 h-4" />
          Log In Again
        </motion.button>
      </div>
    </motion.div>
  );
}
