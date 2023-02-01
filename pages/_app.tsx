/* Amplify config */
import { Amplify, I18n } from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: `${process.env.identityPoolId}`,
    region: `${process.env.userPoolRegion}`,
    userPoolId: `${process.env.userPoolId}`,
    userPoolWebClientId: `${process.env.userPoolClientId}`,
    signUpVerificationMethod: 'code', // 'code' | 'link'
    cookieStorage: {
      domain: `.${process.env.domain}`,
      path: '/',
      expires: 365,
      sameSite: 'strict', // | "lax", See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      secure: true,
    },
    /*
        authenticationFlowType: 'USER_SRP_AUTH',
        clientMetadata: { myCustomKey: 'myCustomValue' },
        oauth: {
            domain: 'your_cognito_domain',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
        */
  },
  Storage: {
    AWSS3: {
      bucket: `${process.env.bucketName}`,
      region: `${process.env.bucketRegion}`,
    },
  },
});

import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('pt');
I18n.putVocabulariesForLanguage('pt', {
  'Sign In': 'Login',
  'User does not exist.': 'Error with your user',
});

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; 

import { setupIonicReact } from '@ionic/react';

import Head from 'next/head';
import Script from 'next/script';

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

import '@/styles/globals.css';
import '@/styles/variables.css';

import 'tailwindcss/tailwind.css';



import { useEffect } from 'react';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { GlobalContextProvider } from '../context/GlobalContext';

setupIonicReact();

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    defineCustomElements(window);
  }, []);

  const components = {
    SignIn: {
      Footer() {
        return <div></div>;
      },
    },
  };

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
      <Authenticator.Provider>
        <GlobalContextProvider>
          <Component {...pageProps} />
        </GlobalContextProvider>
      </Authenticator.Provider>
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
