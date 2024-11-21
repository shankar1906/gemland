import { newsItems2 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Blogs() {
  return (
    <section
      className="news-section fix section-padding pt-0 scrollSpySection"
      id="blog"
    >
      <div className="shape-3 float-bob-y">
        <Image
          src="/assets/img/news/shape-3.png"
          width={261}
          height={272}
          alt="img"
        />
      </div>
      <div className="shape-4 float-bob-y">
        <Image
          src="/assets/img/news/shape-4.png"
          width={413}
          height={232}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp">
              <i className="fa-regular fa-arrow-left-long" />
              Blog &amp; News
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="splt-txt wow">
              <AnimatedText text="Latest News & Blog" />
            </h2>
          </div>
          <Link
            href={`/news-grid`}
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            View all post <i className="fa-regular fa-arrow-right" />
          </Link>
        </div>
        <div className="row">
          {newsItems2.map((news) => (
            <div
              key={news.id}
              className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`}
              data-wow-delay={`${news.id * 0.2}s`}
            >
              <div className={`news-box-items ${news.style}`}>
                <div className="news-image">
                  <Image
                    src={news.imageSrc}
                    width={370}
                    height={198}
                    alt="news"
                  />
                  <Image
                    src={news.imageSrc}
                    width={370}
                    height={198}
                    alt="news"
                  />
                </div>
                <div className="news-content">
                  <ul className="post-list">
                    <li>{news.category}</li>
                    <li>{news.date}</li>
                  </ul>
                  <h4>
                    <Link href={`/news-details/${news.id}`}>{news.title}</Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <Image
                        src={news.authorImgSrc}
                        width={40}
                        height={40}
                        alt="author"
                      />
                      <div className="content">
                        <h6>Admin</h6>
                        <p>{news.authorName}</p>
                      </div>
                    </div>
                    <Link
                      href={`/news-details/${news.id}`}
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
      </div>
    </section>
  );
}
