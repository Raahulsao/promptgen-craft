
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Zap, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="relative py-24 overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to supercharge your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI workflows?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Join thousands of professionals who trust PromptCraft to create better AI prompts. 
            Start your journey to more effective AI interactions today.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col items-center space-y-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-float">
              <Zap className="h-10 w-10 text-white" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Creating Better Prompts Today</h3>
              <p className="text-gray-300 mb-8 max-w-xl">
                Experience the power of AI-enhanced prompt engineering. No credit card required for your first 100 prompts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/25 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                <Zap className="h-5 w-5 mr-2" />
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              Free forever • No credit card required • 100 prompts included
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
            <p className="text-gray-300 mb-6">Get help from our expert team within 24 hours.</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl">
              support@promptcraft.ai
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
            <p className="text-gray-300 mb-6">Chat with our team for instant assistance.</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl">
              Start Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
