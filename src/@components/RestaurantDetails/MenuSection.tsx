import React from "react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuSectionProps {
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
