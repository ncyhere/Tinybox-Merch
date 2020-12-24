import Image from 'next/image';

const Gallery = ({ product, state }) => {
  const { selectedVariant: variant } = state;

  return (
    <div className="p-8">
      <Image
        src={variant.image.src}
        alt={`picture of ${product.title} in ${variant.title}`}
        width="400px"
        height="400px"
        layout="responsive"
      />
    </div>
  );
};

export default Gallery;
