const SliderCheckout = ({ cart, loading }) => {
  return (
    <div>
      <p className="grid grid-cols-2 my-4 font-bold">
        <span>Subtotal:</span>
        <span className="justify-self-end">${cart.subtotalPrice}</span>
      </p>
      <a
        className={` ${
          loading && 'animate-pulse bg-opacity-50'
        } flex items-center justify-center w-full px-4 py-2 my-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50`}
        href={loading ? null : cart.webUrl}
      >
        Checkout
      </a>
    </div>
  );
};

export default SliderCheckout;
