import { setupIonicReact } from '@ionic/react';

import Head from 'next/head';
import Script from 'next/script';

import 'tailwindcss/tailwind.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@/styles/globals.css'
import '@/styles/variables.css'

import { useEffect } from 'react';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { UserContextProvider } from '../contexts/userContext';

setupIonicReact();

function MyApp({ Component, pageProps }: any) {
  
  useEffect(() => {
    defineCustomElements(window);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>App</title>
        <meta name="description" content="App" />
        <base href="/" />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="App" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}

export default MyApp;
