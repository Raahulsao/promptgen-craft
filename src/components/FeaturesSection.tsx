
import React from 'react';
import { Brain, Zap, Target, Rocket, Shield, Sparkles } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Enhancement",
      description: "Advanced algorithms analyze and optimize your prompts for maximum effectiveness across all AI models."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Generate multiple optimized prompt variations in seconds with our high-performance AI engine."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Targeting",
      description: "Category-specific optimization ensures your prompts are tailored for your exact use case."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Multi-Model Support",
      description: "Works seamlessly with GPT, Claude, Gemini, and 50+ other AI models for universal compatibility."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Your data is protected with enterprise-grade encryption and privacy-first architecture."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Smart Templates",
      description: "Access our curated library of professional templates designed by AI experts."
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden" id="features">
      {/* Minimal background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-pink-900/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-slate-300 font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to create
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">perfect AI prompts</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our advanced AI platform provides all the tools and features you need to craft, optimize, and deploy high-performing prompts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
