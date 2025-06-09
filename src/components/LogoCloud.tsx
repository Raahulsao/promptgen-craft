
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = [
    {
      name: "OpenAI",
      svg: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#10A37F"/>
        </svg>
      )
    },
    {
      name: "Anthropic",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M50 170L80 90h40l30 80M70 90L100 20l30 70" stroke="#D4A574" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    {
      name: "Mistral AI",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <g>
            <path d="M20 40L100 20L180 40L160 60L100 50L40 60Z" fill="#FF6B35"/>
            <path d="M40 80L100 70L160 80L140 100L100 90L60 100Z" fill="#FF8A50"/>
            <path d="M60 120L100 110L140 120L120 140L100 130L80 140Z" fill="#FFA366"/>
            <path d="M80 160L100 150L120 160L110 170L100 165L90 170Z" fill="#FFB87A"/>
          </g>
        </svg>
      )
    },
    {
      name: "Google Gemini",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <defs>
            <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4"/>
              <stop offset="50%" stopColor="#9C27B0"/>
              <stop offset="100%" stopColor="#FF6EC7"/>
            </linearGradient>
          </defs>
          <path d="M100 20L170 80L130 140L100 120L70 140L30 80Z" fill="url(#gemini-gradient)"/>
        </svg>
      )
    },
    {
      name: "Meta LLaMA",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M100 20C140 20 170 50 170 90C170 130 140 160 100 160C60 160 30 130 30 90C30 50 60 20 100 20Z" fill="#0668E1"/>
          <path d="M100 50C120 50 135 65 135 85C135 105 120 120 100 120C80 120 65 105 65 85C65 65 80 50 100 50Z" fill="#FFFFFF"/>
          <circle cx="85" cy="80" r="5" fill="#0668E1"/>
          <circle cx="115" cy="80" r="5" fill="#0668E1"/>
          <path d="M85 100Q100 110 115 100" stroke="#0668E1" strokeWidth="3" fill="none"/>
        </svg>
      )
    },
    {
      name: "Perplexity",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <defs>
            <linearGradient id="perplexity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20B2AA"/>
              <stop offset="100%" stopColor="#40E0D0"/>
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#perplexity-gradient)"/>
          <circle cx="100" cy="100" r="50" fill="#FFFFFF"/>
          <circle cx="100" cy="100" r="25" fill="url(#perplexity-gradient)"/>
        </svg>
      )
    },
    {
      name: "Hugging Face",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M100 30C130 30 155 55 155 85C155 115 130 140 100 140C70 140 45 115 45 85C45 55 70 30 100 30Z" fill="#FFD21E"/>
          <circle cx="80" cy="75" r="8" fill="#000"/>
          <circle cx="120" cy="75" r="8" fill="#000"/>
          <path d="M70 110C70 120 80 130 100 130C120 130 130 120 130 110" fill="#FF6B6B"/>
          <circle cx="70" cy="120" r="15" fill="#FFD21E"/>
          <circle cx="130" cy="120" r="15" fill="#FFD21E"/>
        </svg>
      )
    },
    {
      name: "Cohere",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <circle cx="100" cy="100" r="80" fill="#39398A"/>
          <circle cx="100" cy="100" r="50" fill="#FFFFFF"/>
          <circle cx="100" cy="100" r="25" fill="#39398A"/>
          <circle cx="100" cy="100" r="10" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: "xAI Grok",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M40 60L80 100L40 140M160 60L120 100L160 140M80 40L120 160" stroke="#000000" strokeWidth="12" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Together AI",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <circle cx="70" cy="70" r="25" fill="#6366F1"/>
          <circle cx="130" cy="70" r="25" fill="#8B5CF6"/>
          <circle cx="100" cy="130" r="25" fill="#EC4899"/>
          <path d="M70 95L100 105L130 95" stroke="#FFFFFF" strokeWidth="4" fill="none"/>
        </svg>
      )
    },
    {
      name: "Stability AI",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M100 20L170 60V140L100 180L30 140V60L100 20Z" fill="#000000"/>
          <path d="M100 40L150 70V130L100 160L50 130V70L100 40Z" fill="#FFFFFF"/>
          <path d="M100 60L130 80V120L100 140L70 120V80L100 60Z" fill="#000000"/>
        </svg>
      )
    },
    {
      name: "AI21 Labs",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <path d="M50 150L75 50H100L125 150M75 100H115" stroke="#00D4AA" strokeWidth="8" strokeLinecap="round"/>
          <text x="130" y="120" fill="#00D4AA" fontSize="24" fontWeight="bold">21</text>
        </svg>
      )
    },
    {
      name: "Groq",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <circle cx="100" cy="100" r="80" fill="#F55036"/>
          <path d="M60 80L100 50L140 80L120 120L100 140L80 120Z" fill="#FFFFFF"/>
          <circle cx="100" cy="100" r="15" fill="#F55036"/>
        </svg>
      )
    },
    {
      name: "Replicate",
      svg: (
        <svg viewBox="0 0 200 200" className="w-12 h-12" fill="none">
          <rect x="30" y="40" width="60" height="20" fill="#000000"/>
          <rect x="30" y="70" width="80" height="20" fill="#000000"/>
          <rect x="30" y="100" width="100" height="20" fill="#000000"/>
          <rect x="30" y="130" width="120" height="20" fill="#000000"/>
        </svg>
      )
    }
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-600/5 to-pink-600/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-600/5 to-cyan-600/5 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by the 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Leading AI Models</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            PromptCraft works seamlessly with all major AI language models and platforms
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-rtl space-x-16 w-max">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="group relative flex-shrink-0 flex flex-col items-center justify-center"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                
                {/* Logo container */}
                <div className="relative flex flex-col items-center justify-center p-4 hover:scale-110 transition-all duration-300 min-h-[80px] w-[100px]">
                  {/* Icon */}
                  <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110">
                    {logo.svg}
                  </div>
                  
                  {/* Name */}
                  <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300 text-center font-medium leading-tight">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '1.5s'}}>
          <p className="text-gray-400 text-sm">
            And many more AI models and platforms...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
