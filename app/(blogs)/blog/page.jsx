import Blogs from "@/components/blogs/Blogs";
import AnimatedText from "@/components/common/AnimatedText";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-1/Cta";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Blog Grid || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
  description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
};
export default function page() {
  return (
    <>
      <Header1 />
      <Blogs />
      <Cta />
      <Footer1 />
    </>
  );
}
