import { useState, useEffect, useCallback } from 'react';
import { detectCategory, getSuggestionsByCategory } from '@/lib/category-detector';
import { DetectedCategory } from '@/types/suggestions';

export const useSuggestionState = (inputValue: string) => {
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [detectedCategory, setDetectedCategory] = useState<DetectedCategory>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsBySection, setSuggestionsBySection] = useState<{ [section: string]: string[] }>({});

  // Debounced category detection
  useEffect(() => {
    const timer = setTimeout(() => {
      const category = detectCategory(inputValue);
      setDetectedCategory(category);
      
      // Get suggestions for the detected category
      if (category) {
        const categoryData = getSuggestionsByCategory(category);
        if (categoryData) {
          // Keep the structured data for sections
          setSuggestionsBySection(categoryData);
          // Also flatten for backwards compatibility
          const allSuggestions = Object.values(categoryData).flat();
          setSuggestions(allSuggestions);
        }
      } else {
        setSuggestions([]);
        setSuggestionsBySection({});
      }
      
      // Clear selections when category changes or input is cleared
      if (!category || category !== detectedCategory) {
        setSelectedSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, detectedCategory]);

  const handleSuggestionToggle = useCallback((suggestion: string) => {
    setSelectedSuggestions(prev => 
      prev.includes(suggestion)
        ? prev.filter(s => s !== suggestion)
        : [...prev, suggestion]
    );
  }, []);

  const handleClearAll = useCallback(() => {
    setSelectedSuggestions([]);
  }, []);

  const getEnhancedPrompt = useCallback((originalPrompt: string) => {
    if (selectedSuggestions.length === 0) return originalPrompt;
    
    return `${originalPrompt}\n\nAdditional requirements: ${selectedSuggestions.join(", ")}`;
  }, [selectedSuggestions]);

  return {
    selectedSuggestions,
    detectedCategory,
    suggestions,
    suggestionsBySection,
    handleSuggestionToggle,
    handleClearAll,
    getEnhancedPrompt
  };
};
