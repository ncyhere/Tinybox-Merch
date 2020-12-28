import SliderLineItem from './SliderLineItem';

const SliderLineItems = ({ cart }) => {
  return (
    <>
      {cart.lineItems.length > 0 ? (
        <>
          {cart.lineItems.map((lineItem) => {
            return <SliderLineItem key={lineItem.id} lineItem={lineItem} />;
          })}
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

export default SliderLineItems;
