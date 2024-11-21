import Achievments from "@/components/about/Achievments";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Cta from "@/components/homes/home-1/Cta";
import Skills from "@/components/homes/home-1/Skills";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import FuturesProject from "@/components/homes/home-1/FuturesProject";
export const metadata = {
  title: "About || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};

export default function page() {
  return (
    <>
      <Header1 />
      <About />
      <Skills />
      <FuturesProject />
      <Achievments />
      {/* <Testimonials /> */}

      {/* <Team /> */}
      <div className="brand-section fix section-padding">
        <h2 className="splt-txt wow text-center pb-5" style={{ color: "#ffcd1f" }}>
          <AnimatedText text="Our Banking Partners" /> <br />
        </h2>
        <Brands />
      </div>
      <Cta />
      <Footer1 />
    </>
  );
}
