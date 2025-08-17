import { Deal } from "@/@types/restaurant";
import React from "react";

const AvailableDealCart = ({ deal }: { deal: Deal }) => {
  return (
    <div
      key={deal.id}
      className="border rounded-lg p-4 shadow-sm w-64 bg-white  hover:bg-pink-100 transition duration-300 ease-in-out"
    >
      <h3 className="text-lg font-semibold text-primary">{deal.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{deal.description}</p>
    </div>
  );
};

export default AvailableDealCart;
