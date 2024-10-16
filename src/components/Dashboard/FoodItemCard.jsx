// import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";

const FoodItemCard = ({ item }) => {
  const ImageComponent = lazy(() =>
    Promise.resolve({
      default: () => (
        <img
          src={item.image}
          alt={item.name}
          className="rounded-xl object-cover w-full h-48 bg-no-repeat bg-center"
        />
      ),
    })
  );

  return (
    <>
      <div className="flex flex-col justify-around p-3 gap-2 bg-gradient-to-r from-green-400 to-lime-400 rounded-xl shadow-lg text-white w-11/12 sm:w-5/12 lg:w-3/12">
        <div className="">
          <Suspense
            fallback={
              <div className="skeleton h-48 w-56"></div>
            }
          >
            <ImageComponent />
          </Suspense>
        </div>
        <div className="text-2xl font-semibold text-red-500">{item.name}</div>
        <div className="text-pink-800">{item.description}</div>
        <div className="flex flex-row justify-between text-lime-900">
          <div>{item.price} $ </div>
          <div className="flex flex-row gap-1 items-center">
            {item.review} <FaStar />{" "}
          </div>
        </div>
        <div className="flex justify-center bottom-0">
          <button className="btn bg-gray-800 text-yellow-600 shadow-md min-w-full">
            Add to Cart
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

FoodItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    allergens: PropTypes.arrayOf(PropTypes.string).isRequired,
    review: PropTypes.number.isRequired,
    servingSize: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FoodItemCard;
