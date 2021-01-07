import { useState, useEffect, createContext } from 'react';
import useShopify from '@hooks/useShopify';

const CartContext = createContext({
  loading: false,
  cart: null,
  updateCart: null,
  sendToCheckout: null,
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
  // create a cart context for the store...

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const findCart = () => {
    setLoading(true);
    const cartId = localStorage.getItem('cart_id');
    if (cartId) {
      getCart(cartId);
    } else {
      createCart();
    }
  };

  const getCart = async (cartId: string) => {
    const shopify = useShopify();
    const cart = await shopify.checkout.fetch(cartId);
    setCart(cart);
    setLoading(false);
  };

  const createCart = async () => {
    const shopify = useShopify();
    const cart = await shopify.checkout.create();
    localStorage.setItem('cart_id', `${cart.id}`);
    setCart(cart);
    setLoading(false);
  };

  const sendToCheckout = () => {
    if (!loading) {
      try {
        window.location.href = cart.webUrl;
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    findCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        loading: loading,
        cart: cart,
        updateCart: findCart,
        sendToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
