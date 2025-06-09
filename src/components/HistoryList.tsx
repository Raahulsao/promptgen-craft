
import React from 'react';
import { PromptItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { 
  Trash2, 
  History,
} from 'lucide-react';

interface HistoryListProps {
  history: PromptItem[];
  onSelect: (item: PromptItem) => void;
  onClear: () => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onSelect, onClear }) => {
  return (
    <div className="animated-border">
      <Card className="border-none bg-[#1f1534]/80 backdrop-blur-md overflow-hidden mt-8 shadow-xl">
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <History className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-medium text-gray-300">Recent Prompts</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="text-gray-500 hover:text-red-400 hover:bg-red-400/10"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
        <div className="max-h-[300px] overflow-y-auto no-scrollbar">
          <div className="divide-y divide-white/10">
            {history.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                className="w-full text-left p-4 hover:bg-white/5 focus-visible:bg-white/5 transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-300 truncate">{item.originalPrompt}</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-purple-400/80 px-2 py-0.5 bg-purple-500/10 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {format(item.timestamp, 'MMM d, h:mm a')}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HistoryList;
