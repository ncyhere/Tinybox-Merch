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
    <article className="grid md:grid-cols-2 w-full">
      <Gallery product={product} state={state} />
      <div>
        <Title product={product} state={state} />
        <Description product={product} />
        <Options product={product} dispatch={dispatch} />
        <AddToCartBtn product={product} state={state} dispatch={dispatch} />
      </div>
    </article>
  );
};

export default Product;
