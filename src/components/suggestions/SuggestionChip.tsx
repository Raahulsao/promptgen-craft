
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SuggestionChipProps } from '@/types/suggestions';
import { cn } from '@/lib/utils';

const chipColors = {
  'Coding/Tech': {
    default: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white",
    selected: "bg-gradient-to-r from-blue-500/30 to-blue-400/20 border-blue-400/50 text-blue-100 shadow-lg shadow-blue-500/25",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/20",
    glow: "shadow-blue-500/30",
  },
  'Academic/Research': {
    default: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white",
    selected: "bg-gradient-to-r from-purple-500/30 to-purple-400/20 border-purple-400/50 text-purple-100 shadow-lg shadow-purple-500/25",
    shadow: "shadow-purple-500/10 hover:shadow-purple-500/20",
    glow: "shadow-purple-500/30",
  },
  'Business': {
    default: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white",
    selected: "bg-gradient-to-r from-green-500/30 to-green-400/20 border-green-400/50 text-green-100 shadow-lg shadow-green-500/25",
    shadow: "shadow-green-500/10 hover:shadow-green-500/20",
    glow: "shadow-green-500/30",
  },
  'Healthcare': {
    default: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white",
    selected: "bg-gradient-to-r from-teal-500/30 to-teal-400/20 border-teal-400/50 text-teal-100 shadow-lg shadow-teal-500/25",
    shadow: "shadow-teal-500/10 hover:shadow-teal-500/20",
    glow: "shadow-teal-500/30",
  },
  'Legal': {
    default: "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white",
    selected: "bg-gradient-to-r from-gray-500/30 to-gray-400/20 border-gray-400/50 text-gray-100 shadow-lg shadow-gray-500/25",
    shadow: "shadow-gray-500/10 hover:shadow-gray-500/20",
    glow: "shadow-gray-500/30",
  },
};

const SuggestionChip: React.FC<SuggestionChipProps> = ({ 
  suggestion, 
  isSelected, 
  onToggle, 
  category 
}) => {
  const colors = chipColors[category as keyof typeof chipColors];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onToggle(suggestion)}
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200",
        "shadow-sm hover:shadow-md backdrop-blur-sm",
        colors.shadow,
        isSelected ? cn(colors.selected, colors.glow) : colors.default,
      )}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          <Check className="w-3 h-3" />
        </motion.div>
      )}
      <span className="truncate">{suggestion}</span>
    </motion.button>
  );
};

export default SuggestionChip;
