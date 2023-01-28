/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons'
  ],
  env: { },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
