import React, { ReactNode } from "react";

interface FormControlProps {
  label: string;
  hints?: ReactNode;
  hintsError?: string;
  children?: React.ReactNode;
  className?: string;
}
export default function FormControl({
  label,
  hints,
  hintsError,
  children,
  className
}: FormControlProps) {
  return (
    <>
      <div className={`grid grid-cols-formControl py-1 gap-2 w-full ${className}`}>
        <div className="text-black-700">
          <p className="text-base font-medium">{label}</p>
          {hints && <div className="text-sm">{hints}</div>}
          {hintsError && (
            <span className="text-sm font-medium text-red-400">
              {hintsError}
            </span>
          )}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
