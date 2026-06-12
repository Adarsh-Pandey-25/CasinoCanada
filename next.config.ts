import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
