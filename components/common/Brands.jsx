"use client";
import { brandLogos } from "@/data/brands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
export default function Brands() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2500,
    loop: true,
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="container">
      
      <Swiper {...swiperOptions} className="swiper brand-slider">
        {brandLogos.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="brand-image center">
              <Image
                width={400}
                height={120}
                style={{ objectFit: "contain" }}
                src={src}
                alt={`Brand logo ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
