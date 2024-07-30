/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  // assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  // basePath: '/coin-factory-test',
  // assetPrefix: '/coin-factory-test/'
};

export default nextConfig;
