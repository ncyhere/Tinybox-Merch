import Description from './Description';
import Gallery from './Gallery';
import Title from './Title';
import Options from './Options';
import AddToCartBtn from './AddToCartBtn';

// custom reducer to handle product state
import useProductState from '@hooks/useProductState';
import { FunctionComponent, useEffect } from 'react';
import useShopify from '@hooks/useShopify';
import { IProduct } from 'shopify-api-node';

type ProductProps = {
  product: IProduct;
};

// this is a HOC for the product page
const Product: FunctionComponent<ProductProps> = ({ product }) => {
  const [state, dispatch] = useProductState();

  useEffect(() => {
    const fetchProduct = async () => {
      const shopify = useShopify();
      const storefrontProduct = await shopify.product.fetchByHandle(
        product.handle
      );
      dispatch({
        type: 'PRODUCT_LOADED',
        payload: { ...storefrontProduct },
      });
    };
    fetchProduct();
  }, []);

  return (
    <article className="grid w-full md:grid-cols-2">
      <Gallery staticProduct={product} state={state} />
      <div>
        <Title staticProduct={product} state={state} />
        <Options staticProduct={product} state={state} dispatch={dispatch} />
        <AddToCartBtn state={state} dispatch={dispatch} />
        <Description staticProduct={product} />
      </div>
    </article>
  );
};

export default Product;
