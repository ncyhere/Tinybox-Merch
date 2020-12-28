import { useReducer } from 'react';
import useShopify from './useShopify';

// Leave reducer methods out of the hook
// see here for why: https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice

// TODO add a "being added to cart" state here

const reducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCT_LOADED':
      const product = action.payload;
      const variant = () => {
        return product.variants[0];
      };
      console.log(`${product.title} has loaded`);
      return {
        product: product,
        selectedVariant: variant(),
        loading: false,
        addedToCart: false,
      };
    case 'CHANGE_VARIANT':
      console.log('variant has changed');
      return {
        ...state,
        addedToCart: false,
        selectedVariant: action.payload,
      };
    case 'ADD_TO_CART':
      console.log('attempting ATC');
      addToCart(state, action.payload);
      return {
        ...state,
        addedToCart: true,
      };
    case 'RESET':
      return {
        ...state,
        addedToCart: false,
      };
  }
};

// TODO refactor this messyness: callbacks are bad
const addToCart = async (state, callback) => {
  const shopify = useShopify();
  // get shopify cart
  const cartId = localStorage.getItem('cart_id');
  if (state.selectedVariant.available)
    await shopify.checkout.addLineItems(cartId, {
      variantId: state.selectedVariant.id,
      quantity: 1,
    });
  callback();
};

const useProductState = () => {
  const initState = {
    loading: true,
    product: null,
    selectedVariant: null,
    addedToCart: false,
  };
  return useReducer(reducer, initState);
};

export default useProductState;
