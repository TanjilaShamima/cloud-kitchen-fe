import React from "react";

const PriceSummaryCard: React.FC<{
  subtotal: number;
  delivery: number;
  taxes: number;
  discount: number;
  total: number;
}> = ({ subtotal, delivery, taxes, discount, total }) => (
  <div className="bg-white border border-pink-200 rounded-xl shadow-md p-4 mb-4">
    <h4 className="font-semibold mb-3">Order Summary</h4>
    <div className="flex justify-between text-sm mb-1">
      <span>Subtotal</span>
      <span>Tk{subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm mb-1">
      <span>Delivery Fee</span>
      <span>Tk{delivery.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm mb-1">
      <span>Taxes</span>
      <span>Tk{taxes.toFixed(2)}</span>
    </div>
    <div className="flex justify-between text-sm mb-1 text-green-600">
      <span>Discount</span>
      <span>-Tk{discount.toFixed(2)}</span>
    </div>
    <div className="border-t border-gray-100 my-2" />
    <div className="flex justify-between font-semibold text-lg">
      <span>Total</span>
      <span>Tk{total.toFixed(2)}</span>
    </div>
  </div>
);

export default PriceSummaryCard;
