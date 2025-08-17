import React from "react";
import SimpleLoader from "./SimpleLoader";

interface LoaderWrapperProps {
  show: boolean;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <SimpleLoader />
    </div>
  );
};

export default LoaderWrapper;
