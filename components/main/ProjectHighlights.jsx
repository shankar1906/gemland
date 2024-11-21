import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectHighlights = ({highlights = []}) => {

    console.log(highlights)

    const swiperOptions = {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        modules: [Autoplay],
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
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
        <>
            <div className="container">
                <Swiper {...swiperOptions} className="swiper service-slider">
                    {highlights?.map((item, index) => (
                        <SwiperSlide className="swiper-slide border" key={index}>
                            <div className="service-box-items">
                                <div className="service-thumb">
                                    <Image src={item.photoUrl} width={346} height={236} alt={`${item.name}`} />
                                    {/* <div className="icon">
                                        <Image
                                            src={item?.iconSrc}
                                            width={32}
                                            height={32}
                                            alt="img"
                                        />
                                    </div> */}
                                </div>
                                <div className="service-content">
                                    <h5>
                                        <Link href={`#`}>
                                            {item.name}
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default ProjectHighlights