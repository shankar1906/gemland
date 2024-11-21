"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".array-prevs",
      nextEl: ".array-nexts",
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      1199: {
        slidesPerView: 2,
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
  const images = [
    "/assets/img/hero/1.jpg",
    "/assets/img/hero/2.jpg",
    "/assets/img/hero/3.jpg",
    "/assets/img/hero/4.jpg",
    // Add more image paths as needed
  ];
  return (
    <>
      <section className="hero-section hero-1 fix">
        <div className="video-background">
          <video autoPlay loop muted className="video-elem">
            <source src="/assets/img/bg.mp4" type="video/mp4" />
          </video>
          <div className="video-content">
            <div className="container">
              <div className="row">
                <h2 className="splt-txt wow text-white">
                  <AnimatedText text="Welcome to Gemland Property" />
                </h2>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  We connect you with luxurious, well-located, and affordable homes. Find your perfect place with exceptional service!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="line-shape">
          <Image
            src="/assets/img/hero/line-shape.png"
            width={365}
            height={603}
            alt="img"
          />
        </div> */}
        {/* <div className="container-fluid">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="vector-shape">
                  <Image
                    src="/assets/img/hero/vector.png"
                    width={254}
                    height={296}
                    alt="img"
                  />
                </div>
                <div className="vector-shape-2">
                  <Image
                    src="/assets/img/hero/vector-2.png"
                    width={254}
                    height={296}
                    alt="img"
                  />
                </div>
                <h1 className="splt-txt wow">
                  <AnimatedText text="Discover your dream " />
                  <br /> <AnimatedText text="home with Us" />
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                We specialize in connecting you with luxurious, well-located, and affordable properties that perfectly match your lifestyle and needs.
                </p>
                <div className="hero-button">
                  <Link
                    href={`/about`}
                    className="theme-btn bg-white wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Explore More
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-items">
                <Swiper {...swiperOptions} className="swiper hero-slider">
                  {images.map((src, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="hero-image">
                        <Image
                          width={475}
                          height={635}
                          src={src}
                          alt={`Hero ${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="array-button">
                    <button className="array-prevs">
                      <Image
                        src="/assets/img/hero/prev.png"
                        width={15}
                        height={11}
                        alt="img"
                      />
                      Previews
                    </button>
                    <button className="array-nexts">
                      Next{" "}
                      <Image
                        src="/assets/img/hero/next.png"
                        width={15}
                        height={11}
                        alt="img"
                      />
                    </button>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
