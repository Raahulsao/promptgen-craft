
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

interface PromptSelectionSectionProps {
  prompts: string[];
  onSelectPrompt: (index: number) => void;
  onCopyPrompt: (prompt: string) => void;
  error?: string;
}

const PromptSelectionSection: React.FC<PromptSelectionSectionProps> = ({
  prompts,
  onSelectPrompt,
  onCopyPrompt,
  error
}) => {
  const getVariationName = (index: number): string => {
    if (index === 0) return "Enhanced Version";
    if (index === 1) return "Alternative Approach";
    return `Variation ${index + 1}`;
  };

  const formatPrompt = (prompt: string): JSX.Element => {
    const paragraphs = prompt.split('\n').filter(p => p.trim() !== '');
    
    return (
      <>
        {paragraphs.map((paragraph, i) => {
          const isNumberedItem = /^\d+[\.\)]\s/.test(paragraph);
          const isBulletedItem = /^[\-\*\•]\s/.test(paragraph);
          
          if (isNumberedItem || isBulletedItem) {
            return <p key={i} className="mb-3 text-left leading-relaxed">{paragraph}</p>;
          }
          
          return <p key={i} className="mb-4 text-left leading-relaxed">{paragraph}</p>;
        })}
      </>
    );
  };

  if (error) {
    return (
      <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
        <Alert variant="destructive" className="bg-red-900/20 border-red-500/30 text-white backdrop-blur-sm rounded-2xl">
          <AlertTitle className="text-xl mb-3 flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            API Connection Error
          </AlertTitle>
          <AlertDescription className="text-gray-300 space-y-4">
            <p>{error}</p>
            
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700 my-4 font-mono text-sm">
              <p className="mb-2 text-white/70">To run the Python API server:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-400">
                <li>Open a terminal or command prompt</li>
                <li>Navigate to the <span className="text-purple-400">api</span> folder in your project</li>
                <li>Run: <span className="bg-gray-800 px-2 py-1 rounded text-white">python -m pip install -r requirements.txt</span></li>
                <li>Run: <span className="bg-gray-800 px-2 py-1 rounded text-white">python main.py</span></li>
              </ol>
            </div>
            
            <p>Make sure your GEMINI_API_KEY is properly set in the api/.env file.</p>
            
            <div className="flex gap-4 mt-4">
              <Button 
                variant="outline"
                className="border-purple-800 text-white hover:bg-purple-900/20"
                onClick={() => window.location.reload()}
              >
                Retry Connection
              </Button>
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => window.open('https://ai.google.dev/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Get Gemini API Key
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">AI-Generated Variants</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Choose Your Perfect <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Prompt Style</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our AI has generated multiple optimized versions of your prompt. Select the one that best fits your needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
        {prompts.map((prompt, index) => (
          <div key={index} className="group relative">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col h-full min-h-[500px]">
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-purple-600/10 to-pink-600/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{getVariationName(index)}</h3>
                    <p className="text-xs text-purple-300">AI-Optimized</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-green-400 font-medium">Ready</span>
                </div>
              </div>
              
              {/* Prompt content - takes up most space */}
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="text-gray-200 leading-relaxed text-base space-y-3">
                  {formatPrompt(prompt)}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-white/10 bg-gradient-to-r from-white/5 to-white/10 flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl"
                  onClick={() => onCopyPrompt(prompt)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button 
                  onClick={() => onSelectPrompt(index)} 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/25 rounded-xl px-6 transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Select This Prompt
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptSelectionSection;
