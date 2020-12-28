const SliderHeader = ({ setShowCart }) => {
  return (
    <header className="flex items-center justify-between mt-2 mb-4">
      <p className="text-2xl">Cart</p>
      <button
        className="flex items-center px-4 py-2 rounded top-4 right-4 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 focus:bg-gray-100 disabled:opacity-50"
        onClick={() => {
          setShowCart(false);
        }}
        title="close cart"
      >
        Close Cart{' '}
        <svg
          className="w-5 h-5 ml-3 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </header>
  );
};

export default SliderHeader;
