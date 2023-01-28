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
    userPoolId: process.env.userPoolId,
    graphqlURL: process.env.graphqlURL,
    stackCodeName: process.env.stackCodeName,
    branchName: process.env.branchName
   },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
