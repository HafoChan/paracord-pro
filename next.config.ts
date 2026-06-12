import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzlyxcfczyzxssjyddcx.supabase.co",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@heroicons/react"],
  },
};

export default nextConfig;
