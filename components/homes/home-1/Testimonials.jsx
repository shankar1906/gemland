"use client";
import { testimonials2 } from "@/data/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
export default function Testimonials() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".snbp2",
      prevEl: ".snbn2",
    },
  };
  return (
    <section className="testimonial-section fix py-5 section-bg">
      {/* <div className="arrow-shape float-bob-y d-none d-lg-block">
        <Image
          src="/assets/img/testimonial/arrow-shape.png"
          width={202}
          height={291}
          alt="img"
        />
      </div> */}
      <div className="building-shape float-bob-x">
        <Image
          src="/assets/img/testimonial/building-shape.png"
          width={931}
          height={520}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="row">
            <div className="col-lg-8">
              <div className="testimonial-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    testimonials
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="text-white splt-txt wow fs-2">
                    <AnimatedText text="What Client’s Say About Us!" />
                  </h2>
                </div>
                <Swiper
                  {...swiperOptions}
                  className="swiper testimonial-slider mt-md-0"
                >
                  {testimonials2.map((data, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="testi-content">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path d="M0 4V28L12 16V4H0Z" fill="#FFCD1F" />
                            <path d="M20 4V28L32 16V4H20Z" fill="#FFCD1F" />
                          </svg>
                          <h4>{data.text}</h4>
                        </div>
                        <div className="client-img d-flex gap-3 mt-3">
                          <Image
                            src={data.image}
                            alt="img"
                            width={60}
                            height={50}
                          />
                          <p className="client-name">{data.name}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-100 rounded mt-3">
                <Image
                  src="/assets/img/testimonial/Testimonials.png"
                  width={745}
                  height={508}
                  alt="img"
                  style={{ maxWidth: "100%",height:'300px',objectFit:'fill',borderRadius:'10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
