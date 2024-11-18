import PropTypes from "prop-types";
import OrderCardSubComp from "./OrderCardSubComp";

function OrdersCard({ item }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-gray-300 rounded-xl">
      <div className="flex flex-col justify-center items-center text-gray-700 text-xl gap-2 w-full">
        {item.items.map((orderItem) => (
          <OrderCardSubComp key={orderItem.id} item={orderItem} />
        ))}
      </div>
      <hr className="h-0.5 w-full bg-gray-900" />
      <div className="flex justify-center items-center text-gray-700 text-xl">
        ${item.pricePaid.toFixed(2)}
      </div>
      <hr className="h-0.5 w-full bg-gray-900" />
      <div className="flex justify-center items-center text-gray-700 text-xl w-full">
        <button className="btn w-5/6">Reorder</button>
      </div>
    </div>
  );
}

OrdersCard.propTypes = {
  item: PropTypes.shape({
    pricePaid: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default OrdersCard;
