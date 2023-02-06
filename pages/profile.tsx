import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Profile'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
