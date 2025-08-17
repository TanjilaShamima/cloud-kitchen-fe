"use client";

import React, { useState } from "react";

const sortOptions = ["Best Match", "Rating", "Delivery Time", "Price"];
const quickFilters = ["Open Now", "Offers", "Free Delivery"];
const cuisineOptions = ["Italian", "Chinese", "Indian", "Bangladeshi", "Mexican", "Thai", "Japanese"];
const priceOptions = ["$", "$$", "$$$", "$$$$"];

const FilterMenu = () => {
  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>(quickFilters[0]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>(priceOptions[0]);

  const handleCuisineChange = (cuisine: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine)
        ? prev.filter((item) => item !== cuisine)
        : [...prev, cuisine]
    );
  };

  return (
    <div className="w-full h-[85vh] md:h-auto overflow-x-hidden overflow-y-scroll bg-white p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-semibold text-base mb-3 text-gray-800">Sort By</h3>
        <ul className="space-y-2">
          {sortOptions.map((option) => (
            <li key={option} className="flex items-center">
              <input
                type="radio"
                id={option}
                name="sort"
                value={option}
                checked={selectedSort === option}
                onChange={() => setSelectedSort(option)}
                className="mr-2 text-sm text-primary focus:ring-primary"
              />
              <label htmlFor={option} className="text-sm text-gray-700">
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Filters as Tabs */}
      <div className="mb-6">
        <h3 className="font-semibold text-base mb-3 text-gray-800">Quick Filters</h3>
        <div className="flex flex-wrap gap-2 justify-start">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              className={`text-sm text-nowrap w-28 px-2 py-1.5 rounded-xl border transition-all duration-200 ${
                selectedQuickFilter === filter
                  ? "bg-primary-gradient text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedQuickFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cuisine */}
      <div className="mb-6">
        <h3 className="font-semibold text-base mb-3 text-gray-800">Cuisine</h3>
        <input
          type="text"
          placeholder="Search cuisines..."
          className="text-sm w-full mb-3 p-2 pl-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <ul className="space-y-2">
          {cuisineOptions.map((cuisine) => (
            <li key={cuisine} className="flex items-center">
              <input
                type="checkbox"
                id={cuisine}
                value={cuisine}
                checked={selectedCuisines.includes(cuisine)}
                onChange={() => handleCuisineChange(cuisine)}
                className="mr-2 text-primary focus:ring-primary"
              />
              <label htmlFor={cuisine} className="text-gray-700 text-sm">
                {cuisine}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price as Tabs */}
      <div className="mb-6">
        <h3 className="font-semibold text-base mb-3 text-gray-800">Price</h3>
        <div className="flex space-x-2">
          {priceOptions.map((price) => (
            <button
              key={price}
              className={`px-4 py-2 rounded-md border transition-all duration-200 ${
                selectedPrice === price
                  ? "bg-primary-gradient text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedPrice(price)}
            >
              {price}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;