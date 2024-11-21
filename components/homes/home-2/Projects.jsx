"use client";

import { projectItems } from "@/data/projects";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Pagination],
    pagination: {
      el: ".project-dot",
    },
    breakpoints: {
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
      className="project-section section-padding pt-0 fix scrollSpySection"
      id="projects"
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" />
              latest project gallery
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="splt-txt wow">
              <AnimatedText text="Explore Our Project" />
            </h2>
          </div>
          <Link
            href={`/project`}
            className="theme-btn wow fadeInUp"
            data-wow-delay=".4s"
          >
            View all Projects <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
      </div>
      <div className="project-wrapper-2">
        <Swiper {...swiperOptions} className="swiper project-slider">
          {projectItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="project-thumb">
                <Image
                  src={item.imgSrc}
                  width={850}
                  height={580}
                  alt="Project"
                />
                <div className="project-content">
                  <div className="content">
                    <h3>
                      <Link href={`/project-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <span>
                      <i className="fa-sharp fa-solid fa-location-dot" />{" "}
                      {item.location}
                    </span>
                  </div>
                  <h2 className="number">{item.number}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="project-dot" />
        </Swiper>
      </div>
    </section>
  );
}
