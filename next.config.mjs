import next from 'next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration...
  
  // Add this section to allow Ngrok domains
  allowedDevOrigins: [
    'moved-roughy-tender.ngrok-free.app',
    '*.ngrok-free.app', // This allows any Ngrok subdomain
  ],
  
  // Your image optimization settings from before can stay
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
}

export default nextConfig;