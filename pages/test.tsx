import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='m-4 p-4 bg-slate-200 rounded-lg text-lg font-semibold'>
        App Hello
      </main>
    </>
  )
}
