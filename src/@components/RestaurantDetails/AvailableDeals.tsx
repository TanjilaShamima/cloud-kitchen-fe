import { Deal } from "@/@types/restaurant";
import React from "react";
import AvailableDealCart from "../common/AvailableDealCart";

interface AvailableDealsProps {
  deals: Deal[];
}

const AvailableDeals: React.FC<AvailableDealsProps> = ({ deals }) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Deals</h2>
      <div className="flex gap-4">
        {deals.map((deal) => (
          <AvailableDealCart key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
};

export default AvailableDeals;
