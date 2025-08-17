import React from "react";
import RestaurantCard from "./OfferSection/RestaurantCard";
import { foodBusinesses } from "@/@utils/dummyData";

const AllRestaurants = () => {
  return (
    <div className="w-full">
      <h2 className="text-dark-black text-3xl font-semibold">All Cooks</h2>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {[...foodBusinesses, ...foodBusinesses, ...foodBusinesses].map((r) => (
          <RestaurantCard
            key={r.id}
            restaurant={r}
            className="w-full md:w-[200px] lg:w-[300px] xl:w-[280px] 2xl:w-[330px] border-b border-b-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurants;
