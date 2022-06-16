/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
