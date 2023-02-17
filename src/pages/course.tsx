import dynamic from 'next/dynamic';

const App = dynamic(() => import('@/components/Course'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
