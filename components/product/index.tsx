import Description from './Description';
import Gallery from './Gallery';
import Title from './Title';
import Options from './Options';
import AddToCartBtn from './AddToCartBtn';

// custom reducer to handle product state
import useProductState from '@hooks/useProductState';

// this is a HOC for the product page
const Product = ({ product }) => {
  const [state, dispatch] = useProductState(product);

  return (
    <article className="grid w-full md:grid-cols-2">
      <Gallery product={product} state={state} />
      <div>
        <Title product={product} state={state} />
        <Options product={product} dispatch={dispatch} />
        <AddToCartBtn product={product} state={state} dispatch={dispatch} />
        <Description product={product} />
      </div>
    </article>
  );
};

export default Product;
