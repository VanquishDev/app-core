import dynamic from 'next/dynamic';

import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
}

const App = dynamic(() => import('components/Admin'), {
  ssr: false,
});

function Index({ isPassedToWithAuthenticator }: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }

  return <App />;
}

export default withAuthenticator(App, {
  initialState: 'signIn',
  loginMechanisms: ['username', 'email', 'phone_number'],
  signUpAttributes: ['name', 'email', 'phone_number'],
  socialProviders: [], // 'amazon', 'apple', 'facebook', 'google'
});

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
