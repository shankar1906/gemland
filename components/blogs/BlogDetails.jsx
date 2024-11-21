"use client";
import Image from "next/image";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { links, listItems, recentItems, socialLinks } from "@/data/blogs";
import Link from "next/link";
export default function BlogDetails({ newsItem }) {
  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-12">
            <div className="blog-post-details">
              <div className="single-blog-post">
                <div
                  className="post-featured-thumb bg-cover"
                  style={{
                    backgroundImage: `url("${newsItem.img}")`,
                  }}
                />
                <div className="post-content">
                  <ul className="post-list d-flex align-items-center">
                    <li>
                      <i className="fa-regular fa-user" />
                      By Admin
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days" />
                      18 Seb, 2024
                    </li>
                    <li>
                      <i className="fa-solid fa-tag" />
                      Land
                    </li>
                  </ul>
                  <h3>{newsItem.title1}</h3>
                  <p className="mb-3">
                  {newsItem.content1}
                  </p>
                  <h3>{newsItem.title2}</h3>
                  <p className="mb-3">
                  {newsItem.content2}
                  </p>
                  <h3>{newsItem.title3}</h3>
                  <p className="mb-3">
                  {newsItem.content3}
                  </p>
                 
                  {/* <div className="hilight-text mt-4 mb-4">
                    <p>
                      Pellentesque sollicitudin congue dolor non aliquam. Morbi
                      volutpat, nisi vel ultricies urnacondimentum, sapien neque
                      lobortis tortor, quis efficitur mi ipsum eu metus.
                      Praesent eleifend orci sit amet est vehicula.
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                        stroke="#FFCD1F"
                      />
                      <path
                        d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                        stroke="#FFCD1F"
                      />
                    </svg>
                  </div> */}
                  
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="details-image">
                        <Image
                          src={newsItem.img1}
                          width={370}
                          height={269}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="details-image">
                        <Image
                          src={newsItem.img2}
                          width={370}
                          height={269}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <h3>{newsItem.title4}</h3>
                  <p className="mb-3">
                  {newsItem.content4}
                  </p>
                  <h3>{newsItem.title5}</h3>
                  <p className="mb-3">
                  {newsItem.content5}
                  </p>
                </div>
              </div>
              {/* <div className="row tag-share-wrap mt-4 mb-5">
                <div className="col-lg-8 col-12">
                  <div className="tagcloud">
                    <span>Tags:</span>
                    <a href="#">Travel</a>
                    <a href="#">Services</a>
                    <a href="#">Agency</a>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                  <div className="social-share">
                    <span className="me-3">Share:</span>
                    {socialLinks.map((link, index) => (
                      <a href={link.href} key={index}>
                        <i className={link.iconClass} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <div className="comments-heading">
                  <h3>02 Comments</h3>
                </div>
                <Comments />
              </div>
              <div className="comment-form-wrap pt-5">
                <h3>Leave a comments</h3>
                <CommentForm />
              </div> */}
            </div>
          </div>
          {/* <div className="col-12 col-lg-4">
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
                      <li key={index} className={item.isActive ? "active" : ""}>
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
                            href={`/news-details/${item.id}`}
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
