import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export const metadata = {
  title: "Not Found || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};
export default function page() {
  return (
    <>
      <Header2 />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/breadcrumb-bg.jpg")' }}
      >
        <div className="shape-image float-bob-y">
          <Image
            src="/assets/img/vector.png"
            width={84}
            height={186}
            alt="img"
          />
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Error Page
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>Error Page</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
              <Image
                src="/assets/img/breadcrumb-image.png"
                width={540}
                height={450}
                alt="img"
                className="float-bob-x"
              />
              <div className="bar-shape">
                <Image
                  src="/assets/img/breadcrumb-bar.png"
                  width={631}
                  height={604}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="Error-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="error-items">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <Image
                    src="/assets/img/404.png"
                    width={896}
                    height={539}
                    alt="img"
                  />
                </div>
                <h2 className="splt-txt wow">
                  <b>
                    {" "}
                    <AnimatedText text="Oops!" />
                  </b>{" "}
                  <AnimatedText text="Page Not Found" />
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  The page you are looking for does not exist
                </p>
                <Link
                  href={`/`}
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  Back to Home
                  <i className="fa-regular fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </>
  );
}
