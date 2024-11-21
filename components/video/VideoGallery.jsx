import React from "react";
import Pagination from "../common/Pagination";
import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Services() {
  return (
    <section className="service-section fix py-3">
      <div className="container">
        <div className="section-title text-center mt-3 mb-0">
          <h3 className="splt-txt wow fs-2" style={{ color: '#f1c40f' }}>
            <AnimatedText text="Video Gallery" /> <br />
          </h3>
        </div>
        <div className="row">

          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay={'.02s'}
          >
            <div className="service-box-items2 items-bg">
              <div className="service-thumb">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/7foutqIgzNc?si=pwLr4eCXHGibbjLs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin">
                </iframe>
                <div className="content">
                  <h3>Royal Castle</h3>
                  <p>Kovilpalayam, Sathy Main Road</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay={'.02s'}
          >
            <div className="service-box-items2 items-bg">
              <div className="service-thumb">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/lUw62H4-lqw?si=Lpre7qGiLpIBSGMh"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin">
                </iframe>
                <div className="content">
                  <h3>Royal paradise</h3>
                  <p>Sathy Road,Coimbatore</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay={'.02s'}
          >
            <div className="service-box-items2 items-bg">
              <div className="service-thumb">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/rT5dZjnPcxs?si=bYVViB_sjLsuQ53F"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin">
                </iframe>
                <div className="content">
                  <h3>Royal Village</h3>
                  <p>Ellapalayam, Sathy Main Road</p>
                </div>
              </div>
            </div>
          </div>

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
