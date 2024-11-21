
"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs } from "firebase/firestore";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { db } from "@/app/api/db/config";
import AnimatedText from "@/components/common/AnimatedText";
import captilize from "../../utlis/captilize"

export default function ProjectsHome({ type = null }) {
  const [data, setProject] = useState();

  const fetchProject = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const ProjectData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sortedData = ProjectData.sort((a, b) => a.order - b.order);
      setProject(sortedData);
    } catch (e) {
      console.error("Error fetching Project: ", e);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);
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
      className="service-section fix py-5 bg-cover  scrollSpySection"
      style={{ backgroundImage: "url(/assets/img/service/service-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h2 className="splt-txt wow" style={{ color: "#fff" }}>
            <AnimatedText text={`Our${type ? ` ${type} ` : " "}Projects`} />
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
        {/* Firebase Data Fetching */}

        <Swiper {...swiperOptions} className="swiper service-slider">
          {data?.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <Link href={`/project-details/${item.projectStatus.split(' ')[0].toLowerCase()}/${item.url}`}>
                <div className="service-box-items">
                  <div className="service-thumb">
                    <Image src={item.Projectimage} width={300} height={200} alt="img" />
                    {/* <div className="icon">
                      <Image
                        src={"/assets/img/icon/icon1.svg"}
                        width={32}
                        height={32}
                        alt="img"
                      />
                    </div> */}
                  </div>
                  <div className="service-content">
                    {/* <h2 className="number">{Number(index + 1) <= 9 ? "0" : ""}{index + 1}</h2> */}
                    <h3>
                      <Link href={`/project-details/${item.projectStatus.split(' ')[0].toLowerCase()}/${item.url}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p style={{ height: '60px' }} className="d-flex flex-row gap-2">
                      <i className="fa-solid fa-location-dot" style={{ color: "#ff0000" }}></i>
                      <span style={{ marginTop: '-5px', textTransform: 'capitalize' }}>{captilize(item.location)}</span>
                    </p>
                    <Link
                      href={`/project-details/${item.projectStatus.split(' ')[0].toLowerCase()}/${item.url}`}
                      className="link-btn"
                    >
                      Explore More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
