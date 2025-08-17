"use client";
import SectionLayout from "@/@components/common/SectionLayout";
import FoodCard from "./FoodCard";
import SidebarMenu from "./FoodSectionMenu";
import FilterMenu from "./FilterMenu";
import React from "react";
import RestaurantSection from "./RestaurantSection";

const FoodSection = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [itemName, setItemName] = React.useState("");
  return (
    <section className="flex gap-5 h-auto">
      <aside className="hidden md:block sticky shrink-0 top-10 left-0 w-[300px] mb-10">
        <FilterMenu />
      </aside>
      <main className="flex-1 overflow-hidden">
        <RestaurantSection />
      </main>
    </section>
  );
};

export default FoodSection;
