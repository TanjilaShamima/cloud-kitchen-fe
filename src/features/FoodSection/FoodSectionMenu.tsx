"use client";

import React, { useState } from "react";

const menuData = [
  { name: "Breakfast", subItems: ["Eggs", "Pancakes", "Toast", "Parata"] },
  { name: "Lunch", subItems: ["Rice", "Chicken", "Salad"] },
  { name: "Dinner", subItems: ["Soup", "Fish", "Noodles"] },
  { name: "Snacks", subItems: ["Cookies", "Chips", "Fruit", ""] },
  {
    name: "Custom Menu",
    subItems: ["Available Custom Menu", "Create a custom menu"],
  },
  { name: "Set Menu", subItems: ["Combo 1", "Combo 2"] },
];

interface Props {
  setItemName: React.Dispatch<React.SetStateAction<string>>;
  itemName: string;
}

const SidebarMenu = ({ setItemName, itemName }: Props) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="w-full h-auto bg-white p-4 border-2 border-black-50 rounded-md">
      {menuData.map((menu) => {
        const isOpen = openMenus[menu.name];
        return (
          <div key={menu.name} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer font-semibold text-lg"
              onClick={() => toggleMenu(menu.name)}
            >
              <span>{menu.name}</span>
              <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700 cursor-pointer">
                {menu.subItems.map((sub, idx) => (
                  <li key={idx} className="hover:font-bold">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
