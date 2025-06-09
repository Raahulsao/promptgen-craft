
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Sparkles, Code2, PenTool, Image, Calculator, Target, Brain } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface TemplateCard {
  title: string;
  description: string;
  example: string;
  icon: React.ReactNode;
  tag: string;
}

const TemplateSection: React.FC = () => {
  const handleCopyTemplate = (templateText: string) => {
    navigator.clipboard.writeText(templateText);
    toast.success("Template copied to clipboard!");
  };
  
  const formatPrompt = (prompt: string): JSX.Element => {
    const paragraphs = prompt.split('\n').filter(p => p.trim() !== '');
    
    return (
      <>
        {paragraphs.map((paragraph, i) => {
          const isNumberedItem = /^\d+[\.\)]\s/.test(paragraph);
          const isBulletedItem = /^[\-\*\•]\s/.test(paragraph);
          
          if (isNumberedItem || isBulletedItem) {
            return <p key={i} className="mb-2 text-left leading-relaxed">{paragraph}</p>;
          }
          
          return <p key={i} className="mb-3 text-left leading-relaxed">{paragraph}</p>;
        })}
      </>
    );
  };
  
  const templateCards: TemplateCard[] = [
    {
      title: "Creative Design",
      description: "Generate stunning visual concepts with AI precision",
      example: "Create a futuristic user interface design for a space exploration app with holographic elements and zero-gravity navigation.\n\n1. Design floating interface panels with glassmorphism effects\n2. Incorporate 3D star maps with interactive celestial bodies\n3. Add gesture-based controls for weightless environment\n4. Include real-time mission data visualization",
      icon: <PenTool className="h-5 w-5" />,
      tag: "Creative"
    },
    {
      title: "Advanced Coding",
      description: "Build complex applications with intelligent assistance",
      example: "Develop a real-time collaborative code editor with AI-powered suggestions and live debugging capabilities.\n\n1. Implement WebSocket-based real-time synchronization\n2. Add intelligent code completion using machine learning\n3. Include automated testing and error detection\n4. Create collaborative debugging with shared breakpoints",
      icon: <Code2 className="h-5 w-5" />,
      tag: "Development"
    },
    {
      title: "AI Image Generation",
      description: "Craft detailed prompts for stunning visual creations",
      example: "Generate a cyberpunk cityscape at sunset with neon-lit skyscrapers reflecting in rain-soaked streets below.\n\n1. Include flying vehicles with glowing trails\n2. Add holographic advertisements floating between buildings\n3. Create atmospheric fog with volumetric lighting\n4. Incorporate detailed reflections on wet surfaces",
      icon: <Image className="h-5 w-5" />,
      tag: "Visual AI"
    },
    {
      title: "Mathematical Solutions",
      description: "Solve complex problems with step-by-step clarity",
      example: "Solve the optimization problem for maximizing profit in a multi-variable production scenario with constraints.\n\n1. Define objective function and constraint equations\n2. Apply Lagrange multiplier method for optimization\n3. Verify solutions using second-derivative test\n4. Interpret results in business context with sensitivity analysis",
      icon: <Calculator className="h-5 w-5" />,
      tag: "Analytics"
    },
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategies with AI insights",
      example: "Create a comprehensive digital transformation strategy for a traditional retail business transitioning to e-commerce.\n\n1. Analyze current market position and competitive landscape\n2. Identify key technology infrastructure requirements\n3. Develop phased implementation timeline with milestones\n4. Create risk mitigation strategies and success metrics",
      icon: <Target className="h-5 w-5" />,
      tag: "Business"
    },
    {
      title: "Content Enhancement",
      description: "Transform ideas into compelling narratives",
      example: "Transform a basic product description into an engaging story that connects emotionally with customers.\n\n1. Identify the product's unique value proposition and benefits\n2. Create a narrative arc that addresses customer pain points\n3. Incorporate sensory details and emotional triggers\n4. Include social proof and compelling call-to-action",
      icon: <Brain className="h-5 w-5" />,
      tag: "Marketing"
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden" id="templates">
      {/* Minimal background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-pink-900/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-slate-300 font-medium">AI-Powered Templates</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Prompt Templates</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of premium prompt templates, designed by AI experts to deliver exceptional results across various domains.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          {templateCards.map((card, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full min-h-[520px]">
                {/* Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs py-1 px-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 font-medium">
                          {card.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
                </div>
                
                {/* Prompt Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-700/30 h-full backdrop-blur-sm">
                    <div className="text-slate-200 text-sm leading-relaxed space-y-2">
                      {formatPrompt(card.example)}
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 border-t border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
                  <Button 
                    onClick={() => handleCopyTemplate(card.example)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Template
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;
