const Description = ({ product }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `${product.descriptionHtml}` }} />
  );
};

export default Description;
