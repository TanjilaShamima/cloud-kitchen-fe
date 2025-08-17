"use client";
import {
  Input as MaterialInput,
  InputProps as MaterialInputProps,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import icEye from "@/@icons/ic-eye.svg";
import openIcEye from "@/@icons/ic-eye-open.svg";

interface InputProps extends Omit<MaterialInputProps, "error"> {
  error?: string;
  showErrorMessage?: boolean;
}
export default function Input({
  label,
  size,
  type,
  error,
  value,
  name,
  placeholder,
  className,
  disabled,
  onChange,
  maxLength,
  showErrorMessage = true,
  ...rest
}: InputProps) {
  const getRemainingCharacters = (value: string, maxLength: number) => {
    return maxLength - value.length;
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full relative">
      <MaterialInput
        labelProps={{
          className: `${
            label ? "focus: material-label-top-border-override" : "hidden"
          }`, // hide label style if not present. otherwise it will display a little empty box between top border
        }}
        type={type === "password" && showPassword ? "text" : type}
        name={name}
        value={value}
        label={label}
        placeholder={placeholder}
        size={size}
        error={Boolean(error)}
        className={`w-full ${className} ${
          !error && "placeholder-shown:border-t-gray-200"
        } ${
          label
            ? "focus:border-[1px]"
            : "border-[1px] focus:border-[1px]  material-input-override"
        }  ${!error && !label ? "material-input-top-border-override " : ""} ${
          error && !label ? "material-input-error-override" : ""
        }`}
        disabled={disabled}
        onChange={onChange}
        maxLength={maxLength}
        autoComplete="off"
        {...rest}
      />
      {/* Eye icon */}
      {type === "password" && (
        <div
          className="absolute h-10 inset-y-0 right-0 flex items-center px-3 cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault(); // Prevents the input blur from happening
            togglePasswordVisibility();
          }}
        >
          {showPassword ? (
            <Image src={openIcEye} alt="open eye icon" />
          ) : (
            <Image src={icEye} alt="eye icon" />
          )}
        </div>
      )}
      {maxLength && !error && value && (
        <p className="text-sm text-gray-500">
          {typeof value === "string" &&
            getRemainingCharacters(value, maxLength)}{" "}
          Character remaining
        </p>
      )}

      {showErrorMessage && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
