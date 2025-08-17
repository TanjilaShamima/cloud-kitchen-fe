import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionLayout = ({ children, className }: Props) => {
  return (
    <div className={`2xl:max-w-[1500px] w-full px-4 lg:px-8 xl:px-12 2xl:px-20 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default SectionLayout;
