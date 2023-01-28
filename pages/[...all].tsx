import dynamic from 'next/dynamic';

const App = dynamic(() => import('components/Page404'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
