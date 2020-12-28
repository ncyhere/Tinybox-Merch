const Description = ({ staticProduct }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `${staticProduct.body_html}` }} />
  );
};

export default Description;
