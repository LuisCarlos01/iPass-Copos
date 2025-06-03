/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'iPass Copos STL 2025',
    NEXT_PUBLIC_APP_VERSION: '1.1.0',
  },
  // Otimizações para produção
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig 