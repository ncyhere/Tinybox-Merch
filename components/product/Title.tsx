const Title = ({ product, state }) => {
  const { selectedVariant: variant } = state;

  return (
    <>
      <p className="tracking-widest text-sm text-gray-400">BY TINYBOX MERCH</p>
      <div className="flex items-center justify-start">
        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4 inline-block mr-4">
          {product.title}
        </h2>
        <p className="bg-indigo-200 inline-block py-2 px-4 mt-2 mb-4 rounded text-indigo-800 font-bold">
          ${variant.price}
        </p>
      </div>
    </>
  );
};

export default Title;
