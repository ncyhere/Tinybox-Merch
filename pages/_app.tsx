import 'tailwindcss/tailwind.css';
import '../styles/main.css';
import { CartContextProvider } from '@components/cart/CartContext';
import Layout from '@components/layout/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:site_name" content="Tinybox Merch" />
        <meta property="og:type" content="website" />
        <meta name="twitter:creator" content="@TinyboxSoftware"></meta>
        <link rel="canonical" href="https://merch.tinybox.dev"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
