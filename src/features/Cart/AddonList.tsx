import QuantitySelector from "@/@components/common/QuantitySelector";

const AddonList: React.FC<{
  addons: { id: number; name: string; price: number; quantity: number }[];
  onChange: (id: number, quantity: number) => void;
}> = ({ addons, onChange }) => (
  <div className="mt-2 space-y-2">
    {addons.map((addon) => (
      <div key={addon.id} className="flex items-center justify-between text-sm">
        <span className="text-gray-700">
          {addon.name}{" "}
          <span className="text-gray-400">+Tk{addon.price.toFixed(2)}</span>
        </span>
        <QuantitySelector
          quantity={addon.quantity}
          setQuantity={(q) => onChange(addon.id, q)}
        />
      </div>
    ))}
  </div>
);

export default AddonList;
