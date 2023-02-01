import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Feed'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
