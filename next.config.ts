import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzlyxcfczyzxssjyddcx.supabase.co",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@heroicons/react"],
  },
};

export default nextConfig;
