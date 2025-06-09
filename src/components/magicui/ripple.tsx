
import React from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple: React.FC<RippleProps> = ({
  mainCircleSize = 210,
  mainCircleOpacity = 0.15,
  numCircles = 12,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: numCircles }, (_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 animate-ocean-ripple`}
          style={{
            width: `${mainCircleSize + i * 60}px`,
            height: `${mainCircleSize + i * 60}px`,
            opacity: 0.15,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `16s`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: `1px solid rgba(139, 92, 246, 0.15)`,
          }}
        />
      ))}
    </div>
  );
};
