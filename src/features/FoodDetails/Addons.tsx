import Checkbox from "@/@components/ui/Checkbox";
import { addOns } from "./dummydata";

const AddOns: React.FC<{
  selected: number[];
  toggle: (id: number) => void;
}> = ({ selected, toggle }) => (
  <div className="rounded-xl shadow-sm p-4 mb-6 bg-pink-100">
    <div className="text-xl font-bold text-orange-600 mb-4 tracking-wide">
      Add-ons & Sides
    </div>
    <div className="flex flex-col gap-2">
      {addOns.map((addon) => (
        <label
          key={addon.id}
          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-2">
            <Checkbox
              name={`addon-${addon.id}`}
              id={`addon-${addon.id}`}
              checked={selected.includes(addon.id)}
              onChange={(e) => toggle(addon.id)}
            />
            <span className="text-gray-700">{addon.name}</span>
          </div>
          <span className="text-gray-600 font-medium">
            Tk {addon.price.toFixed(2)}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default AddOns;
