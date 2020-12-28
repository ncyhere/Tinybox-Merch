import { FunctionComponent } from 'react';
import { IProduct } from 'shopify-api-node';

type GalleryProps = {
  staticProduct: IProduct;
  state: any;
};

const Gallery: FunctionComponent<GalleryProps> = ({ staticProduct, state }) => {
  // initial static render...
  return (
    <div className="p-8">
      <img
        width="448px"
        height="448px"
        src={
          state.loading
            ? staticProduct.image.src
            : state.selectedVariant.image.src
        }
        alt={`picture of ${staticProduct.title}`}
        className={`w-full h-auto ${
          state.loading && 'productImage--loading'
        } transition-all`}
      />
    </div>
  );
};

export default Gallery;
