import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Terms'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
