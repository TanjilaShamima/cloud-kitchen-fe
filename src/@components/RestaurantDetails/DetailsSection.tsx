import React from "react";

interface DetailsSectionProps {
  address: string;
  rating: number;
  cuisine: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({
  address,
  rating,
  cuisine,
}) => {
  return (
    <div className="p-4">
      <p className="text-lg font-semibold">Address: {address}</p>
      <p className="text-lg font-semibold">Rating: {rating} / 5</p>
      <p className="text-lg font-semibold">Cuisine: {cuisine}</p>
    </div>
  );
};

export default DetailsSection;
