import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    qualities: [60, 75],
  },
  trailingSlash: true,
  poweredByHeader: false, 
  compress: true,
};

export default nextConfig;
