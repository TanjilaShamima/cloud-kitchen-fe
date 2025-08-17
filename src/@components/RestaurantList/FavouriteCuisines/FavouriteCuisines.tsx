import CarouselMultipleItems from "@/@components/ui/Carousel";
import { categories } from "@/@utils/dummyData";
import { useRouter } from "next/navigation";

const FavouriteCuisines = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <h2 className="text-dark-black text-3xl font-semibold">
        Your favourite cuisines
      </h2>
      {/* Add your favourite cuisines here */}

      <div className="w-full mt-5 bg-white px-5">
        <CarouselMultipleItems
          slidesToShow={8}
          slidesToShowMd={5}
          slidesToShowSm={4}
          slidesToShowXSm={3}
          slidesToScroll={1}
          dots={false}
        >
          {categories.map((r) => (
            <div>
              <div
                key={r.id}
                className="mx-auto !w-24 !h-24 cursor-pointer flex flex-col items-center bg-gray-100 rounded-md justify-center overflow-hidden"
                onClick={() => router.push(`/category/${r.id}`)}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-24 h-20 object-cover transition-transform duration-300 hover:scale-110 mx-auto mt-auto rounded-md overflow-hidden"
                  style={{ transformOrigin: "center" }}
                />
              </div>
              <p className="text-center text-primary text-sm font-bold mt-2">
                {r.name}
              </p>
            </div>
          ))}
        </CarouselMultipleItems>
      </div>
    </div>
  );
};

export default FavouriteCuisines;
