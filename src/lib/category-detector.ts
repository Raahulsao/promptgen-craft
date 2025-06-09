
import { CategoryKeywords, DetectedCategory } from '@/types/suggestions';
import { suggestionData } from './suggestion-data';

export const categoryKeywords: CategoryKeywords = {
  'Coding/Tech': [
    'react', 'javascript', 'python', 'code', 'app', 'website', 'api', 'database', 
    'frontend', 'backend', 'component', 'function', 'algorithm', 'programming', 
    'html', 'css', 'node', 'express', 'django', 'flask', 'mongodb', 'sql', 
    'github', 'git', 'deployment', 'server', 'client', 'framework', 'library', 
    'dashboard', 'ui', 'ux', 'responsive', 'mobile', 'web', 'software'
  ],
  'Academic/Research': [
    'research', 'paper', 'thesis', 'study', 'analysis', 'academic', 'university', 
    'college', 'student', 'professor', 'citation', 'bibliography', 'methodology', 
    'literature', 'review', 'abstract', 'conclusion', 'hypothesis', 'experiment', 
    'survey', 'questionnaire', 'data', 'statistics', 'scholarly', 'journal'
  ],
  'Business': [
    'business', 'company', 'startup', 'entrepreneur', 'marketing', 'sales', 
    'revenue', 'profit', 'customer', 'client', 'service', 'product', 'brand', 
    'strategy', 'plan', 'growth', 'investment', 'finance', 'budget', 'team', 
    'management', 'leadership', 'corporate', 'enterprise', 'commerce', 'trade'
  ],
  'Healthcare': [
    'health', 'medical', 'doctor', 'patient', 'hospital', 'clinic', 'treatment', 
    'diagnosis', 'medicine', 'pharmacy', 'nurse', 'healthcare', 'wellness', 
    'fitness', 'therapy', 'appointment', 'symptom', 'disease', 'care', 
    'mental health', 'physical', 'rehabilitation', 'surgery', 'medication'
  ],
  'Legal': [
    'legal', 'law', 'lawyer', 'attorney', 'court', 'case', 'contract', 
    'agreement', 'compliance', 'regulation', 'policy', 'terms', 'conditions', 
    'privacy', 'gdpr', 'copyright', 'patent', 'trademark', 'litigation', 
    'dispute', 'consultation', 'advice', 'counsel', 'jurisdiction', 'statute', 'clause'
  ]
};

export function detectCategory(prompt: string): DetectedCategory {
  if (!prompt || prompt.trim().length < 5) return null;
  
  const lowercasePrompt = prompt.toLowerCase();
  const scores: { [key: string]: number } = {};

  // Calculate scores for each category by counting keyword matches
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    scores[category] = keywords.reduce((score, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi");
      const matches = lowercasePrompt.match(regex);
      return score + (matches ? matches.length : 0);
    }, 0);
  });

  // Return category with highest score, or null if no matches
  const maxScore = Math.max(...Object.values(scores));
  if (maxScore === 0) return null;

  const detectedCategory = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];
  return detectedCategory as DetectedCategory || null;
}

export function getSuggestionsByCategory(category: string) {
  return suggestionData[category] || null;
}
