
import React from 'react';
import { Star, Quote, Users } from 'lucide-react';
import { AvatarCircles } from '@/components/magicui/avatar-circles';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Product Manager",
      company: "TechFlow Inc.",
      content: "PromptCraft has revolutionized how our team creates AI prompts. The quality improvement is incredible - we've seen 3x better results across all our AI applications.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Scientist",
      company: "Innovation Labs",
      content: "The prompt optimization features are game-changing. What used to take hours of iteration now happens in minutes. This tool is essential for any serious AI work.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Content Director",
      company: "Creative Studio",
      content: "As a content creator, I rely on AI daily. PromptCraft's templates and enhancement features have made my workflow so much more efficient and creative.",
      rating: 5,
      avatar: "EW"
    },
    {
      name: "David Kim",
      role: "Research Engineer",
      company: "AI Dynamics",
      content: "The multi-model support is fantastic. One optimized prompt works perfectly across GPT, Claude, and Gemini. Saves us tons of time and ensures consistency.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Lead",
      company: "Growth Co.",
      content: "The ROI on PromptCraft is incredible. Our AI-generated content quality has improved dramatically, leading to better engagement and conversions.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "Alex Johnson",
      role: "Software Architect",
      company: "DevCorp",
      content: "Clean interface, powerful features, and excellent results. PromptCraft has become an indispensable part of our development toolkit.",
      rating: 5,
      avatar: "AJ"
    }
  ];

  const avatars = [
    {
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      profileUrl: "#",
    },
  ];

  return (
    <div className="relative py-24 overflow-hidden">      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Loved by Professionals</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What our users are saying about
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PromptCraft</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who trust PromptCraft to enhance their AI workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-purple-400" />
                </div>
                
                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-purple-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Users Section - Compact Single Line */}
        <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-8 py-4 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 hover:scale-105">
            <AvatarCircles numPeople={50000} avatarUrls={avatars} />
            
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-purple-400" />
              <span className="text-base font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Join 50,000+ AI professionals already creating better prompts with us
              </span>
              <div className="flex items-center gap-1 ml-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
