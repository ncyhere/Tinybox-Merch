import 'tailwindcss/tailwind.css';
import { CartContextProvider } from '@components/cart/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
