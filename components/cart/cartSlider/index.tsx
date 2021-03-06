import CartContext from '@components/cart/CartContext';
import { useContext } from 'react';
import SliderCheckout from './SliderCheckout';
import SliderHeader from './SliderHeader';
import SliderLineItems from './SliderLineItems';

const CartSlider = ({ setShowCart }) => {
  const { updateCart, cart, loading } = useContext(CartContext);

  return (
    <aside className="fixed top-0 right-0 z-10 flex flex-col justify-between w-full h-auto px-4 py-2 overflow-hidden bg-white shadow min-h-half-screen md:min-h-0 sm:w-2/3 md:w-96">
      <SliderHeader setShowCart={setShowCart} />
      <SliderLineItems cart={cart} />
      <SliderCheckout cart={cart} loading={loading} />
    </aside>
  );
};

export default CartSlider;
