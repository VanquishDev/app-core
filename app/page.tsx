import { Inter } from '@next/font/google';
import { json } from 'stream/consumers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='p-4'>
      <h2 className={inter.className}>
        Hello folder app nextjs 13.
      </h2>
      <pre>{JSON.stringify({
        url: `${process.env.url}`,
        userPoolId: `${process.env.userPoolId}`
      }, null, 4)}</pre>
    </main>
  );
}
