/**
 * Next.js configuration file
 */

const nextConfig = {
  // ----- Build & Performance -----
  compress: true,
  productionBrowserSourceMaps: true,

  env: {
    API_URL: process.env.src || 'https://s3.tradingview.com/tv.js',
  },

  experimental: {
    serverActions: {}, // Use object, not boolean
    mdxRs: true,
    // typedRoutes: true, // ❌ Removed: not supported with Turbopack
  },

  // i18n: {         // ❌ Removed for App Router compatibility
  //   locales: ['en', 'fr', 'es'],
  //   defaultLocale: 'en',
  // },
};

module.exports = nextConfig;
