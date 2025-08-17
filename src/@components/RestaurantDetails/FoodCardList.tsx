
import React from "react";
import FoodCard from "../common/FoodCard";
import { CookFoodsCategoryType } from "@/@types/restaurant";
import { Flame } from "lucide-react";
import { foodCategoryDummyData } from "@/@utils/dummyData";

interface FoodCardListProps {
  activeCategory?: CookFoodsCategoryType;
}

const FoodCardList: React.FC<FoodCardListProps> = ({ activeCategory }) => {
  // Optionally, group by category if needed
  return (
    <div className="py-5">
      <div className="flex items-center pb-2 mb-4">
        <Flame fill="#ec9b00" stroke="#fff" height={32} width={32} />
        <h1 className="text-3xl font-semibold">{activeCategory?.name}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 pl-8">
        {foodCategoryDummyData?.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodCardList;
