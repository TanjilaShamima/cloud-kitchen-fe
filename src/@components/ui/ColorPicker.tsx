import Input from "./Input";

interface ColorPickerProps {
  label: string;
  color: string;
  handleColor: (color: string) => void;
  name?:string
}

export default function ColorPicker({
  label,
  color,
  name,
  handleColor,
}: ColorPickerProps) {
  return (
    <div className="relative flex w-full">
      <Input type="text" value={color} label={label} className="pr-16" onChange={(e) => handleColor(e.target.value)} />

      <input
        type="color"
        name={name}
        value={color}
        className="!absolute right-1 top-1 rounded w-10 h-8 cursor-pointer"
        onChange={(e) => {
          handleColor(e.target.value);
        }}
      />
    </div>
  );
}
