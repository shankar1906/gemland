
"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cta from "@/components/homes/home-1/Cta";
import captilize from "@/utlis/captilize"
import ProjectsHome from "@/components/project/ProjectsHome";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/api/db/config";
import GalleryImages from "@/components/main/GalleryImages";
import ProjectInfo from "@/components/main/ProjectInfo";
import ProjectAmenities from "@/components/main/ProjectAmenites";
import ProjectLayout from "@/components/main/ProjectLayout";
import ProjectHighlights from "@/components/main/ProjectHighlights";
import ProjectNearby from "@/components/main/ProjectNearby";
import Preloader from "@/app/proloader";

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
  const [active, setActive] = useState('amenities')

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
                        <i className="fa-solid fa-location-dot" style={{ color: "#ff0000" }}></i> <AnimatedText text={captilize(project?.location)} />
                      </h6>
                      <p className="mb-3 mt-3">
                        {project.disc}
                      </p>
                      <ProjectInfo project={project} />
                      <section>
                        <div className="container">
                          <div className="row overflow-hidden">
                            <div className="d-flex gap-3 sm:gap-1 justify-content-center sm:justify-content-around">
                              <div>
                                <button className={`theme-btn ${active === "amenities" ? "active" : ""
                                  }`} onClick={() => setActive("amenities")}>
                                  Amenities
                                </button>
                              </div>
                              <div>
                                <button className={`theme-btn ${active === "nearby" ? "active" : ""
                                  }`} onClick={() => setActive("nearby")}>
                                  Nearby
                                </button>
                              </div>
                              <div>
                                <button className={`theme-btn ${active === "highlight" ? "active" : ""
                                  }`} onClick={() => setActive("highlight")}>
                                  Highlights
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </section>

                      {/* Project Highlights */}

                      <section
                        id="services"
                        className="service-section fix bg-cover  scrollSpySection"
                      >
                        <div className="container">
                          <div className="section-title ">
                            <div className="row">
                            </div>
                            {active === 'highlight' && (
                              <>
                                <ProjectHighlights highlights={project.highlights} />
                              </>
                            )}

                            {/* Project Nearby */}

                            {active === 'nearby' && (
                              <>
                                <ProjectNearby nearby={project.nearby} />
                              </>
                            )}

                            {/* Project Amenities */}

                            {active === 'amenities' && (
                              <>
                                <ProjectAmenities project={project} />
                              </>
                            )}
                          </div>
                        </div>
                      </section>

                      {/* Project Approvals */}

                      <div className="container mt-5">
                        <div className="service-details-wrapper">
                          <div className="row g-4">
                            <div className="col-12 col-lg-12">
                              <div className="service-details-content">
                                <h4>Project Approval</h4>
                                <div className="row g-4 mt-1">
                                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                    <div className="service-details-box">
                                      {/* <div className="icon">
                                        <h5 className="text-center">RERA</h5>
                                      </div> */}
                                      <div className="d-flex justify-content-center">
                                        <Image
                                          src="/assets/img/icon/rera.svg"
                                          width={200}
                                          height={200}
                                          alt="img"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                    <div className="service-details-box">
                                      {/* <div className="icon">
                                        <h5>DTCP</h5>
                                      </div> */}
                                      <div className="d-flex justify-content-center">
                                        <Image
                                          src="/assets/img/icon/DTCP.svg"
                                          width={200}
                                          height={200}
                                          alt="img"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                                    <ProjectLayout project={project} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="project-location section-padding">
                        <div className="row text-center">
                          <h2>Project Video</h2>
                        </div>
                        <div className="row pt-4">
                          <div className="p-3 content" style={{ background: '#f2f5fa' }}>
                            <iframe src={project?.ProjectVideoURL} width="100%" height="400" allowFullScreen="" loading="lazy"></iframe>
                            <h3 className="pt-3">{project.title}</h3>
                            <p>{project.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="project-location section-padding">
                        <div className="row text-center">
                          <h2>Project Location</h2>
                        </div>
                        <div className="row pt-4">
                          <iframe src={project.LocationURL} width="100%" height="400" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProjectsHome type='ongoing' />
      <Cta />
      <Footer1 />
    </>
  );
}
