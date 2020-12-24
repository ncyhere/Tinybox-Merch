import { useReducer } from 'react';
import useShopify from './useShopify';

// Leave reducer methods out of the hook
// see here for why: https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VARIANT':
      console.log('variant has changed');
      const newPrice = calcNewPrice(action.payload);
      return {
        ...state,
        selectedVariant: action.payload,
      };
    case 'ADD_TO_CART':
      console.log('attempting ATC');
      // NOTE: this is a side effect: it redirects the user to a cart page
      createCheckout(state);
      return {
        ...state,
        addedToCart: true,
      };
  }
};

const calcNewPrice = (payload) => {
  // STUB: please finish this
};

const createCheckout = async (state) => {
  const shopify = useShopify();
  const checkout = await shopify.checkout.create();
  if (state.selectedVariant.available) {
    const finalCheckout = await shopify.checkout.addLineItems(checkout.id, {
      variantId: state.selectedVariant.id,
      quantity: 1,
    });
    console.log(checkout);
    window.location.href = checkout.webUrl;
  } else {
    console.log('product is unavailable...');
  }
};

const useProductState = (product) => {
  const initState = {
    product: product,
    selectedVariant: product.variants[0],
    addedToCart: false,
  };
  return useReducer(reducer, initState);
};

export default useProductState;
