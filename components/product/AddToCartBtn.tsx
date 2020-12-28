import CartContext from '@components/cart/CartContext';
import { FunctionComponent, useContext } from 'react';

type AddToCartBtnProps = {
  state: any;
  dispatch: any;
};

const AddToCartBtn: FunctionComponent<AddToCartBtnProps> = ({
  state,
  dispatch,
}) => {
  const { loading, updateCart } = useContext(CartContext);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'ADD_TO_CART',
            payload: updateCart,
          });
        }}
        className={`${
          (loading || state.loading) && 'animate-pulse bg-opacity-50'
        } flex items-center justify-center w-full px-4 py-2 my-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50`}
        disabled={state.addedToCart || loading || state.loading}
      >
        {state.addedToCart ? 'Added to Cart! ✨' : 'Add to Cart'}
      </button>
      {state.addedToCart && (
        <button
          className="my-4 underline"
          onClick={() => {
            dispatch({
              type: 'RESET',
            });
          }}
        >
          Want to add another?
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
