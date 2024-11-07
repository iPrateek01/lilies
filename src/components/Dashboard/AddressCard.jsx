import React from "react";

function AddressCard({ streetAddress, city, county, country }) {
  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Delivery Address</h2>
      <p className="text-gray-600 mt-2">{address}</p>
      <p className="text-gray-600">{city}, {postalCode}</p>
      <p className="text-gray-600">{country}</p>

      <button className="mt-4 w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition">
        Edit Address
      </button>
    </div>
  );
}

export default AddressCard;
