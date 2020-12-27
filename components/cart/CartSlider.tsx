import CartContext from '@components/cart/CartContext';
import useShopify from '@hooks/useShopify';
import { useContext } from 'react';

const CartSlider = () => {
  const { updateCart, cart } = useContext(CartContext);

  // TODO move this to be centralized in the context
  const removeLineItem = async (lineItemId) => {
    const shopify = useShopify();
    await shopify.checkout.removeLineItems(cart.id, [lineItemId]);
    updateCart();
  };

  return (
    <aside className="fixed right-0 w-auto h-screen px-4 py-2 overflow-hidden bg-white top-12">
      <p className="text-2xl">Cart</p>
      {cart.lineItems.map((lineItem) => {
        return (
          <div key={lineItem.id} className="flex mb-4">
            <img
              className="mr-4"
              src={lineItem.variant.image.src}
              width="64px"
              height="64px"
            />
            <div>
              <p>
                {lineItem.title} - ${lineItem.variant.price}
              </p>
              <p>quantity: {lineItem.quantity}</p>
            </div>
            <button
              onClick={() => {
                removeLineItem(lineItem.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <p>Cart total: ${cart.subtotalPrice}</p>
      <a href={cart.webUrl}>Checkout</a>
    </aside>
  );
};

export default CartSlider;
