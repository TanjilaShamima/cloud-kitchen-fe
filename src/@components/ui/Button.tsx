"use client";
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@material-tailwind/react";

interface ButtonProps extends MaterialButtonProps {}

export default function Button({
  variant = "filled",
  size,
  color,
  fullWidth,
  ripple = false,
  className,
  children,
  loading,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <MaterialButton
      variant={variant}
      size={size}
      color={color}
      fullWidth={fullWidth}
      ripple={ripple}
      onClick={onClick}
      className={`${className} ${
        variant === "filled" &&
        "bg-primary-gradient hover:primary-gradient active:primary-gradient disabled:bg-gray-400"
      } ${
        variant === "outlined" &&
        "border-primary text-black-500 hover:border-primary hover:text-primary active:border-primary active:text-black-400 disabled:border-black-100 disabled:text-black-100"
      } rounded-full font-normal normal-case font-opensans flex justify-center items-center active:opacity-100 focus:ring-0 focus:opacity-100 focus-visible:border-none focus-visible:outline-none`}
      loading={loading}
      disabled={disabled}
    >
      {children}
    </MaterialButton>
  );
}
