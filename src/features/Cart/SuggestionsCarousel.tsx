import CarouselMultipleItems from "@/@components/ui/Carousel";
import { foodCategoryDummyData } from "@/@utils/dummyData";
import FoodCard from "@/@components/common/FoodCard";

const SuggestionsCarousel: React.FC = () => {
  return (
    <section className="p-4 w-full">
      {/* Header */}
      <h2 className="text-dark-black text-xl font-semibold">
        You may also like
      </h2>

      {/* Carousel */}
      <div className="w-full mt-5">
        <CarouselMultipleItems slidesToShow={2} slidesToScroll={1} dots={false}>
          {foodCategoryDummyData?.slice(0, 5).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </CarouselMultipleItems>
      </div>
    </section>
  );
};

export default SuggestionsCarousel;
