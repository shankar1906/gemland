"use client";
import React from "react";
import Pagination from "../common/Pagination";
import { newsItems3 } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../common/AnimatedText";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../app/api/db/config";
export default function Blogs() {
  const [data, setData] = useState([]);

  const fetchBlog = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const BlogData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(BlogData);
    } catch (e) {
      console.error("Error fetching banners: ", e);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <section className="news-section fix section-padding pt-0">
      <div className="section-title text-center breadcrumb-title">
        <h2 className="splt-txt wow" style={{ color: '#ffcd1f' }}>
          <AnimatedText text="Explore Our Blog" /> <br />
        </h2>
      </div>
      <div className="container">
        <div className="row text-center pb-3">
        </div>
        <div className="row g-4">
          {data.map((e) => (
            <div
              key={e.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            >
              <div className="news-box-items mt-0">
                <div className="news-image">

                  <Image

                    src={e.img}
                    width={370}
                    height={198}
                    alt="img"
                    style={{ width: '100%', height: '35vh' }}
                  />
                  <Image

                    src={e.img}
                    width={370}
                    height={198}
                    alt="img"
                    style={{ width: '100%', height: '35vh' }}
                  />

                </div>
                <div className="news-content">
                  <ul className="post-list">
                    {/* <li>{news.category}</li>
                    <li>{news.date}</li> */}
                    <li>Ploats & Villas</li>
                    <li></li>
                  </ul>
                  <h4>
                    <Link href={`/blog/${e.url}`}>
                      {e.title}
                    </Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <Image
                        src="/assets/img/testimonial/male.png"
                        width={40}
                        height={40}
                        alt="img"
                      />
                      <div className="content">
                        <h6>Gemland</h6>
                        <p>Blogs</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${e.url}`}
                      className="link-btn"
                    >
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className="page-nav-wrap pt-5 text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <ul>
            <Pagination />
          </ul>
        </div> */}
      </div>
    </section>
  );
}
