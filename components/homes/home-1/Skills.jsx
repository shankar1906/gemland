import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { skills } from "@/data/skills";
export default function Skills() {
  return (
    <section className="skills-section fix section-padding">
      <div className="container">
        <div className="skills-wrapper ps-3">
          <div className="row g-4">
            <h2 className="splt-txt wow d-block d-lg-none d-md-none" style={{ color: "#ffcd1f" }}>
              <AnimatedText text="We Are Giving You A Chance To Build Your Dream" />
            </h2>
            <div className="col-lg-6 order-2 order-lg-1 order-md-1">
              <div className="skill-content">
                <div className="section-title mb-2">
                  {/* <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    Who We Are
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6> */}
                  <h2 className="splt-txt wow d-none d-lg-block d-md-block fs-2 text-uppercase " style={{ color: "#ffcd1f" }}>
                    <AnimatedText text="Your chance to build your dream" />
                  </h2>
                </div>
                <div className="faq-wrapper">
                  <div className="faq-content">
                    <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                      <div className="icon">
                        <i className="fa-regular fa-check" />
                      </div>
                      <div className="content">
                        <h5>Our Vision</h5>
                        <span>
                          Leading in affordable housing, transforming lives and homeownership nationwide.
                        </span>
                      </div>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                      <div className="icon">
                        <i className="fa-regular fa-check" />
                      </div>
                      <div className="content">
                        <h5>Our mission</h5>
                        <span>
                          Building quality, affordable homes where families thrive.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 order-md-2">
              <div className="row g-4">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                  <div className="d-none d-lg-block">
                    <Image
                      src="/assets/img/skills/mission.png"
                      width={227}
                      height={380}
                      alt="img"
                      style={{Height: "200px", width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
                  <div className="">
                    <Image
                      src="/assets/img/skills/vision.png"
                      width={324}
                      height={380}
                      alt="img"
                      style={{Height: "200px", width: "100%" }}
                    />
                    {/* <div className="logo-shape">
                      <Image
                        src="/assets/img/logo/logo.jpg"
                        width={153}
                        height={167}
                        alt="img"
                      />
                    </div> */}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
