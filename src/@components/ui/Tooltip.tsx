import React from "react";
import { Tooltip as MaterialToolTop, TooltipProps } from "@material-tailwind/react";

type ITooltipPosition = "top" | "left" | "right" | "bottom";

type TooltipVariant = "default" | "light" | "dark";

type TooltipSize = "small" | "medium" | "large";

type RoundedSize = "none" | "sm" | "md" | "lg" | "full";

interface CustomTooltipProps extends TooltipProps {
  
  title: React.ReactNode;
  placement?: ITooltipPosition;
  children: React.ReactNode;
  variant?: TooltipVariant;
  size?: TooltipSize;
  className?: string;
  rounded?: RoundedSize; // New prop for dynamic rounded value
  
}

const variantClasses: Record<TooltipVariant, string> = {
  default: "bg-gray-900 text-white",
  light: "bg-white text-black border border-gray-300",
  dark: "bg-black text-white",
};

const sizeClasses: Record<TooltipSize, string> = {
  small: "p-1 text-xs",
  medium: "p-2 text-sm",
  large: "p-3 text-md",
};

const roundedClasses: Record<RoundedSize, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Tooltip: React.FC<CustomTooltipProps> = ({
  title,
  placement = "top",
  children,
  variant = "default",
  size = "medium",
  className = "",
  rounded = "md", // Default to medium rounded
  ...props
}) => {
  return (
    <MaterialToolTop
      content={title}
      placement={placement}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
      {...props}
    >
      {children}
    </MaterialToolTop>
  );
};

export default Tooltip;
