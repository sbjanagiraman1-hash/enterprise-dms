import React from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Table, 
  File, 
  Video, 
  Archive,
  CheckCircle2,
  Info,
  User,
  MapPin,
  Calendar
} from 'lucide-react';

export default function PropertiesPanel({ file, onClose }) {
  const getLargeIcon = () => {
    const iconClass = "w-16 h-16";
    switch(file.type) {
      case 'folder': return <Folder className={`${iconClass} text-blue-500 fill-blue-500/20`} />;
      case 'pdf': return <FileText className={`${iconClass} text-red-500 fill-red-500/20`} />;
      case 'image': return <ImageIcon className={`${iconClass} text-emerald-500 fill-emerald-500/20`} />;
      case 'excel': return <Table className={`${iconClass} text-green-600 fill-green-600/20`} />;
      case 'video': return <Video className={`${iconClass} text-purple-500 fill-purple-500/20`} />;
      case 'zip': return <Archive className={`${iconClass} text-amber-500 fill-amber-500/20`} />;
      case 'word': return <FileText className={`${iconClass} text-blue-600 fill-blue-600/20`} />;
      default: return <File className={`${iconClass} text-slate-500 fill-slate-500/20`} />;
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' 
    });
  };

  return (
    <div className="w-full h-full bg-card dark:bg-slate-900 border-l border-border flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="font-semibold text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Info className="w-5 h-5 text-slate-500" />
          Properties
        </h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors">
            <Star className="w-5 h-5" />
          </button>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {getLargeIcon()}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 break-words w-full px-4">{file.name}</h3>
          <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">{file.type} • {file.size !== '-' ? file.size : 'Directory'}</p>
        </div>
        
        {file.ocrStatus === 'Success' && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 rounded-xl p-3 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400">OCR Processing Complete</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-500/80">Text is fully searchable</p>
            </div>
          </div>
        )}

        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Metadata</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{file.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500">Owner</p>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{file.owner}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500">Modified</p>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{formatDate(file.modified)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500">Created</p>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{formatDate(file.created)}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Activity Timeline</h4>
          <div className="relative pl-3 space-y-4 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
            <div className="relative">
              <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full -left-[21px] top-1.5 ring-4 ring-card"></div>
              <p className="text-sm text-slate-900 dark:text-slate-200 font-medium">Viewed File</p>
              <p className="text-xs text-slate-500">Just now • By You</p>
            </div>
            <div className="relative">
              <div className="absolute w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 rounded-full -left-[21px] top-1.5 ring-4 ring-card"></div>
              <p className="text-sm text-slate-900 dark:text-slate-200 font-medium">Uploaded New Version</p>
              <p className="text-xs text-slate-500">Aug 4, 2026 • By Jane Doe</p>
            </div>
            <div className="relative">
              <div className="absolute w-2.5 h-2.5 bg-emerald-500 rounded-full -left-[21px] top-1.5 ring-4 ring-card"></div>
              <p className="text-sm text-slate-900 dark:text-slate-200 font-medium">OCR Completed</p>
              <p className="text-xs text-slate-500">Aug 1, 2026 • System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
