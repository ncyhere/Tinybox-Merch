import SliderLineItem from './SliderLineItem';

const SliderLineItems = ({ cart }) => {
  return (
    <div className="self-start w-full h-full">
      {cart.lineItems.length > 0 ? (
        <>
          {cart.lineItems.map((lineItem) => {
            return <SliderLineItem key={lineItem.id} lineItem={lineItem} />;
          })}
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default SliderLineItems;
