"use client";
import { bannerSlider } from "@/@contents/homepageContent";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const FoodBannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      {bannerSlider?.map((item, index) => (
        <div key={index} className="relative h-[420px] md:h-[500px]">
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            <Image
              src={item.image as any}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-black/10" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow mb-4 tracking-tight">
              {item.title}
            </h2>
            {item.description && (
              <p className="max-w-2xl text-sm md:text-lg font-medium mb-6 text-white/90">
                {item.description}
              </p>
            )}
            {item.buttonText && item.buttonLink && (
              <Link
                href={item.buttonLink}
                className="px-6 md:px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 font-semibold shadow-lg hover:scale-105 transition-transform border border-white/30 backdrop-blur-md"
              >
                {item.buttonText}
              </Link>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FoodBannerSlider;
