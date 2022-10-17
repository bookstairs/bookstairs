const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withNextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
module.exports = withNextTranslate(
  withBundleAnalyzer({
    swcMinify: true,
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: false
    },
    productionBrowserSourceMaps: true,
    output: 'standalone'
  })
);
