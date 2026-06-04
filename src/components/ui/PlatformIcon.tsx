import React from "react";
import { Globe, Smartphone } from "lucide-react";

export type PlatformType = "web" | "android" | "chrome" | "windows";

interface PlatformIconProps {
  type: PlatformType;
  className?: string;
  size?: number;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ type, className = "", size = 16 }) => {
  switch (type) {
    case "web":
      return <Globe className={className} size={size} />;
    case "android":
      return <Smartphone className={className} size={size} />;
    case "chrome":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
        >
          {/* Red section */}
          <path fill="#EA4335" d="M12 2c3.5 0 6.6 1.8 8.4 4.5l-3.6 6.2c-.4-.9-1.2-1.6-2.2-2H6.9l5.1-8.7z" />
          {/* Green section */}
          <path fill="#34A853" d="M6.9 10.7c.3 1.5 1.3 2.7 2.7 3.3L6 20.2c-2.4-1.8-4-4.7-4-8.2 0-.4 0-.8.1-1.3h4.8z" />
          {/* Yellow section */}
          <path fill="#FBBC05" d="M14.6 12c0 1.1-.6 2-1.5 2.5l-3.7 6.4c1 .1 1.7.1 2.6.1 4.7 0 8.7-3.1 10-7.3l-4.7-1.7z" />
          {/* Blue center */}
          <circle cx="12" cy="12" r="3.5" fill="#4285F4" />
          <circle cx="12" cy="12" r="5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case "windows":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
        >
          {/* Top Left */}
          <path fill="#F25022" d="M3 3h8.5v8.5H3z" />
          {/* Top Right */}
          <path fill="#7FBA00" d="M12.5 3H21v8.5h-8.5z" />
          {/* Bottom Left */}
          <path fill="#00A4EF" d="M3 12.5h8.5V21H3z" />
          {/* Bottom Right */}
          <path fill="#FFB900" d="M12.5 12.5H21V21h-8.5z" />
        </svg>
      );
    default:
      return null;
  }
};
