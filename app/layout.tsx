import './globals.css';
import { GlobalContextProvider } from './Context/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}

import { Amplify, Auth } from 'aws-amplify';

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

const currentConfig = Auth.configure();
