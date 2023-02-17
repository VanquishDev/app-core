import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/Privacy'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
