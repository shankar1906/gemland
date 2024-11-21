"use client";
import { serviceItems } from "@/data/services";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import Image from "next/image";
export default function Services() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot",
      clickable: true,
    },
    navigation: {
      nextEl: ".snbp1",
      prevEl: ".snbn1",
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
      className="service-section fix section-padding bg-cover  scrollSpySection"
      style={{ backgroundImage: "url(/assets/img/service/service-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title text-center mt-2">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long"></i>WHAT WE OFFER
            <i className="fa-regular fa-arrow-right-long"></i>
          </h6>
          <h2 className="text-white splt-txt wow">
            <AnimatedText text="Create The Building " />
            <br />
            <AnimatedText text="You Want Here" />
          </h2>
        </div>
        <div className="array-button">
          <button className="array-prev snbp1">
            <i className="fa-regular fa-arrow-left-long"></i>
          </button>
          <button className="array-next snbn1">
            <i className="fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper {...swiperOptions} className="swiper service-slider">
          {serviceItems.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="service-box-items">
                <div className="service-thumb">
                  <Image src={item.imgSrc} width={346} height={236} alt="img" />
                  <div className="icon">
                    <Image
                      src={item.iconSrc}
                      width={32}
                      height={32}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="service-content">
                  <h2 className="number">{item.number}</h2>
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
                    Explore More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
