import Achievments from "@/components/about/Achievments";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/blogs/Blogs";
import Cta from "@/components/homes/home-1/Cta";
import Faq from "@/components/homes/home-1/Faq";
import Hero from "@/components/homes/home-1/Hero";
import ProjectsHome from "@/components/project/ProjectsHome";
import SingleGallery from "@/components/video/SingleGallery"
import AnimatedText from "@/components/common/AnimatedText";
import Testimonials from "@/components/homes/home-1/Testimonials";
export const metadata = {
  title: "Home 1 || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};
export default function Home1() {
  return (
    <>
      <Header1 />
      <Hero />
      <About btn={"true"} />
      <div className="brand-section fix mt-3">
      <ProjectsHome />
      </div>
      <Achievments />
      <SingleGallery />
      <Testimonials />
      <div className="brand-section fix py-5">
      <h2 className="splt-txt wow text-center pb-5" style={{color:'#ffcd1f'}}>
        <AnimatedText text="Our Banking Partners" /> <br />
      </h2>
        <Brands />
      </div>
      <Faq />
      <Blogs />
      <Cta />
      <Footer1 />
    </>
  );
}
