/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: 'bottom-right',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be.kangheevietnam.com',
      },
      {
        protocol: 'http',
        hostname: 'be.kangheevietnam.com',
      },
    ],
  },
};

module.exports = nextConfig;
