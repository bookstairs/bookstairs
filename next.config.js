const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withNextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const bookstairsConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false
  },
  devIndicators: {
    buildActivity: false
  },
  compress: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  output: 'standalone',
  trailingSlash: false,
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: process.env.BOOKSHELF_URI + '/api/:path*'
    }, {
      source: '/get/:path*',
      destination: process.env.BOOKWORM_URI + '/get/:path*'
    }]
  }
};

module.exports = withNextTranslate(withBundleAnalyzer(bookstairsConfig));
