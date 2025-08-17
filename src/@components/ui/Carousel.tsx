"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

interface CarouselProps {
  slidesToShow?: number;
  slidesToShowMd?: number;
  slidesToShowSm?: number;
  slidesToShowXSm?: number;
  slidesToScroll?: number;
  dots?: boolean;
  infinite?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function CarouselMultipleItems({
  slidesToShow = 4,
  slidesToShowMd = 3,
  slidesToShowSm = 2,
  slidesToShowXSm = 1,
  slidesToScroll = 1,
  dots = false,
  infinite = false,
  className,
  children,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };

  const isLeftArrowHidden = currentSlide === 0;
  const isRightArrowHidden =
    currentSlide >= React.Children.count(children) - slidesToShow;

  const settings = {
    dots,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    swipeToSlide: true,
    arrows: true,
    nextArrow: isRightArrowHidden ? undefined : <CustomNextArrow />,
    prevArrow: isLeftArrowHidden ? undefined : <CustomPrevArrow />,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShowMd || 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShowSm || 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: slidesToShowXSm || 1,
        },
      },
    ],
  };

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
