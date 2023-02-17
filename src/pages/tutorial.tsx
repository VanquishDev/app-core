import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/Tutorial'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
