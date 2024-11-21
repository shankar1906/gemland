"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
export default function About({ btn }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        id="about"
        className="about-section fix scrollSpySection pt-3"
      >
        <div className={`section-title text-center ${btn ? '' : 'breadcrumb-title'}`}>
          <h2 className="splt-txt wow" style={{ color: '#ffcd1f' }}>
            <AnimatedText text="About Us" />
          </h2>
        </div>
        <div className="about-shape-1 float-bob-x">
        </div>
        <div className="about-shape-2 float-bob-x">
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4" style={{ justifyContent: "space-around" }}>
              <div className="col-lg-5" >
                <div className="about-image">
                  <Image
                    src="/assets/img/about/about.webp"
                    alt="img"
                    width={485}
                    height={492}
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                    style={{
                      height: 'auto',
                      maxHeight: '350px'
                    }} />


                  <div className="about-line-shape">
                    <Image
                      src="/assets/img/about/about-shape-3.png"
                      width={30}
                      height={445}
                      alt="img"
                      style={{
                        height: 'auto',
                        maxHeight: '350px'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content d-flex h-100 flex-column justify-content-center align-items-start">
                  <div className="section-title">
                    {/* <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long"></i>
                      we are the
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </h6> */}
                    <h2 className="splt-txt wow fs-3">
                      {/* <AnimatedText
                        text="Gemland Properties,"
                      />
                      <br />{" "} */}
                      <AnimatedText text="Your Trusted Real Estate Partner" />
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    Find your ideal home with Gemland Property, offering luxury, prime locations, and affordability.
                    We're dedicated to helping you find not just a house, but a home tailored to your lifestyle.
                  </p>
                  {btn &&
                    <div className="button-cente">
                      <Link href={`/about`} className="theme-btn mt-3 ">
                        View More
                        <i className="fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section > {" "}
      < ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }
        }
        isOpen={isOpen}
        videoId="rT5dZjnPcxs"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
