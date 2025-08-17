import CarouselMultipleItems from "@/@components/ui/Carousel";
import React from "react";
import RestaurantCard from "../OfferSection/RestaurantCard";
import { foodBusinesses } from "@/@utils/dummyData";

const NewlyAddedCook = () => {
  return (
    <section className="p-4 w-full">
      {/* Header */}
      <h2 className="text-dark-black text-3xl font-semibold">
        New on our platform
      </h2>

      {/* Carousel */}
      <div className="w-full mt-5">
        <CarouselMultipleItems slidesToShow={4} slidesToScroll={1} dots={false}>
          {foodBusinesses.map((r) => (
            <RestaurantCard
              key={r.id}
              restaurant={r}
              className="border-b border-b-gray-200 w-[290px] md:w-[200px] 2xl:w-[230px] "
            />
          ))}
        </CarouselMultipleItems>
      </div>
    </section>
  );
};

export default NewlyAddedCook;
