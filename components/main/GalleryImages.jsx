import React from 'react'
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';

const GalleryImages = ({ galleryURLs }) => {
    const swiperOptions = {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
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
        <Swiper {...swiperOptions} className="swiper project-slider">
            {galleryURLs?.map((imageUrl, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <div className="project-thumb">
                        <Image
                            src={imageUrl}
                            width={850}
                            height={580}
                            alt="Project"
                            style={{width: '100%', height: '350px'}}
                        />
                    </div>
                </SwiperSlide>
            ))}
            <div className="project-dot" />
        </Swiper>
    );
}

export default GalleryImages