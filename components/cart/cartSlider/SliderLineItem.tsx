import { FC, useContext } from 'react';
import useShopify from '@hooks/useShopify';
import CartContext from '../CartContext';

type SliderLineItemProps = {
  lineItem: any;
};

const SliderLineItem: FC<SliderLineItemProps> = ({ lineItem }) => {
  const { updateCart, cart } = useContext(CartContext);

  // TODO move this to be centralized in cartcontext
  const removeLineItem = async (lineItemId) => {
    const shopify = useShopify();
    await shopify.checkout.removeLineItems(cart.id, [lineItemId]);
    updateCart();
  };

  return (
    <div className="flex mb-4">
      <img
        className="object-cover mr-4"
        src={lineItem.variant.image.src}
        width="64px"
        height="64px"
      />
      <div className="w-full">
        <p className="font-bold">{lineItem.title}</p>
        <p>
          ${lineItem.variant.price}{' '}
          {!lineItem.variant.price.includes('title') ? (
            <span> - {lineItem.variant.title}</span>
          ) : null}{' '}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">quantity: {lineItem.quantity}</p>
          <button
            className="text-red-500 underline"
            onClick={() => {
              removeLineItem(lineItem.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderLineItem;
