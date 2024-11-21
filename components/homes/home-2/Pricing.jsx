import { pricingPlans } from "@/data/pricing";
import React from "react";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
export default function Pricing({ shadow = false }) {
  return (
    <>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            pricing Plans
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Our Affordable Price" />
          </h2>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp ${
                plan.active ? "active" : ""
              }`}
              data-wow-delay={plan.delay}
            >
              <div
                className={`pricing-card-items ${plan.active ? "active" : ""} ${
                  shadow ? "box-shadow" : ""
                } `}
              >
                {plan.active && (
                  <div className="tag-img">
                    <Image
                      src="/assets/img/tag.png"
                      width={94}
                      height={98}
                      alt="img"
                    />
                  </div>
                )}
                <div className="pricing-shape">
                  <Image
                    src="/assets/img/pricing-shape.png"
                    width={288}
                    height={485}
                    alt="img"
                  />
                </div>
                <div className="pricing-header">
                  <h3>{plan.title}</h3>
                  <h2>
                    {plan.price}/<span>{plan.frequency}</span>
                  </h2>
                </div>
                <ul className="pricing-list">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={feature.available === false ? "style-2" : ""}
                    >
                      <i
                        className={`fa-solid ${
                          feature.available === false ? "fa-xmark" : "fa-check"
                        }`}
                      ></i>
                      {typeof feature === "string" ? feature : feature.feature}
                    </li>
                  ))}
                </ul>
                <div className="header-button">
                  <Link
                    href="/pricing"
                    className={`theme-btn ${plan.active ? "" : "style-2"}`}
                  >
                    <span></span>choose plan
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
