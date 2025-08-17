import { Select, Option } from "@material-tailwind/react";
import React from "react";

interface ItemProps {
  name: string;
  flags?: { svg: string };
}

interface ComboBoxProps {
  items: ItemProps[];
  label: string;
  size?: "md" | "lg";
  variant?: "standard" | "outlined" | "static";
  handleChange?: (value: string | undefined) => void;
}

export default function ComboBox({ items, label, size, variant = "outlined", handleChange }: ComboBoxProps) {
  return (
    <Select
      label={label}
      className="bg-white"
      placeholder={label}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      variant={variant}
      size={size}
      selected={(element) =>
        element &&
        React.cloneElement(
          element as React.ReactElement<any>,
          {
            // disabled: true,
            className:
              "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
          }
        )
      }
      onChange={handleChange}
    >
      {items.map(({ name, flags }: ItemProps) => (
        <Option key={name} value={name} className="flex items-center gap-2">
          {flags && (
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
          )}
          {name}
        </Option>
      ))}
    </Select>
  );
}
