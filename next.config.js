/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Use standalone output for Docker deployment
  output: 'standalone',
  // Disable static generation for error pages to avoid Pages Router conflict
  experimental: {
    // Disable ISR memory caching
    isrMemoryCacheSize: 0,
  },
  // Skip type checking and linting during build (already done in CI)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
