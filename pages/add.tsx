import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Add'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
