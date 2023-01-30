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
    backend: {
      stackCodeName: process.env.stackCodeName,
      branchName: process.env.branchName,
      userPoolId: process.env.userPoolId,
      userPoolClientId: process.env.userPoolClientId,
      userPoolRegion: process.env.userPoolRegion,
      identityPoolId: process.env.identityPoolId,
      graphqlURL: process.env.graphqlURL,
      graphqlApiKey: process.env.graphqlApiKey,
      bucketName: process.env.bucketName,
      bucketRegion: process.env.bucketRegion,
      cloudFrontDistribution: process.env.cloudFrontDistribution,
    }
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
