import { FoodCategoryItem } from "@/@types/foodCategoryTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FoodCardProps {
  item: FoodCategoryItem;
  onAdd?: (item: FoodCategoryItem) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, onAdd }) => {
  return (
    <Link href={`/cooks/${1}/meal/${item.id}`} className="border rounded-lg shadow-sm flex items-center p-3 bg-white w-full max-w-[370px] hover:bg-pink-100 hover:scale-105 transition-transform duration-300 ease-in-out hover:pl-5">
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-1">from Tk {item.price}</p>
        <p className="text-gray-500 text-xs mb-2">{item.description}</p>
      </div>
      <div className="relative w-24 h-24 ml-2">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
        <button
          className="absolute bottom-1 right-1 bg-white border rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-gray-100"
          onClick={() => onAdd && onAdd(item)}
        >
          <span className="text-xl font-bold text-gray-700">+</span>
        </button>
      </div>
    </Link>
  );
};

export default FoodCard;
