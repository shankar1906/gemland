"use client";
import { testimonials2 } from "@/data/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Testimonials() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: ".snbp4",
      prevEl: ".snbn4",
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className="testimonial-section-2 fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            testimonial
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="What Our Client Say" />
          </h2>
        </div>
        <div className="array-button">
          <button className="array-prev snbp4">
            <i className="fa-solid fa-arrow-left-long" />
          </button>
          <button className="array-next snbn4">
            <i className="fa-solid fa-arrow-right-long" />
          </button>
        </div>
        <Swiper {...swiperOptions} className="swiper testimonial-slider-2">
          {testimonials2.map((testimonial, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className={`testimonial-card-items ${testimonial.style}`}>
                <div className="shape-img">
                  <Image
                    src={testimonial.shapeImgSrc}
                    width={110}
                    height={107}
                    alt="shape"
                  />
                </div>
                <p>{testimonial.text}</p>
                <div className="client-info-items">
                  <div className="client-info">
                    <Image
                      src={testimonial.clientImgSrc}
                      width={100}
                      height={100}
                      alt="client"
                    />
                    <div className="content">
                      <h4>{testimonial.clientName}</h4>
                      <span>{testimonial.clientRole}</span>
                      <div className="star">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <i className="fa-solid fa-star" key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                  <Image
                    src={testimonial.logoSrc}
                    width={95}
                    height={28}
                    style={{ height: "fit-content" }}
                    alt="logo"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
