/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'iPass Copos STL 2025',
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },
  // Otimizações para produção
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig 