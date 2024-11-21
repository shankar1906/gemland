"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { useEffect, useState } from "react";
import Cta from "@/components/homes/home-1/Cta";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/api/db/config";
import AnimatedText from "@/components/common/AnimatedText";
import ProjectAmenites from "@/components/main/ProjectAmenites";
import ProjectInfo from "@/components/main/ProjectInfo";
import GalleryImages from "@/components/main/GalleryImages";

const fetchProject = async (url) => {
  try {

    const q = query(collection(db, "projects"), where("url", "==", url));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const projectDoc = querySnapshot.docs[0];
      const projectData = {
        id: projectDoc.id,
        ...projectDoc.data(),
      };
      return projectData;
    } else {
      console.error("No project found with the given URL");
      return null;
    }
  } catch (e) {
    console.error("Error fetching Project: ", e);
    return null;
  }
};



export default function page({ params }) {

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchProject(params.id).then((data) => {
      setProject(data);
    });
  }, [params.id]);

  if (!project) {
    return <div>Project not found</div>; // Handle 404 or project not found
  }


  return (
    <>
      <Header1 />
      <div className="project">
        <section className="project-details-section fix">
          <div className="section-title text-center breadcrumb-title">
            <h2 className="splt-txt wow" style={{ color: "#f1c40f" }}>
              <AnimatedText text={project.title} /> <br />
            </h2>
          </div>
          <div className="container">
            <div className="project-details-wrapper">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="project-details-items">
                    <section
                      className="project-section section-padding py-0 fix scrollSpySection"
                      id="projects"
                    >
                      <div className="project-wrapper-2">
                        <GalleryImages galleryURLs={project.galleryURLs} />
                      </div>
                    </section>
                    <div className="project-details-content">
                      <h6 className="mb-2">
                        <i className="fa-solid fa-location-dot" style={{ color: "#ff0000" }}></i>
                        <AnimatedText text={project.location} />
                      </h6>
                      {/* <h2 className="splt-txt wow">
                        <AnimatedText text={project.title} />
                      </h2> */}
                      <p className="mb-3 mt-3">{project.disc}</p>
                      <ProjectInfo project={project} />
                      <ProjectAmenites project={project} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <ProjectsHome/> */}
      <Cta />
      <Footer1 />
    </>
  );
}
