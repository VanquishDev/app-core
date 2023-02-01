import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';

import dynamic from 'next/dynamic';

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
}

const App = dynamic(() => import('components/Admin'), {
  ssr: false,
});

function Index({ isPassedToWithAuthenticator, signOut, user }: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }
  
  return <App user={user} />;
}

export default withAuthenticator(App)

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}