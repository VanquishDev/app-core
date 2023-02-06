import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Upgrade'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
