import { ArrowLeft, ArrowRight } from "lucide-react";

export const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 border border-gray-200"
    >
      <ArrowLeft className="w-6 h-6 text-pink-600" />
    </button>
  );
};

export const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 border border-gray-200"
    >
      <ArrowRight className="w-6 h-6 text-pink-600" />
    </button>
  );
};
