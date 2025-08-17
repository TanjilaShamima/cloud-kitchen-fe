"use client";
import AllRestaurants from "@/@components/RestaurantList/AllRestaurants";
import FavouriteCuisines from "@/@components/RestaurantList/FavouriteCuisines/FavouriteCuisines";
import NewlyAddedCook from "@/@components/RestaurantList/NewlyAdded/NewlyAddedCook";
import OfferRestaurantSlider from "@/@components/RestaurantList/OfferSection/OfferRestaurantSlider";
import SearchRestaurant from "@/@components/RestaurantList/SearchRestaurant";
import Modal from "@/@components/ui/Modal";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import FilterMenu from "./FilterMenu";

const RestaurantSection = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center md:block mb-8">
        <div className="w-full">
          <SearchRestaurant />
        </div>
        <div
          className="block md:hidden ml-5 cursor-pointer"
          onClick={() => setOpenFilter(true)}
        >
          <SlidersHorizontal className="w-8 h-6" />
        </div>
      </div>
      <div className="mb-8">
        <OfferRestaurantSlider />
      </div>
      <div className="mb-8">
        <FavouriteCuisines />
      </div>

      <div className="mb-8">
        <NewlyAddedCook />
      </div>
      <div className="mb-8">
        <AllRestaurants />
      </div>
      {/* Filter Modal */}
      {openFilter && (
        <Modal
          open={openFilter}
          onClose={() => setOpenFilter(false)}
          className="!w-full m-0 p-0 !max-w-full"
        >
          <FilterMenu />
        </Modal>
      )}
    </div>
  );
};

export default RestaurantSection;
