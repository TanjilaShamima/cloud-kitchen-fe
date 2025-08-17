import Button from "@/@components/ui/Button";

const QuantitySelector: React.FC<{
  quantity: number;
  setQuantity: (v: number) => void;
  label?: string;
}> = ({ quantity, setQuantity, label }) => (
  <div className="flex items-center mb-6">
    {label && (
      <span className="text-gray-700 font-medium">{label}</span>
    )}
    <Button
      variant="outlined"
      size="sm"
      className="rounded-full px-3 min-w-[34px]"
      onClick={() => setQuantity(Math.max(0, quantity - 1))}
      aria-label="Decrease quantity"
    >
      –
    </Button>
    <input
      type="number"
      min={1}
      value={quantity}
      onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
      className="w-14 text-center"
    />
    <Button
      variant="outlined"
      size="sm"
      className="rounded-full px-3 min-w-[34px]"
      onClick={() => setQuantity(quantity + 1)}
      aria-label="Increase quantity"
    >
      +
    </Button>
  </div>
);

export default QuantitySelector;
