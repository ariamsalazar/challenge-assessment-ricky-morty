import Head from 'next/head'
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/global.css';
import '../styles/styles.css';

// App main on application
const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return ( 
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Ricky & Morty Challenge</title>
        <meta name="description" content="Challenge Assessment" />
        <link rel="icon" href="/icons/fav.png" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );  
}

export default MyApp;