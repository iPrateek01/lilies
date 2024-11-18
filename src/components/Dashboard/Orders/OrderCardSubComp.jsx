import PropTypes from "prop-types";

function OrderCardSubComp({ item }) {
  console.log(item);
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-1 justify-center">{item.quantity}</div>
      <div className="flex flex-1 justify-center">x</div>
      <div className="flex flex-1 justify-center text-center">{item.name}</div>
    </div>
  );
}

OrderCardSubComp.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCardSubComp;
