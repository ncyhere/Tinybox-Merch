import { FunctionComponent } from 'react';
import { IProduct } from 'shopify-api-node';

type TitleProps = {
  staticProduct: IProduct;
  state: any;
};

const Title: FunctionComponent<TitleProps> = ({ staticProduct, state }) => {
  const { loading, selectedVariant: variant } = state;

  return (
    <>
      <p className="text-sm tracking-widest text-gray-400">BY TINYBOX MERCH</p>
      <div className="flex items-center justify-start">
        <h2 className="inline-block mt-2 mr-4 text-4xl font-bold text-gray-900">
          {staticProduct.title}
        </h2>
        {loading ? (
          <p className="inline-block px-4 py-2 mt-2 font-bold text-indigo-800 bg-indigo-200 rounded animate-pulse">
            $--.--
          </p>
        ) : (
          <p className="inline-block px-4 py-2 mt-2 font-bold text-indigo-800 bg-indigo-200 rounded">
            ${variant.price}
          </p>
        )}
      </div>
    </>
  );
};

export default Title;
