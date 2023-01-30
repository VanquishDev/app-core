'use client';

import { useEffect } from 'react';
import { Inter } from '@next/font/google';
import { useGlobalContext } from './Context/store';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { userID, setUserID, data, setData } = useGlobalContext();


  return (
    <main className="p-4">
      <h2 className={inter.className}>Hello.</h2>
      <pre>{JSON.stringify({ userID, data }, null, 4)}</pre>
    </main>
  );
}
