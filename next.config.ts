/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cdn-icons-png.flaticon.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  /* config options here */
};

export default nextConfig;
