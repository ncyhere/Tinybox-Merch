// import Image from 'next/image';

const Gallery = ({ product, state }) => {
  const { selectedVariant: variant } = state;

  return (
    <div className="p-8">
      <img
        src={variant.image.src}
        alt={`picture of ${product.title} in ${variant.title}`}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Gallery;
