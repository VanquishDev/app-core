import { Inter } from '@next/font/google';
import { json } from 'stream/consumers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  const backend = {
    stackCodeName: `${process.env.stackCodeName}`,
    branchName: `${process.env.branchName}`,
    url: `${process.env.url}`,
    userPoolId: `${process.env.userPoolId}`,
    userPoolClientId: `${process.env.userPoolClientId}`,
    userPoolRegion: `${process.env.userPoolRegion}`,
    identityPoolId: `${process.env.identityPoolId}`,
    graphqlURL: `${process.env.graphqlURL}`,
    graphqlApiKey: `${process.env.graphqlApiKey}`,
    bucketName: `${process.env.bucketName}`,
    bucketRegion: `${process.env.bucketRegion}`,
    cloudFrontDistribution: `${process.env.cloudFrontDistribution}`,
  };

  return (
    <main className="p-4">
      <h2 className={inter.className}>Hello folder app nextjs 13.</h2>
      <pre>{JSON.stringify({ backend }, null, 4)}</pre>
    </main>
  );
}
