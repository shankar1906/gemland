'use client'
// import { projects } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/api/db/config";
import AnimatedText from "../common/AnimatedText";
import captilize from "@/utlis/captilize"

export default function Projects({type='all'}) {
  const [data, setProject] = useState();
  
  const fetchProject = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const ProjectData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sortedData = ProjectData.sort((a, b) => a.order - b.order);
      sortedData.map((e,i)=>e.order=i)
      setProject(sortedData);
    } catch (e) {
      console.error("Error fetching Project: ", e);
    }
  };
  
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <section className="project-section section-padding pt-0 fix">
      <div className="section-title text-center breadcrumb-title">
            <h2 className="splt-txt wow" style={{color:'#f1c40f'}}>
              <AnimatedText text={`Our${type == 'all' ? " " : ` ${captilize(type)} `}Projects`} /> <br />
            </h2>
          </div>
      <div className="container">
          {data?.filter((e)=>type == 'all' || (type == 'completed' && e.projectStatus=="Completed Projects") || (type == 'ongoing' && e.projectStatus=="Ongoing Projects")).map((e,i) => (
            <div className={`project-card-items row d-flex flex-column ${i%2!=0 ? "flex-lg-row" : "flex-lg-row-reverse" } p-3 p-lg-0 justify-content-between align-items-center shadow mb-5`} key={e.id}>
            <div className={`col  d-flex px-auto justify-content-center`}>
              <div className="py-3">
              <div className=" d-flex gap-3">
                <div className={`about-line-shape ${i%2!=0 ? "d-none" : "d-none d-lg-block" }`}>
                  <Image
                    src="/assets/img/about/about-shape-3.png"
                    width={30}
                    height={300}
                    alt="img"
                  />
                </div>
                <Image
                  src={e.Projectimage}
                  alt="img"
                  width={475}
                  height={325}
                  className="d-none d-lg-block wow fadeInLeft"
                  data-wow-delay=".2s"
                />
                <Image
                  src={e.Projectimage}
                  alt="img"
                  width={600}
                  height={400}
                  className="d-lg-none d-none d-md-block wow fadeInLeft"
                  data-wow-delay=".2s"
                />
                <Image
                  src={e.Projectimage}
                  alt="img"
                  width={475}
                  height={325}
                  className="d-md-none d-none d-sm-block wow fadeInLeft"
                  data-wow-delay=".2s"
                />
                <Image
                  src={e.Projectimage}
                  alt="img"
                  width={400}
                  height={300}
                  className="d-sm-none wow fadeInLeft"
                  data-wow-delay=".2s"
                />
                <div className={`about-line-shape ${i%2!=0 ? "d-none d-lg-block" : "d-none" }`}>
                  <Image
                    src="/assets/img/about/about-shape-3.png"
                    width={30}
                    height={300}
                    alt="img"
                  />
                </div>
              </div>
              </div>
            </div>
            <div className="col  px-3 px-sm-4 px-md-5">
              <div className="about-content d-flex flex-column py-5">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long pt-3"></i>
                    {e.title}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </h6>
                  <h3 className="splt-txt wow">                   
                    <i className="fa-solid fa-location-dot" style={{color: "#ff0000"}}></i> <AnimatedText  text={captilize(e.location)} />
                  </h3>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                  {e.disc.split(" ").slice(0, 30).join(" ")}
                </p>
                <Link href={`/project-details/${e.projectStatus.split(' ')[0].toLowerCase()}/${e.url}`} className="theme-btn mt-3 btn-width">
                    View More
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
              </div>
            </div>
            <div className="shape-img">
              <Image
                src="/assets/img/project/shape.png"
                width={57}
                height={54}
                alt="img"
              />
            </div>
          </div>
          ))}
      </div>
    </section>
  );
}
