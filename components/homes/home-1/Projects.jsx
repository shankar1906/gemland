"use client";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import { projects2 } from "@/data/projects";
import { useRef } from "react";
export default function Projects() {
  const parentRefs = useRef([]);
  const handleProjectHover = (index) => {
    parentRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    parentRefs.current[index].classList.add("active");
  };
  return (
    <section
      id="projects"
      className="project-section fix section-padding  scrollSpySection"
    >
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            our complete projects
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Our Latest Projects" />
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="project-wrapper">
          <div className="main-box">
            {projects2.map((elm, i) => (
              <div
                onMouseOver={() => handleProjectHover(i)}
                ref={(el) => (parentRefs.current[i] = el)}
                key={i}
                className={`box wow fadeInUp ${elm.bgClass} `}
                data-wow-delay={elm.delay}
              >
                <div className="project-content">
                  <h3>
                    <Link href={`/project-details/${elm.id}`}>{elm.title}</Link>
                  </h3>
                  <Link href={`/project-details/${elm.id}`} className="icon">
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
