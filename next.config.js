/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    const newConfig = {
      ...config,
      module: {
        rules: [
          ...config.module.rules,
          {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
    };
    return newConfig;
  },
}

module.exports = nextConfig