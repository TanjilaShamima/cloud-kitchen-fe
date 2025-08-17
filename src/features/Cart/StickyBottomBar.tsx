import React from "react";
import Button from "@/@components/ui/Button";

const StickyBottomBar: React.FC<{ total: number }> = ({ total }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-200 shadow-md p-4 flex justify-between items-center md:hidden z-20">
    <span className="font-semibold text-lg">Total: Tk{total.toFixed(2)}</span>
    <Button className="px-6 py-2 rounded-full transition font-semibold">
      Checkout
    </Button>
  </div>
);

export default StickyBottomBar;
