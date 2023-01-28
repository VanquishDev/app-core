import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='p-4'>
      <h2 className={inter.className}>
        Hello folder app nextjs.
      </h2>
    </main>
  );
}
