import React from "react";

interface HeaderProps {
  name: string;
  image: string;
}

const TopPart: React.FC<HeaderProps> = ({ name, image }) => {
  return (
    <div className="relative w-full h-64">
      <img src={image} alt={name} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{name}</h1>
      </div>
    </div>
  );
};

export default TopPart;
