/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    qualities: [60, 75],
  },
  trailingSlash: true,
  poweredByHeader: false, 
  compress: true,
}

module.exports = nextConfig