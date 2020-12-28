import CartContext from '@components/cart/CartContext';
import useShopify from '@hooks/useShopify';
import { useContext } from 'react';
import SliderCheckout from './SliderCheckout';
import SliderHeader from './SliderHeader';
import SliderLineItems from './SliderLineItems';

const CartSlider = ({ setShowCart }) => {
  const { updateCart, cart } = useContext(CartContext);

  // TODO move this to be centralized in cartcontext
  const removeLineItem = async (lineItemId) => {
    const shopify = useShopify();
    await shopify.checkout.removeLineItems(cart.id, [lineItemId]);
    updateCart();
  };

  return (
    <aside className="fixed top-0 right-0 z-10 w-full h-screen px-4 py-2 overflow-hidden bg-white shadow sm:w-2/3 md:w-96">
      <SliderHeader setShowCart={setShowCart} />
      <SliderLineItems cart={cart} />
      <SliderCheckout cart={cart} />
    </aside>
  );
};

export default CartSlider;
