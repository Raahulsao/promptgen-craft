
import React from "react";

interface AvatarCirclesProps {
  numPeople: number;
  avatarUrls: Array<{
    imageUrl: string;
    profileUrl: string;
  }>;
}

export const AvatarCircles: React.FC<AvatarCirclesProps> = ({
  numPeople,
  avatarUrls,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {avatarUrls.slice(0, 3).map((avatar, index) => (
          <a
            key={index}
            href={avatar.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
              
              {/* Avatar */}
              <img
                className="relative h-8 w-8 rounded-full border-2 border-white/20 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-105 object-cover bg-gradient-to-br from-purple-100 to-pink-100"
                src={avatar.imageUrl}
                alt={`User ${index + 1}`}
              />
            </div>
          </a>
        ))}
        
        {/* Plus indicator */}
        {avatarUrls.length > 3 && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-600/80 to-pink-600/80 backdrop-blur-sm text-xs font-semibold text-white shadow-lg">
            +{Math.min(avatarUrls.length - 3, 99)}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          {numPeople.toLocaleString()}+
        </span>
        <span className="text-xs text-gray-400">
          professionals
        </span>
      </div>
    </div>
  );
};
