import CartContext from '@components/cart/CartContext';
import useShopify from '@hooks/useShopify';
import { useContext } from 'react';
import SliderCheckout from './SliderCheckout';
import SliderHeader from './SliderHeader';
import SliderLineItems from './SliderLineItems';

const CartSlider = ({ setShowCart }) => {
  const { updateCart, cart, loading } = useContext(CartContext);

  return (
    <aside className="fixed top-0 right-0 z-10 flex flex-col justify-between w-full h-screen px-4 py-2 overflow-hidden bg-white shadow sm:w-2/3 md:w-96">
      <SliderHeader setShowCart={setShowCart} />
      <SliderLineItems cart={cart} />
      <SliderCheckout cart={cart} />
    </aside>
  );
};

export default CartSlider;
