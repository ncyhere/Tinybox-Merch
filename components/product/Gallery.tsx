import { FunctionComponent } from 'react';
import { IProduct } from 'shopify-api-node';

type GalleryProps = {
  staticProduct: IProduct;
  state: any;
};

const Gallery: FunctionComponent<GalleryProps> = ({ staticProduct, state }) => {
  // initial static render...
  if (state.loading) {
    return (
      <div className="p-8">
        <img
          src={staticProduct.image.src}
          alt={`picture of ${staticProduct.title} in ${staticProduct.title}`}
          className="w-full h-auto"
        />
      </div>
    );
  }
  // render once data is loaded...
  return (
    <div className="p-8">
      <img
        src={state.selectedVariant.image.src}
        alt={`picture of ${state.product.title} in ${state.selectedVariant.title}`}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Gallery;
