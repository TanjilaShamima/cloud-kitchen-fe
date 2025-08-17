import { Select, SelectProps, SelectOptionProps, Option } from "@material-tailwind/react";
import React from "react";

interface Option extends SelectOptionProps {
  value: string;
  index: number;
  children: React.ReactNode;
}

interface SelectBoxProps extends SelectProps {
  options: Option[];
}

export default function SelectBox({ options, ...rest }: SelectBoxProps) {
  return (    
      <Select {...rest}>
        {options.map((option) => (
          <Option key={option.index} value={option.value}>
            {option.children}
          </Option>
        ))}
      </Select>
  );
}