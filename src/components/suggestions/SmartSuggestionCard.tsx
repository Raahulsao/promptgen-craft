"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Building, Heart, Scale, Sparkles } from 'lucide-react';
import SuggestionChip from './SuggestionChip';
import { cn } from '@/lib/utils';

interface SmartSuggestionCardProps {
  category: string;
  suggestionsBySection: { [section: string]: string[] };
  selectedSuggestions: string[];
  onSuggestionToggle: (suggestion: string) => void;
  onClearAll: () => void;
}

const categoryIcons = {
  'Coding/Tech': Code,
  'Academic/Research': GraduationCap,
  'Business': Building,
  'Healthcare': Heart,
  'Legal': Scale
};

const categoryColors = {
  'Coding/Tech': {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-100",
    accent: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500/20 to-blue-400/5",
    glow: "shadow-blue-500/20",
  },
  'Academic/Research': {
    bg: "bg-purple-50 dark:bg-purple-950/20",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-900 dark:text-purple-100",
    accent: "text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500/20 to-purple-400/5",
    glow: "shadow-purple-500/20",
  },
  'Business': {
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-900 dark:text-green-100",
    accent: "text-green-600 dark:text-green-400",
    gradient: "from-green-500/20 to-green-400/5",
    glow: "shadow-green-500/20",
  },
  'Healthcare': {
    bg: "bg-teal-50 dark:bg-teal-950/20",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-900 dark:text-teal-100",
    accent: "text-teal-600 dark:text-teal-400",
    gradient: "from-teal-500/20 to-teal-400/5",
    glow: "shadow-teal-500/20",
  },
  'Legal': {
    bg: "bg-gray-50 dark:bg-gray-950/20",
    border: "border-gray-200 dark:border-gray-800",
    text: "text-gray-900 dark:text-gray-100",
    accent: "text-gray-600 dark:text-gray-400",
    gradient: "from-gray-500/20 to-gray-400/5",
    glow: "shadow-gray-500/20",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const SmartSuggestionCard: React.FC<SmartSuggestionCardProps> = ({
  category,
  suggestionsBySection,
  selectedSuggestions,
  onSuggestionToggle,
  onClearAll
}) => {
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(false);

  const handleChipToggle = (suggestion: string) => {
    // Create sparkle effect at random position
    setSparklePosition({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 700);

    onSuggestionToggle(suggestion);
  };

  const Icon = categoryIcons[category as keyof typeof categoryIcons];
  const colors = categoryColors[category as keyof typeof categoryColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "mt-4 p-6 rounded-2xl border shadow-xl transition-all duration-300",
        "bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-white/10",
        "relative overflow-hidden"
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Sparkle effect */}
      {showSparkle && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute pointer-events-none z-10"
          style={{ left: `${sparklePosition.x}%`, top: `${sparklePosition.y}%` }}
        >
          <Sparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30"
          >
            {Icon && <Icon className="h-5 w-5 text-purple-400" />}
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold text-white gradient-text">
              {category} Suggestions
            </h3>
            <p className="text-sm text-gray-400">Smart suggestions based on your prompt</p>
          </div>
        </div>

        {selectedSuggestions.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClearAll}
            className="text-xs px-3 py-1.5 rounded-full border transition-all duration-300 bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white shadow-sm hover:shadow-md"
          >
            Clear all ({selectedSuggestions.length})
          </motion.button>
        )}
      </motion.div>

      {/* Suggestions Grid - Display all sections */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(suggestionsBySection).map(([sectionName, sectionItems]) => (
          <motion.div key={sectionName} variants={item} className="space-y-3">
            <h4 className="font-medium text-sm uppercase tracking-wide text-purple-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-current inline-block"></span>
              {sectionName}
            </h4>
            <div className="flex flex-wrap gap-2">
              {sectionItems.map((item: string) => (
                <SuggestionChip
                  key={item}
                  suggestion={item}
                  isSelected={selectedSuggestions.includes(item)}
                  onToggle={handleChipToggle}
                  category={category}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Selected Count */}
      {selectedSuggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between"
        >
          <span className="text-sm text-gray-300">
            {selectedSuggestions.length} suggestion{selectedSuggestions.length !== 1 ? 's' : ''} selected
          </span>
          <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
            Ready to enhance
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SmartSuggestionCard;
