/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons'
  ],
  env: {
    userPoolId: process.env.userPoolId,
    userPoolClientId: process.env.userPoolClientId,
    userPoolRegion: process.env.userPoolRegion,
    identityPoolId: process.env.identityPoolId,
    graphqlURL: process.env.graphqlURL,
    graphqlApiKey: process.env.graphqlApiKey,
    bucketName: process.env.bucketName,
    bucketRegion: process.env.bucketRegion,
    bucketCloudFront: process.env.bucketCloudFront,
    tagTypes: ["MODALITIES", "SPECIALTIES", "REGIONS", "GROUPS", "AREAS"]
  }
}

module.exports = nextConfig
