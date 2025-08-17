"use client";
import { ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import CarouselMultipleItems from "../ui/Carousel";
import { CookFoodsCategoryType } from "@/@types/restaurant";

interface StickyHeaderProps {
  categories: CookFoodsCategoryType[];
  setActive: (category: CookFoodsCategoryType) => void;
  active: CookFoodsCategoryType;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  categories,
  setActive,
  active,
}) => {
  return (
    <div className="h-auto sticky top-0 bg-white shadow-md z-10 flex justify-start items-center">
      <div className="flex items-center bg-gray-100 rounded-full p-2 pl-4 focus:border-2 focus:border-gray-500">
        <div className="mr-2 text-gray-500">
          <Search color="gray" size={14} />
        </div>
        <input
          type="text"
          className="bg-gray-100 flex-1 outline-none text-base text-gray-700 placeholder-gray-400 font-bold"
          placeholder="Search in menu"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <main className="w-[90%] flex-1 overflow-hidden px-5 h-20 flex items-center justify-center">
        <CarouselMultipleItems
          slidesToShow={6}
          slidesToScroll={1}
          dots={false}
          className="ml-2"
        >
          {categories?.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item)}
              className={`text-sm whitespace-nowrap font-medium relative pb-2 ${
                active.name === item.name
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item.name} ({item.count})
              {active.name === item.name && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black rounded-full"></span>
              )}
            </button>
          ))}
        </CarouselMultipleItems>
      </main>
    </div>
  );
};

export default StickyHeader;
