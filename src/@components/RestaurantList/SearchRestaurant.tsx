import React from "react";
import { Search } from "lucide-react";

const SearchRestaurant = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-full p-4">
      <div className="mr-2 text-gray-500">
        <Search color="gray" size={24} />
      </div>
      <input
        type="text"
        className="flex-1 outline-none text-base text-gray-700 placeholder-gray-400 font-bold"
        placeholder="Search for restaurant, cuisines and dishes"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SearchRestaurant;
