"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const FoodImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const handleThumbnailClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full ">
            <div
              className="relative w-full aspect-video lg:aspect-square"
              style={{ maxHeight: "60vh" }}
            >
              <Image
                src={image}
                alt={`Food Image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border cursor-pointer p-1 ${
              currentSlide === index
                ? "border-pink-500 border-2"
                : "border-gray-200"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodImageSlider;
