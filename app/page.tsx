import { Inter } from '@next/font/google';
import { json } from 'stream/consumers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const backend = {
    url: `${process.env.url}`,
    userPoolId: `${process.env.userPoolId}`,
    graphqlURL: `${process.env.graphqlURL}`,
    stackCodeName: `${process.env.stackCodeName}`,
    branchName: `${process.env.branchName}`,
  };

  return (
    <main className="p-4">
      <h2 className={inter.className}>Hello folder app nextjs 13.</h2>
      <pre>{JSON.stringify({ backend }, null, 4)}</pre>
    </main>
  );
}
