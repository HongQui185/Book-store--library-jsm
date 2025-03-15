import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"placehol.co",
      },
      {
        protocol:"https",
        hostname:"m.media-amazon.com"
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      }
    ]
  }
};

export default nextConfig;
