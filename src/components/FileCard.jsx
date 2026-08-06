import React from 'react';
import { 
  Folder, 
  FileText, 
  Image as ImageIcon, 
  Table, 
  File, 
  Video, 
  Archive,
  MoreVertical,
  Edit2,
  Move,
  Download,
  Share2,
  Trash2,
  Check
} from 'lucide-react';

export default function FileCard({ file, isSelected, onSelect, onViewDetails }) {
  const [showContextMenu, setShowContextMenu] = React.useState(false);

  const getIcon = () => {
    switch(file.type) {
      case 'folder': return <Folder className="w-10 h-10 text-blue-500 fill-blue-500/20" />;
      case 'pdf': return <FileText className="w-10 h-10 text-red-500 fill-red-500/20" />;
      case 'image': return <ImageIcon className="w-10 h-10 text-emerald-500 fill-emerald-500/20" />;
      case 'excel': return <Table className="w-10 h-10 text-green-600 fill-green-600/20" />;
      case 'video': return <Video className="w-10 h-10 text-purple-500 fill-purple-500/20" />;
      case 'zip': return <Archive className="w-10 h-10 text-amber-500 fill-amber-500/20" />;
      case 'word': return <FileText className="w-10 h-10 text-blue-600 fill-blue-600/20" />;
      default: return <File className="w-10 h-10 text-slate-500 fill-slate-500/20" />;
    }
  };

  const toggleSelection = (e) => {
    e.stopPropagation();
    onSelect(file.id);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div 
      onClick={() => onViewDetails(file)}
      onMouseLeave={() => setShowContextMenu(false)}
      className={`relative group bg-card dark:bg-slate-900 border rounded-xl p-4 transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.03] ${
        isSelected ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-border'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
          {getIcon()}
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <button 
            onClick={toggleSelection}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
              isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600 opacity-0 group-hover:opacity-100 hover:border-blue-500'
            }`}
          >
            {isSelected && <Check className="w-3.5 h-3.5" />}
          </button>
          
          <div className="relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setShowContextMenu(!showContextMenu); }}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-all"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            
            {showContextMenu && (
              <div className="absolute right-0 top-full mt-1 w-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-10 animate-in fade-in zoom-in-95 duration-100">
                <button className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200">
                  <Edit2 className="w-3.5 h-3.5" /> Rename
                </button>
                <button className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200">
                  <Move className="w-3.5 h-3.5" /> Move
                </button>
                <button className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
                <button className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200">
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>
                <button className="w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate text-sm mb-1" title={file.name}>
          {file.name}
        </h3>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{file.size !== '-' ? file.size : 'Folder'}</span>
          <span>{formatDate(file.modified)}</span>
        </div>
      </div>
    </div>
  );
}
