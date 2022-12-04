/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: 'bottom-right',
  },
};

module.exports = nextConfig;
