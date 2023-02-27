import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/Tag'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
