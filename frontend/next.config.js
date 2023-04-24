/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `http://:slug*`,
      },
    ];
  },
};

module.exports = nextConfig
