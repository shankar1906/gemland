import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <>
      <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
        <div className="image">
          <Image
            src="/assets/img/news/comment-1.png"
            width={96}
            height={96}
            alt="image"
          />
        </div>
        <div className="content">
          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <div className="con">
              <h5>
                <a href="news-details.html">Albert Flores</a>
              </h5>
              <span>February 10, 2024 at 2:37 pm</span>
            </div>
            <div className="star">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <p className="mt-30 mb-4">
            Neque porro est qui dolorem ipsum quia quaed inventor veritatis et
            quasi architecto var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy
          </p>
          <a href="news-details.html" className="reply">
            Reply
          </a>
        </div>
      </div>
      <div className="blog-single-comment d-flex gap-4 pt-5 pb-5">
        <div className="image">
          <Image
            src="/assets/img/news/comment-2.png"
            width={96}
            height={96}
            alt="image"
          />
        </div>
        <div className="content">
          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
            <div className="con">
              <h5>
                <a href="news-details.html">Alex Flores</a>
              </h5>
              <span>February 10, 2024 at 2:37 pm</span>
            </div>
            <div className="star">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>
          <p className="mt-30 mb-4">
            Neque porro est qui dolorem ipsum quia quaed inventor veritatis et
            quasi architecto var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy
          </p>
          <a href="news-details.html" className="reply color-2">
            Reply
          </a>
        </div>
      </div>
    </>
  );
}
