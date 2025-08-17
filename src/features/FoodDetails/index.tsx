"use client";

import React, { useState } from "react";
import Button from "@/@components/ui/Button";
import QuantitySelector from "@/@components/common/QuantitySelector";
import AddOns from "./Addons";
import DietaryRestrictions from "./Restrictions";
import FoodHeader from "./FoodHeader";
import NutritionPanel from "./NutritionPanel";
import { addOns, foodImages, foodItem, nutrition } from "./dummydata";
import ImageSlider from "./FoodImageSlider";
import Breadcrumbs from "@/@components/common/Breadcrumbs";

const FoodDetails = () => {
  const [instructions, setInstructions] = useState("");
  const [unfulfilled, setUnfulfilled] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);

  const totalAddOns = selectedAddOns
    .map((id) => addOns.find((a) => a.id === id)?.price || 0)
    .reduce((a, b) => a + b, 0);

  const basePrice = 120;
  const totalPrice = (basePrice + totalAddOns) * quantity;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="max-w-2xl mx-auto w-full ">
        {/* TODO: Update Breadcrumbs links to use dynamic restaurant and meal IDs */}
        <div className="sticky top-[120px] space-y-3">
        <Breadcrumbs
          items={[
            { label: "Homepage", href: "/" },
            { label: "Cook List", href: "/cooks" },
            { label: "Restaurant", href: "/cooks/1" },
            { label: foodItem.name, href: "/cooks/1/meal/1" },
          ]}
        />
        <ImageSlider images={foodImages} />
        </div>
        
      </div>
      <div className="max-w-2xl mx-auto py-12">
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 border border-gray-100">
          <FoodHeader {...foodItem} />
          <NutritionPanel {...nutrition} />
        </div>

        <DietaryRestrictions
          instructions={instructions}
          setInstructions={setInstructions}
          unfulfilled={unfulfilled}
          setUnfulfilled={setUnfulfilled}
        />
        <AddOns
          selected={selectedAddOns}
          toggle={(id) =>
            setSelectedAddOns((prev) =>
              prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
            )
          }
        />
        <div className="flex justify-end">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <Button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-md transition-all duration-200"
          size="lg"
        >
          Add to Cart • Tk {totalPrice.toFixed(2)}
        </Button>
      </div>
    </div>
  );
};

export default FoodDetails;
