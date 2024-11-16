import type { Configuration } from 'webpack'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    return config;
  }
}

export default nextConfig
