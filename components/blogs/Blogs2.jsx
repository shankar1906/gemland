"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Pagination from "../common/Pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { links, listItems, newsItems4, recentItems } from "@/data/blogs";

export default function Blogs2() {
  const [isOpen, setOpen] = useState(false);
  const swiperOptions = {
    // Corrected variable name from "newsPostPlider"
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation],
    navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
    },
  };
  return (
    <>
      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="news-standard-wrapper">
                {newsItems4.map((item, index) => (
                  <div className="news-standard-items" key={index}>
                    {item.type === "standard" && (
                      <div className="news-thumb">
                        <Image
                          src={item.imageSrc}
                          width={740}
                          height={396}
                          alt="img"
                        />
                      </div>
                    )}
                    {item.type === "slider" && (
                      <>
                        <div className="array-button">
                          <button className="array-prev">
                            <i className="fa-regular fa-arrow-left-long" />
                          </button>
                          <button className="array-next">
                            <i className="fa-regular fa-arrow-right-long" />
                          </button>
                        </div>
                        <Swiper className="swiper news-post-slider">
                          {item.swiperSlides?.map((image, slideIndex) => (
                            <SwiperSlide
                              className="swiper-slide"
                              key={slideIndex}
                            >
                              <div className="news-thumb">
                                <Image
                                  width={740}
                                  height={396}
                                  src={image}
                                  alt={`Slide ${slideIndex + 1}`}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </>
                    )}
                    {item.type === "video" && (
                      <div className="news-thumb">
                        <Image
                          src={item.imageSrc}
                          width={740}
                          height={396}
                          alt="img"
                        />
                        <div className="video-box">
                          <a
                            onClick={() => setOpen(true)}
                            className="video-btn video-popup"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="news-content">
                      <ul className="date-list">
                        <li>
                          <i className="fa-regular fa-user" />
                          By Admin
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar-days" />
                          {item.date}
                        </li>
                        <li>
                          <i className="fa-regular fa-tag" />
                          {item.category}
                        </li>
                      </ul>
                      <h3>
                        <Link href={`/news-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p>{item.content}</p>
                      <div className="news-button">
                        <Link
                          href={`/news-details/${item.id}`}
                          className="theme-btn mt-4"
                        >
                          read more <i className="fa-regular fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  className="page-nav-wrap wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <ul>
                    <Pagination />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Search</h3>
                  </div>
                  <div className="search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search here" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {listItems.map((item, index) => (
                        <li
                          key={index}
                          className={item.isActive ? "active" : ""}
                        >
                          <a href={item.link}>{item.text}</a>{" "}
                          <span>{item.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>
                  <div className="recent-post-area">
                    {recentItems.map((item, index) => (
                      <div className="recent-items" key={index}>
                        <div className="recent-thumb">
                          <Image
                            src={item.imageSrc}
                            width={70}
                            height={70}
                            alt="img"
                          />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days" />
                              {item.date}
                            </li>
                          </ul>
                          <h6>
                            <Link
                              href="/news-details"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Popular Tag</h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {links.map((link, index) => (
                        <Link href={link.href} key={index}>
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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
