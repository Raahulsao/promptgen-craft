
import React, { useState } from 'react';
import { PromptItem } from '@/types';
import { Button } from '@/components/ui/button';
import { 
  History, 
  Clock, 
  ChevronRight, 
  Trash2, 
  X,
  Sparkles,
  Copy
} from 'lucide-react';
import { format } from 'date-fns';

interface RecentPromptsMenuProps {
  history: PromptItem[];
  onSelect: (item: PromptItem) => void;
  onClear: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const RecentPromptsMenu: React.FC<RecentPromptsMenuProps> = ({
  history,
  onSelect,
  onClear,
  isOpen,
  onToggle
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleCopyPrompt = (prompt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt);
  };

  return (
    <>
      {/* Toggle Button - Fixed position */}
      <button
        onClick={onToggle}
        className={`
          fixed top-1/2 left-4 -translate-y-1/2 z-50
          p-3 rounded-2xl transition-all duration-500 hover:scale-110
          backdrop-blur-xl border border-white/20 shadow-2xl
          ${isOpen 
            ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white shadow-purple-500/25' 
            : 'bg-black/40 text-gray-400 hover:text-white hover:bg-white/10'
          }
        `}
      >
        <History className="h-5 w-5" />
      </button>

      {/* Menu Panel */}
      <div className={`
        fixed top-0 left-0 h-full z-40 transition-all duration-500 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full w-80 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border-r border-white/10 shadow-2xl overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-0 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Header */}
          <div className="relative p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Recent Prompts</h3>
              </div>
              <button
                onClick={onToggle}
                className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-400">Quick access to your prompt history</p>
          </div>

          {/* Menu Content */}
          <div className="relative flex-1 overflow-hidden">
            {history.length > 0 ? (
              <>
                {/* Clear Button */}
                <div className="p-4 border-b border-white/5">
                  <Button
                    onClick={onClear}
                    variant="ghost"
                    size="sm"
                    className="w-full text-gray-400 hover:text-red-400 hover:bg-red-400/10 justify-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear All History
                  </Button>
                </div>

                {/* History List */}
                <div className="h-full overflow-y-auto no-scrollbar">
                  <div className="p-2">
                    {history.map((item, index) => (
                      <div
                        key={item.id}
                        className="mb-2 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <button
                          onClick={() => onSelect(item)}
                          className="group w-full text-left p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/5 border border-transparent hover:border-white/10 relative overflow-hidden"
                        >
                          {/* Hover effect background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          
                          <div className="relative">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-300 group-hover:text-white truncate text-sm">
                                  {item.originalPrompt}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="inline-flex items-center gap-1 text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                                    <Sparkles className="h-3 w-3" />
                                    {item.category}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {format(item.timestamp, 'MMM d, h:mm a')}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={(e) => handleCopyPrompt(item.enhancedPrompt, e)}
                                  className={`
                                    p-2 rounded-lg transition-all duration-200
                                    ${hoveredItem === item.id 
                                      ? 'opacity-100 bg-white/10 hover:bg-white/20' 
                                      : 'opacity-0 group-hover:opacity-100'
                                    }
                                  `}
                                >
                                  <Copy className="h-3 w-3 text-gray-400 hover:text-white" />
                                </button>
                                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 mb-4">
                  <History className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">No History Yet</h4>
                <p className="text-sm text-gray-400 max-w-48">
                  Your recent prompts will appear here for quick access
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 animate-fade-in"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default RecentPromptsMenu;
