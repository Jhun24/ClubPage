import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import './font.css';
import './global.css';
import './animate.css';
import 'react-loading-skeleton/dist/skeleton.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default App;
