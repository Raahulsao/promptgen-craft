import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '@/components/Header';
import PromptForm from '@/components/PromptForm';
import ResultCard from '@/components/ResultCard';
import PromptSelectionSection from '@/components/PromptSelectionSection';
import TemplateSection from '@/components/TemplateSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LogoCloud from '@/components/LogoCloud';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HistoryList from '@/components/HistoryList';
import RecentPromptsMenu from '@/components/RecentPromptsMenu';
import { PromptCategory, PromptItem } from '@/types';
import { getPromptHistory, savePromptToHistory, clearPromptHistory } from '@/lib/storage';
import { toast } from '@/components/ui/sonner';

const enhancePrompt = async (prompt: string, category: string): Promise<string[]> => {
  try {
    console.log("Calling API with:", { prompt, category });
    
    // Check if the API server is running first
    try {
      const healthCheck = await fetch('http://localhost:8000/health', { 
        signal: AbortSignal.timeout(5000)
      });
      
      if (!healthCheck.ok) {
        throw new Error(`API health check failed: ${healthCheck.status}`);
      }
      
      console.log("API health check passed");
    } catch (healthError) {
      console.error("API server may not be running:", healthError);
      throw new Error("API server is not responding. Please ensure the backend is running at http://localhost:8000");
    }

    // Make the primary API call
    const response = await fetch('http://localhost:8000/generate-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        category: category
      }),
      signal: AbortSignal.timeout(15000)
    });
    
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorMessage;
      } catch (e) {
        // If response isn't valid JSON, use the default error message
      }
      throw new Error(`API error: ${errorMessage}`);
    }
    
    const data = await response.json();
    console.log("Primary API Response:", data);
    
    // Get the primary enhanced prompt
    const primaryPrompt = data.enhanced_prompt;
    
    // Create a secondary prompt through a second API call
    let secondaryPrompt = primaryPrompt;
    
    try {
      // Make a second API call with a slightly different request
      const alternativeResponse = await fetch('http://localhost:8000/generate-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Alternative version of: ${prompt}`,
          category: category
        }),
        signal: AbortSignal.timeout(15000)
      });
      
      if (alternativeResponse.ok) {
        const alternativeData = await alternativeResponse.json();
        console.log("Secondary API Response:", alternativeData);
        secondaryPrompt = alternativeData.enhanced_prompt;
      } else {
        console.warn("Could not fetch alternative prompt");
        // Fall back to primary prompt with modification
        secondaryPrompt = `${primaryPrompt}\n\n[Alternative approach]`;
      }
    } catch (altError) {
      console.warn("Could not fetch alternative prompt:", altError);
      // Fall back to primary prompt with a slight modification
      secondaryPrompt = `${primaryPrompt}\n\n[Alternative perspective]`;
    }
    
    return [primaryPrompt, secondaryPrompt];
  } catch (error) {
    console.error("API call failed:", error);
    // Enhanced error message with troubleshooting tips
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    
    // Provide more helpful error messages based on common error types
    if (errorMsg.includes("Failed to fetch") || errorMsg.includes("NetworkError")) {
      throw new Error(`Connection failed: The API server at http://localhost:8000 is not accessible. Please ensure the backend is running.`);
    } else {
      throw new Error(`${errorMsg} (Make sure the Python API server is running on port 8000)`);
    }
  }
};

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputPrompt, setInputPrompt] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>('General');
  const [enhancedPrompts, setEnhancedPrompts] = useState<string[]>([]);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(null);
  const [history, setHistory] = useState<PromptItem[]>([]);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Load history from localStorage on component mount
  useEffect(() => {
    setHistory(getPromptHistory());
  }, []);
  
  const handleGeneratePrompt = async (prompt: string, category: PromptCategory) => {
    try {
      setInputPrompt(prompt);
      setSelectedCategory(category);
      setIsLoading(true);
      setSelectedPromptIndex(null);
      setApiError(null); // Reset any previous errors
      
      // Call the enhanced API function that returns two prompt variations
      const results = await enhancePrompt(prompt, category);
      setEnhancedPrompts(results);
      
    } catch (error) {
      console.error("Error generating prompt:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setApiError(errorMessage);
      toast.error(`Failed to generate prompt: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSelectPrompt = (index: number) => {
    setSelectedPromptIndex(index);
    
    // Save to history
    const newPromptItem: PromptItem = {
      id: uuidv4(),
      originalPrompt: inputPrompt,
      enhancedPrompt: enhancedPrompts[index],
      category: selectedCategory,
      timestamp: Date.now()
    };
    
    savePromptToHistory(newPromptItem);
    setHistory(getPromptHistory());
    
    toast.success("Prompt selected and saved to history");
  };
  
  const handleRegeneratePrompt = () => {
    if (inputPrompt) {
      handleGeneratePrompt(inputPrompt, selectedCategory);
    }
  };
  
  const handleSelectFromHistory = (item: PromptItem) => {
    setInputPrompt(item.originalPrompt);
    setSelectedCategory(item.category as PromptCategory);
    setEnhancedPrompts([item.enhancedPrompt]);
    setSelectedPromptIndex(0);
  };
  
  const handleClearHistory = () => {
    clearPromptHistory();
    setHistory([]);
    toast.success("History cleared");
  };
  
  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard");
  };
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-[#0f0a19]">
      <Header />
      
      {/* Recent Prompts Menu */}
      <RecentPromptsMenu
        history={history}
        onSelect={handleSelectFromHistory}
        onClear={handleClearHistory}
        isOpen={isMenuOpen}
        onToggle={handleToggleMenu}
      />
      
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto -mt-10">
        <PromptForm onSubmit={handleGeneratePrompt} isLoading={isLoading} />
        
        <div className="mt-12 space-y-10 animate-fadeIn">
          {enhancedPrompts.length > 0 && selectedPromptIndex === null ? (
            <PromptSelectionSection 
              prompts={enhancedPrompts}
              onSelectPrompt={handleSelectPrompt}
              onCopyPrompt={handleCopyPrompt}
              error={apiError || undefined}
            />
          ) : apiError && enhancedPrompts.length === 0 ? (
            <PromptSelectionSection 
              prompts={[]}
              onSelectPrompt={handleSelectPrompt}
              onCopyPrompt={handleCopyPrompt}
              error={apiError}
            />
          ) : null}
          
          {selectedPromptIndex !== null ? (
            <ResultCard 
              enhancedPrompt={enhancedPrompts[selectedPromptIndex!]}
              onRegenerate={handleRegeneratePrompt}
              isLoading={isLoading}
            />
          ) : null}
          
          {/* Show history only if there are items and menu is not open */}
          {history.length > 0 && !isMenuOpen && (
            <HistoryList 
              history={history} 
              onSelect={handleSelectFromHistory} 
              onClear={handleClearHistory} 
            />
          )}
        </div>
      </div>
      
      {/* New sections */}
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
        <TemplateSection />
        <FeaturesSection />
        <TestimonialsSection />
        <LogoCloud />
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
