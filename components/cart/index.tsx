import CartContext from '@components/cart/CartContext';
import { useContext, useState } from 'react';
import CartSlider from './cartSlider/';

const Cart = () => {
  // TODO disable button while loading
  const { cart, loading } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowCart(true);
        }}
        className="flex items-center px-4 py-2 rounded top-4 right-4 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 focus:bg-gray-100 disabled:opacity-50"
        disabled={loading}
      >
        <svg
          className="w-5 h-5 mr-3 -ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Cart - {loading ? <>~</> : cart.lineItems.length}
      </button>
      {showCart && <CartSlider setShowCart={setShowCart} />}
    </>
  );
};

export default Cart;
