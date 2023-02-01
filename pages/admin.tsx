import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Admin'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
