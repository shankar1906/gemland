import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Cta() {
  return (
    <>
      <section
        className="cta-section-2 bg-cover fix"
        style={{ backgroundImage: 'url("/assets/img/cta-bg-2.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper-2">
            <div className="cta-content">
              <h2 className="splt-txt wow">
                <AnimatedText text="Do You Have Any Questions" /> <br />
                <AnimatedText text="About the Project Plan?" />
              </h2>
              <Link
                href={`/contact`}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                GET IN TOUCH
                <i className="fa-regular fa-arrow-right" />
              </Link>
            </div>
            <div className="cta-image wow fadeInUp" data-wow-delay=".3s">
              <Image
                src="/assets/img/engineer-holding.png"
                width={410}
                height={424}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
