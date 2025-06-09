
export interface SuggestionData {
  [category: string]: {
    [section: string]: string[];
  };
}

export interface CategoryKeywords {
  [key: string]: string[];
}

export interface SuggestionCardProps {
  category: string;
  suggestionsBySection: { [section: string]: string[] };
  selectedSuggestions: string[];
  onSuggestionToggle: (suggestion: string) => void;
  onClearAll: () => void;
}

export interface SuggestionChipProps {
  suggestion: string;
  isSelected: boolean;
  onToggle: (suggestion: string) => void;
  category: string;
}

export type DetectedCategory = 'Coding/Tech' | 'Academic/Research' | 'Business' | 'Healthcare' | 'Legal' | null;
