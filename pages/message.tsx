import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Message'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
