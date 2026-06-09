import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js for proper ESM support
  transpilePackages: ["three"],
  
  // Optimize images
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "recharts", "react-icons"],
  },
};

export default nextConfig;
