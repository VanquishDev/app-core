/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons'
  ],
  env: {
    url: 'https://main.d11ohwancun91i.amplifyapp.com/',
    userPoolId: process.env.userPoolId
   },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
