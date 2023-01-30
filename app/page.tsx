'use client';

import { useEffect } from 'react';
import { Inter } from '@next/font/google';
import { useGlobalContext } from './Context/store';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { backend, userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    if (setUserId) {
      setUserId('2');
    }
    if (setData) {
      setData([
        { firstName: 'Tim' },
        { firstName: 'Kyle' },
        { firstName: 'Michael' },
      ]);
    }
    
  }, [setData, setUserId]);

  return (
    <main className="p-4">
      <h2 className={inter.className}>Hello.</h2>
      <p>userId = {userId}</p>
      <pre>{JSON.stringify({ backend, data }, null, 4)}</pre>
    </main>
  );
}
