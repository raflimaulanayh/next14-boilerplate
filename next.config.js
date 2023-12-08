// eslint-disable-next-line @typescript-eslint/no-var-requires
// const UnoCSS = require('@unocss/webpack').default
// eslint-disable-next-line @typescript-eslint/no-var-requires

const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-central-1.wasabisys.com'
      },
      {
        protocol: 'https',
        hostname: 's3.wasabisys.com'
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com'
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com'
      }
    ]
  },
  env: {
    SITE_NAME: 'Hello Horizon',
    APP_URL: process.env.APP_URL || 'https://my.husl.xyz',
    BASE_URL: process.env.BASE_URL || (isProd ? 'https://app.husl.xyz' : 'http://localhost:3000'),
    API_URL: process.env.API_URL || 'http://localhost:1337'
  }
}

module.exports = nextConfig
