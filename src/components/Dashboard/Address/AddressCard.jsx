// import React from "react";
import PropTypes from 'prop-types';

function AddressCard({addressInfo, deleteAddress}) {

  // console.log(addressInfo)

  return (
    <div className="flex flex-col w-full bg-gray-100 shadow-md rounded-lg p-3 m-2 gap-1">
      <h2 className="text-xl font-semibold text-black">{addressInfo.addressName}</h2>
      <p className="text-black mt-2">{addressInfo.streetAddress}</p>
      <p className="text-black">{addressInfo.county}</p>
      <p className="text-black">{addressInfo.country}</p>
      <p className="text-black">{addressInfo.pinCode}</p>
      <p className="text-black">{addressInfo.addlInfo}</p>
      <div className="flex flex-row justify-start items-center gap-4 py-2">
        <button className="bg-transparent text-red-500 border-none hover:text-red-600 hover:bg-transparent p-0 shadow-none font-semibold">
           Set as default
        </button>
        <button onClick={deleteAddress} className="p-0 bg-transparent text-gray-500  hover:bg-transparent hover:text-gray-600 border-none shadow-none font-semibold">
          Delete Address
        </button>
      </div>
    </div>
  );
}

AddressCard.propTypes = {
  addressInfo: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ensure you have an id for each address to identify it
    addressName: PropTypes.string.isRequired, // The name of the address (e.g., "Home", "Office")
    streetAddress: PropTypes.string.isRequired, // Street address
    city: PropTypes.string.isRequired, // City
    county: PropTypes.string.isRequired, // State
    pinCode: PropTypes.string.isRequired, // Postal code
    country: PropTypes.string.isRequired, // Country
    addlInfo: PropTypes.string,
  }).isRequired,
  deleteAddress: PropTypes.func.isRequired, // Ensure a delete function is passed as a prop
};


export default AddressCard;
