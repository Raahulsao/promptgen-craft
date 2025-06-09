
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { Copy, RefreshCw, CheckCircle, Sparkles, Download } from 'lucide-react';

interface ResultCardProps {
  enhancedPrompt: string;
  onRegenerate?: () => void;
  isLoading?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  enhancedPrompt, 
  onRegenerate,
  isLoading = false
}) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(enhancedPrompt);
      setIsCopied(true);
      toast.success("Copied to clipboard!");
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
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
  
  return (
    <div className="max-w-4xl mx-auto relative group animate-fade-in">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
      
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl rounded-3xl">
        <CardHeader className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-white/20 p-8">
          <CardTitle className="text-2xl text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Your Enhanced Prompt</h3>
                <p className="text-sm text-purple-300 font-normal">AI-Optimized & Ready to Use</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-300 font-medium">Ready</span>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="bg-black/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="text-gray-200 text-base leading-relaxed space-y-3">
              {formatPrompt(enhancedPrompt)}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col sm:flex-row gap-4 bg-gradient-to-r from-white/5 to-white/10 p-8 border-t border-white/20">
          <Button
            onClick={handleCopyToClipboard}
            className="flex-1 sm:flex-none bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/25 rounded-xl px-6 transition-all duration-300 hover:scale-105"
          >
            {isCopied ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Prompt
              </>
            )}
          </Button>
          
          <Button
            onClick={handleCopyToClipboard}
            variant="outline"
            className="flex-1 sm:flex-none bg-transparent border-white/20 hover:bg-white/10 text-white rounded-xl px-6 transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          
          {onRegenerate && (
            <Button 
              onClick={onRegenerate}
              variant="outline"
              className="flex-1 sm:flex-none bg-transparent border-white/20 hover:bg-white/10 text-white rounded-xl px-6 transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Regenerating..." : "Regenerate"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultCard;
