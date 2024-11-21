"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import AnimatedText from "@/components/common/AnimatedText";
import { useEffect, useState } from "react";
import Cta from "@/components/homes/home-1/Cta";
import captilize from "@/utlis/captilize";
import ProjectsHome from "@/components/project/ProjectsHome";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/api/db/config";
import ProjectAmenities from "@/components/main/ProjectAmenites";
import ProjectInfo from "@/components/main/ProjectInfo";
import GalleryImages from "@/components/main/GalleryImages";

// export const metadata = {
//   title: "Project || Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
//   description: "Gemland Property – Residential Plots & Farm Sites | Discover your perfect property today!",
// };
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

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject(params.id).then((data) => {
      setProject(data);
      setLoading(false);
    });
  }, [params.id]);

  if (!project) {
    return <div>Project not found</div>; // Handle 404 or project not found
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Preloader />
      </div>
    )
  }

  return (
    <>
      <Header1 />
      {/* <pre>{JSON.stringify(project,null,2)}</pre> */}
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
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#ff0000" }}
                        ></i>{" "}
                        <AnimatedText text={captilize(project.location)} />
                      </h6>
                      {/* <h2 className="splt-txt wow">
                        <AnimatedText text={project.title} />
                      </h2> */}
                      <p className="mb-3 mt-3">{project.disc}</p>

                      <ProjectInfo project={project} />
                      <section>
                        <div className="container">
                          <div className="row overflow-hidden">
                            <div className="d-flex gap-3 sm:gap-1 justify-content-center sm:justify-content-around">
                              <div>
                                <button className={`theme-btn`}>
                                  Amenities
                                </button>
                              </div>

                            </div>

                          </div>
                        </div>
                      </section>
                      <ProjectAmenities project={project} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProjectsHome type='completed' />
      <Cta />
      <Footer1 />
    </>
  );
}
