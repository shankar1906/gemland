import AnimatedText from "@/components/common/AnimatedText";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Projects from "@/components/project/Projects";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Project || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};

export default function page() {
  return (
    <>
      <Header1 />
      <Projects type="all"/>
      <Footer1 />
    </>
  );
}
