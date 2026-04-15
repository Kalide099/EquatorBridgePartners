/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Recommended for some shared hosting environments if sharp isn't installed
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['equatorbridgespartners.com', 'www.equatorbridgespartners.com', 'localhost:3000', '127.0.0.1:3000']
    },
  },
};

export default nextConfig;
