import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/User'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
