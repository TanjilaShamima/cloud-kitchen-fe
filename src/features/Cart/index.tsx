"use client";

import React, { useState } from "react";
import Button from "@/@components/ui/Button";
import {
  CART_ITEMS,
  DELIVERY_FEE,
  DUMMY_DISCOUNT,
  TAX_RATE,
} from "./dummydata";
import PromoCodeInput from "./PromoCodeInput";
import CartItemCard from "./CartItemCard";
import PriceSummaryCard from "./PriceSummaryCard";
import SuggestionsCarousel from "./SuggestionsCarousel";
import StickyBottomBar from "./StickyBottomBar";

const CartDetails: React.FC = () => {
  const [cart, setCart] = useState(CART_ITEMS);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Cart calculations
  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      item.basePrice * item.quantity +
      item.addons.reduce(
        (a, ad) => a + ad.price * ad.quantity * item.quantity,
        0
      ),
    0
  );
  const taxes = subtotal * TAX_RATE;
  const discount = promoApplied ? DUMMY_DISCOUNT : 0;
  const total = subtotal + DELIVERY_FEE + taxes - discount;

  // Handlers
  const handleQuantityChange = (idx: number, q: number) => {
    setCart((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, quantity: q } : item))
    );
  };
  const handleAddonChange = (itemIdx: number, addonId: number, q: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === itemIdx
          ? {
              ...item,
              addons: item.addons.map((ad) =>
                ad.id === addonId ? { ...ad, quantity: q } : ad
              ),
            }
          : item
      )
    );
  };
  const handleInstructionsChange = (idx: number, val: string) => {
    setCart((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, instructions: val } : item))
    );
  };
  const handlePromoApply = () => {
    setPromoApplied(true);
  };
  const handleClearCart = () => {
    setCart([]);
  };
  const handleContinueShopping = () => {
    // Dummy: redirect or close cart
  };

  return (
    <div className="min-h-screen bg-white pb-32 md:pb-8">
      <div className="max-w-4xl mx-auto pt-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center text-gray-400 py-16">
            Your cart is empty.
          </div>
        ) : (
          <>
            {cart.map((item, idx) => (
              <CartItemCard
                key={item.id}
                item={item}
                onQuantityChange={(q) => handleQuantityChange(idx, q)}
                onAddonChange={(addonId, q) =>
                  handleAddonChange(idx, addonId, q)
                }
                onInstructionsChange={(val) =>
                  handleInstructionsChange(idx, val)
                }
              />
            ))}
            <PromoCodeInput
              value={promo}
              onChange={setPromo}
              onApply={handlePromoApply}
              applied={promoApplied}
            />
            <PriceSummaryCard
              subtotal={subtotal}
              delivery={DELIVERY_FEE}
              taxes={taxes}
              discount={discount}
              total={total}
            />
            <div className="flex gap-2 mb-4">
              <Button
                variant="filled"
                className="flex-1"
                size="lg"
                onClick={handleClearCart}
                disabled={cart.length === 0}
              >
                Clear Cart
              </Button>

              <Button
                variant="filled"
                className="flex-1"
                size="lg"
                onClick={handleContinueShopping}
              >
                Review Payment and Checkout
              </Button>
            </div>
          </>
        )}
        <SuggestionsCarousel />
      </div>
      {cart.length > 0 && (
        <div className="md:hidden">
          <StickyBottomBar total={total} />
        </div>
      )}
    </div>
  );
};

export default CartDetails;
