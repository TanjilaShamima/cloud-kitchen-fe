"use client";
import React from "react";
import { Heart, Info, Bike } from "lucide-react";

interface RestaurantHeaderProps {
  name: string;
  image: string;
  tags: string[];
  deliveryInfo: string;
  rating: number;
  reviewsCount: string;
  minOrder: string;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({
  name,
  image,
  tags,
  deliveryInfo,
  rating,
  reviewsCount,
  minOrder,
}) => {
  const [openReviewModal, setOpenReviewModal] = React.useState<boolean>(false);
  const [openInfoModal, setOpenInfoModal] = React.useState(false);
  const [favourite, setFavourite] = React.useState<boolean>(false);


  return (
    <div className="flex items-center p-4 bg-white shadow-md">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-lg object-cover mr-4"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-500">{tags.join(" · ")}</p>
        <h1 className="text-4xl font-bold my-2">{name.toUpperCase()}</h1>
        <p className="text-sm text-red-500 font-semibold mb-2">
          <Bike className="inline mr-1.5 -mt-0.5" size={20} />
          {deliveryInfo}
          <span className="text-gray-500 ml-3 text-medium">
            · Min. order {minOrder}
          </span>
        </p>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">
            ⭐ {rating}/5 ({reviewsCount})
          </span>
          <button
            className="mx-3 text-gray-500 font-semibold cursor-pointer rounded-md bg-transparent py-2 px-4 hover:bg-gray-200"
            onClick={() => setOpenReviewModal(true)}
          >
            See Reviews
          </button>
          <button
            className="mx-3 text-gray-500 font-semibold cursor-pointer rounded-md bg-transparent py-2 px-4 hover:bg-gray-200"
            onClick={() => setOpenInfoModal(true)}
          >
            <Info className="inline mr-1.5 -mt-0.5" size={20} />
            More info
          </button>
        </div>
      </div>
      <button className={`border border-gray-500 rounded-md p-4 text-sm ${favourite ? "border-primary" : ""}`} onClick={() => setFavourite(!favourite)}>
        {favourite ? (
          <Heart className="inline mr-1" fill="#EA005E" stroke="#EA005E" size={20} />
        ) : (
          <Heart className="inline mr-1" fill="#ffff" size={20} />
        )}
        <span className={`text-sm font-semibold ml-1 text-gray-500 ${favourite ? "text-primary" : ""}`}>
          Add to favourites
        </span>
      </button>
    </div>
  );
};

export default RestaurantHeader;
