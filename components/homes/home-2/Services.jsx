"use client";
import { serviceItems2 } from "@/data/services";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Services() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, Pagination],
    pagination: {
      el: ".service-dot",
    },
    navigation: {
      prevEl: ".snbp3",
      nextEl: ".snbn3",
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
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
    <section
      id="services"
      className="service-section fix section-padding section-bg scrollSpySection"
    >
      <div className="bg-shape">
        <Image
          src="/assets/img/service/bg-shape.png"
          width={1920}
          height={852}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            quality Services
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="text-white splt-txt wow">
            <AnimatedText text="Best Of Our High Quality" /> <br />
            <AnimatedText text="Constriction" />
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper {...swiperOptions} className="swiper service-slider-2">
          {serviceItems2.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="service-card-items">
                <div className="service-image">
                  <Image
                    src={item.serviceImage}
                    width={370}
                    height={367}
                    alt="Service"
                  />
                </div>
                <div className="bar-shape">
                  <Image
                    src={item.barShape}
                    width={290}
                    height={118}
                    alt="Bar Shape"
                  />
                </div>
                <div className="icon">
                  <Image src={item.icon} width={40} height={40} alt="Icon" />
                </div>
                <div className="content">
                  <h3>
                    <Link href={`/service-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link
                    href={`/service-details/${item.id}`}
                    className="link-btn"
                  >
                    Explore More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
                <div className="items-shape">
                  <Image
                    src={item.itemsShape}
                    width={370}
                    height={178}
                    alt="Items Shape"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-dot mt-5">
            <div className="dot" />
          </div>
        </Swiper>
      </div>
      <div className="container">
        <div className="service-pagi-items">
          <div className="service-dot" />
          <div className="array-buttons">
            <button className="array-prev snbp3">
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button className="array-next snbn3">
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
