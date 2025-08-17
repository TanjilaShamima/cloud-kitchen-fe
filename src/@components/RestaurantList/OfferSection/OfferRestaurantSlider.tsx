"use client";

import { foodBusinesses } from "@/@utils/dummyData";
import CarouselMultipleItems from "../../ui/Carousel";
import RestaurantCard from "./RestaurantCard";

export default function OfferRestaurantSlider() {
  return (
    <section className="bg-pink-100 rounded-xl p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-bold text-pink-600">Get 25% off</h2>
          <p className="text-sm text-pink-700">Min. order Tk 250</p>
        </div>
        <span className="bg-pink-600 text-white text-sm font-semibold px-2 py-1 rounded-lg">
          11:04
        </span>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <CarouselMultipleItems slidesToShow={4} slidesToScroll={1} dots={false} className="ml-2.5">
          {foodBusinesses.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} className="w-[290px] md:w-[200px] 2xl:w-[230px] " />
          ))}
        </CarouselMultipleItems>
      </div>
    </section>
  );
}
