import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function ContactInfo() {
  return (
    <section className="contact-info-section fix pb-5">
        <div className="section-title text-center breadcrumb-title">
          <h2 className="splt-txt wow" style={{ color: "#ffcd1f" }}>
            <AnimatedText text="Our Contact Information" />
          </h2>
        </div>
      <div className="container" >
        <div className="row">
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 d-flex justify-content-center align-items-center gap-10 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/18.svg"
                  width={50}
                  height={50}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>Our Address</h3>
                <div>
                  <p>7/1A ADY's Residence,</p>
                  <p>Vaiyapuri nagar, Valiyampalayam,</p>
                  <p>Kalapatti, Coimbatore-641035</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 d-flex justify-content-center align-items-center wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/19.svg"
                  width={46}
                  height={28}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>Email Address</h3>
                <p>
                  Mobile : <a href="tel:+919159644555">+91 91596 44555</a>
                </p>
                <p> 
                  Email : <a href="mailto:gemlandofficial@gmail.com">gemlandofficial@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-6 d-flex justify-content-center align-items-center wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items">
              <div className="icon">
                <Image
                  src="/assets/img/icon/20.svg"
                  width={50}
                  height={50}
                  alt="img"
                />
              </div>
              <div className="content">
                <h3>Hours of Operation</h3>
                <p>
                  Monday-Saturday : 8:00 - 9:00
                </p>
                <p> 
                  Sunday : Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
