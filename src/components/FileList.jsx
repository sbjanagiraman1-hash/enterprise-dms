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
  Check
} from 'lucide-react';

export default function FileList({ files, selectedFiles, onSelect, onViewDetails }) {
  
  const getIcon = (type) => {
    switch(type) {
      case 'folder': return <Folder className="w-5 h-5 text-blue-500 fill-blue-500/20" />;
      case 'pdf': return <FileText className="w-5 h-5 text-red-500 fill-red-500/20" />;
      case 'image': return <ImageIcon className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />;
      case 'excel': return <Table className="w-5 h-5 text-green-600 fill-green-600/20" />;
      case 'video': return <Video className="w-5 h-5 text-purple-500 fill-purple-500/20" />;
      case 'zip': return <Archive className="w-5 h-5 text-amber-500 fill-amber-500/20" />;
      case 'word': return <FileText className="w-5 h-5 text-blue-600 fill-blue-600/20" />;
      default: return <File className="w-5 h-5 text-slate-500 fill-slate-500/20" />;
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-card dark:bg-slate-900 border border-border rounded-xl overflow-hidden shadow-sm pb-20 sm:pb-0">
      
      {/* Mobile Card Layout */}
      <div className="block md:hidden overflow-y-auto p-4 space-y-3">
        {files.map(file => {
          const isSelected = selectedFiles.includes(file.id);
          return (
            <div 
              key={file.id} 
              onClick={() => onViewDetails(file)}
              className={`border border-border rounded-xl p-3 cursor-pointer transition-colors ${isSelected ? 'bg-blue-50/50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-card dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
            >
              <div className="flex items-start gap-3">
                <div onClick={(e) => { e.stopPropagation(); onSelect(file.id); }} className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                  isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                }`}>
                  {isSelected && <Check className="w-3 h-3" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon(file.type)}
                    <span className="font-medium text-slate-900 dark:text-slate-100 truncate">{file.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                    <span>{file.owner}</span>
                    <span>{formatDate(file.modified)}</span>
                  </div>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); /* trigger menu */ }}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 shrink-0"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop/Tablet Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-b border-border">
            <tr>
              <th className="px-4 py-3 font-medium w-12 text-center">
                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500" />
              </th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Owner</th>
              <th className="px-4 py-3 font-medium">Modified</th>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {files.map(file => {
              const isSelected = selectedFiles.includes(file.id);
              return (
                <tr 
                  key={file.id}
                  onClick={() => onViewDetails(file)}
                  className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group ${isSelected ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                >
                  <td className="px-4 py-3 text-center" onClick={(e) => { e.stopPropagation(); onSelect(file.id); }}>
                    <div className={`w-4 h-4 mx-auto rounded border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600 group-hover:border-blue-500'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {getIcon(file.type)}
                      <span className="font-medium text-slate-900 dark:text-slate-100">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{file.owner}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{formatDate(file.modified)}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{file.size !== '-' ? file.size : '--'}</td>
                  <td className="px-4 py-3 text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); /* trigger menu */ }}
                      className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
