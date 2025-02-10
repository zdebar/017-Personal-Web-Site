import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from "../components/Footer";
import Header from '../components/Header';
import '../styles/globals.css';
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zdeněk Barth</title>
        <meta charSet="UTF-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <meta name="description" content="Zdeněk Barth's personal website" /> 
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}