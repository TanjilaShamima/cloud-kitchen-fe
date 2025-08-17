import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn-icons-png.flaticon.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  /* config options here */
};

export default nextConfig;
