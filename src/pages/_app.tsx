import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  </Head>
  <Component {...pageProps} />
  </>
}
