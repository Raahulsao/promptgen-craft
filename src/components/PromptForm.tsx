import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PromptCategory } from '@/types';
import { Send, Sparkles, Wand2 } from "lucide-react";
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useSuggestionState } from '@/hooks/use-suggestion-state';
import SmartSuggestionCard from '@/components/suggestions/SmartSuggestionCard';
import { suggestionData } from '@/lib/suggestion-data';

interface PromptFormProps {
  onSubmit: (prompt: string, category: PromptCategory) => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState<PromptCategory>('General');
  const [showTypingEffect, setShowTypingEffect] = useState(false);
  
  // Smart suggestions state
  const {
    selectedSuggestions,
    detectedCategory,
    suggestionsBySection,
    handleSuggestionToggle,
    handleClearAll,
    getEnhancedPrompt
  } = useSuggestionState(prompt);
  
  // Sample prompts for demonstration
  const samplePrompts = [
    "Write a creative story about space exploration and the mysteries of the universe...",
    "Create a comprehensive marketing strategy for a sustainable fashion brand...",
    "Develop a detailed business plan for an AI-powered healthcare startup...",
    "Design an innovative mobile app concept that solves everyday problems..."
  ];
  
  const [currentSampleIndex, setCurrentSampleIndex] = useState(0);
  
  // Typing effect for placeholder/sample text
  const { displayedText, isTyping } = useTypingEffect({
    text: showTypingEffect ? samplePrompts[currentSampleIndex] : '',
    speed: 30,
    enabled: showTypingEffect && !prompt
  });
  
  // Cycle through sample prompts when component mounts or when typing completes
  useEffect(() => {
    if (!prompt) {
      setShowTypingEffect(true);
      
      const sampleCycleTimer = setInterval(() => {
        setCurrentSampleIndex((prev) => (prev + 1) % samplePrompts.length);
      }, 8000); // Change sample every 8 seconds
      
      return () => clearInterval(sampleCycleTimer);
    } else {
      setShowTypingEffect(false);
    }
  }, [prompt, samplePrompts.length]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      const enhancedPrompt = getEnhancedPrompt(prompt.trim());
      onSubmit(enhancedPrompt, category);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    setShowTypingEffect(false);
  };

  const categories: PromptCategory[] = [
    'General',
    'Social Media',
    'Marketing',
    'Coding',
    'Writing',
    'Business',
    'Creative',
    'Academic'
  ];

  return (
    <div className="relative max-w-4xl mx-auto mb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
      
      <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Textarea
                placeholder={!prompt && showTypingEffect ? '' : "Describe what you want your AI to do... (e.g., Write a creative story about space exploration)"}
                className="min-h-32 bg-white/10 border-white/20 rounded-2xl text-white placeholder:text-gray-400 resize-none text-lg p-6 focus:border-purple-400/50 focus:bg-white/15 transition-all duration-300"
                value={prompt}
                onChange={handleTextareaChange}
                required
              />
              
              {/* Typing effect overlay */}
              {!prompt && showTypingEffect && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="p-6 text-lg text-gray-400">
                    {displayedText}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-6 bg-purple-400 ml-1 animate-pulse"></span>
                    )}
                  </div>
                </div>
              )}
              
              {isLoading && (
                <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm font-medium">AI is crafting your prompts...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-4 py-2 border border-purple-500/30">
                <Wand2 className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">AI-Enhanced Generation</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={category} onValueChange={(value) => setCategory(value as PromptCategory)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white w-48 rounded-xl hover:bg-white/15 transition-all duration-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f1534] border-white/20 rounded-xl">
                  {categories.map((cat) => (
                    <SelectItem 
                      key={cat} 
                      value={cat}
                      className="text-white hover:bg-white/10 focus:bg-white/10 rounded-lg"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/25 rounded-xl px-8 py-3 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                disabled={isLoading || !prompt.trim()}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Generate Prompts
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
        
        {/* Smart Suggestion Card */}
        {detectedCategory && prompt.trim().length > 5 && (
          <div className="mt-6">
            <SmartSuggestionCard
              category={detectedCategory}
              suggestionsBySection={suggestionsBySection}
              selectedSuggestions={selectedSuggestions}
              onSuggestionToggle={handleSuggestionToggle}
              onClearAll={handleClearAll}
            />
          </div>
        )}
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full shadow-lg">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
