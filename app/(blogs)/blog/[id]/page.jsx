import Brands from "@/components/common/Brands";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-1/Cta";
import Image from "next/image";
import Blognew from "@/components/blogs/Blognew"
import Link from "next/link";
import ProjectsHome from "@/components/project/ProjectsHome";
export const metadata = {
  title: "Blog || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};
export default function page({params}) {
  return (
    <>
      <Header1 />
      <Blognew url={params.id}/>
      <ProjectsHome />
      <Cta />
      <Footer1 />
    </>
  );
}
