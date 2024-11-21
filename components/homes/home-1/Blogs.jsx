import { newsImageItems, newsItems } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
export default function Blogs() {
  return (
    <section
      id="blog"
      className="news-section fix section-padding fix section-bg-2  scrollSpySection"
    >
      <div className="shape-1 float-bob-y">
        <Image
          src="/assets/img/news/shape-1.png"
          width={165}
          height={116}
          alt="img"
        />
      </div>
      <div className="shape-2 float-bob-x">
        <Image
          src="/assets/img/news/shape-2.png"
          width={165}
          height={116}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Blog &amp; News
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Latest News & Blog" />
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
            {newsImageItems.map((item) => (
              <div
                key={item.id}
                className="news-image-items bg-cover"
                style={{ backgroundImage: `url("${item.backgroundImage}")` }}
              >
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-regular fa-user" />
                      {item.author}
                    </li>
                    <li>
                      <i className="fa-solid fa-tag" />
                      {item.category}
                    </li>
                  </ul>
                  <h3>
                    <Link href={`/news-details/${item.id}`}>
                      {item.title.split("<br />").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Link>
                  </h3>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="news-right-items">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="news-card-items wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="news-content">
                    <ul>
                      <li>
                        <i className="fa-regular fa-user" />
                        {item.author}
                      </li>
                      <li>
                        <i className="fa-solid fa-tag" />
                        {item.category}
                      </li>
                    </ul>
                    <h4>
                      <Link href={`/news-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p>
                      Pellentesque vitae consectetur ante <br />
                      Integer non eros...
                    </p>
                    <Link
                      href={`/news-details/${item.id}`}
                      className="link-btn"
                    >
                      Read More <i className="fa-regular fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="news-image">
                    <Image
                      src={item.imgSrc}
                      width={247}
                      height={258}
                      alt="img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
