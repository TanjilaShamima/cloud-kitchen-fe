import React from "react";
import QuantitySelector from "@/@components/common/QuantitySelector";
import AddonList from "./AddonList";
import { CART_ITEMS } from "./dummydata";

const CartItemCard: React.FC<{
  item: (typeof CART_ITEMS)[0];
  onQuantityChange: (q: number) => void;
  onAddonChange: (addonId: number, q: number) => void;
  onInstructionsChange: (val: string) => void;
}> = ({ item, onQuantityChange, onAddonChange, onInstructionsChange }) => (
  <div className="bg-white border border-pink-200 rounded-xl shadow-md p-4 mb-4 transition hover:shadow-lg">
    <div className="flex gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="size-14 sm:size-20 object-cover rounded-lg border border-gray-100"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <div className="text-pink-500 font-medium">
              Tk{item.basePrice.toFixed(2)}
            </div>
          </div>

          <QuantitySelector
            quantity={item.quantity}
            setQuantity={onQuantityChange}
          />
        </div>
        <AddonList addons={item.addons} onChange={onAddonChange} />
      </div>
    </div>
  </div>
);

export default CartItemCard;
