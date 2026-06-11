/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(self), geolocation=(self), microphone=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for its runtime scripts and styles
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.flutterwave.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // blob: for camera preview thumbnails, data: for canvas exports, Cloudinary for stored media
      "img-src 'self' data: blob: https://res.cloudinary.com",
      // blob: for camera stream, self for API calls, Flutterwave for payment, Google AI for Gemini
      "connect-src 'self' blob: https://api.flutterwave.com https://generativelanguage.googleapis.com https://api.cloudinary.com",
      "media-src 'self' blob: https://res.cloudinary.com",
      // Flutterwave uses a redirect (window.location), not an iframe — block all frames
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
