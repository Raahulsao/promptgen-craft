
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sparkles, Bot, Zap, LogOut, User } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/sonner";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Successfully signed out');
    }
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Ripple effect positioned across the entire landing page */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Ripple mainCircleSize={300} mainCircleOpacity={0.15} numCircles={15} />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-teal-600/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation bar */}
      <div className="container px-4 mx-auto py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
              <Bot className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PromptCraft
            </span>
            <span className="text-xs text-purple-400 font-medium">AI-Powered</span>
          </div>
        </div>
        
        {/* Center navigation items */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Features</a>
          <a href="#use-cases" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Use Cases</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
        </div>
        
        {/* Right side - Login buttons or User info */}
        {!user ? (
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => window.location.href = '/auth'}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/auth'}
            >
              <Zap className="h-4 w-4 mr-2" />
              Get Started
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-white">{user.email}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-gray-300 hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Sign Out
            </Button>
          </div>
        )}
      </div>

      {/* Hero section */}
      <header className={cn("w-full py-20 text-center relative z-10", className)}>
        <div className="container px-4 mx-auto max-w-6xl relative">
          
          {/* Content above ripple */}
          <div className="relative z-10">
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">AI-Powered Prompt Engineering</span>
            </div>

            {/* Main heading */}
            <h1 className="relative z-10 text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="text-white">Create perfect</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                AI Prompts
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Transform your ideas into powerful prompts with our advanced AI engine. 
              <span className="text-purple-400 font-semibold"> Generate, enhance, and optimize</span> prompts for any use case.
            </p>

            {/* Stats section */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Prompts Generated</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">AI Models Supported</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
