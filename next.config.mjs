import next from 'next'

/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: [
    'moved-roughy-tender.ngrok-free.app',
    '*.ngrok-free.app', // This allows any Ngrok subdomain
  ],

  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
}

export default nextConfig;