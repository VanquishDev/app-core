import dynamic from 'next/dynamic';
import { useAuthenticator, Authenticator, CheckboxField } from '@aws-amplify/ui-react';

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
  variation: 'modal',
  components: {
    Header() {
      return (
        <div className="text-center pb-8 text-4xl font-extrabold text-white">LOGO</div>
      );
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();

        return (
          <>
            {/* Re-use default `Authenticator.SignUp.FormFields` */}
            <Authenticator.SignUp.FormFields />

            {/* Append & require Terms & Conditions field to sign up  */}
            <CheckboxField
              errorMessage={validationErrors.acknowledgement as string}
              hasError={!!validationErrors.acknowledgement}
              name="acknowledgement"
              value="yes"
              label="Eu concordo com os termos e politicas."
            />
          </>
        );
      },
    }
  },
  services: {
    async validateCustomSignUp(formData) {
      if (!formData.acknowledgement) {
        return {
          acknowledgement: 'Você deve concordar com os termos e politicas.',
        };
      }
    },
  },
  formFields: {
    signUp: {
      name: {
        order: 1
      },
      username: {
        order: 2
      },
      email: {
        order:3
      },
      phone_number: {
        order:4,
        dialCode: '+55'
      },
      password: {
        order: 5
      },
      confirm_password: {
        order: 6
      }
    },
  }
});

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
