import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function ProjectDetails({ projectItem }) {
  return (
    <section className="project-details-section fix section-padding">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="project-details-items">
                <div className="details-image">
                  <Image
                    src={projectItem.Projectimage}
                    width={1170}
                    height={556}
                    alt="img"
                  />
                </div>
                <div className="project-details-content">
                  <p className="mb-2">Construction, Architecture</p>
                  <h2 className="splt-txt wow">
                    <AnimatedText text={projectItem.title} />
                  </h2>
                  <p className="mb-3 mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the Xbuild the best company
                    in the world class middle of text.
                  </p>
                  <p className="mb-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum,
                  </p>
                  <div className="project-infor-wrapper">
                    <div className="row g-4">
                      <div className="col-xl-7">
                        <h3>
                          Building Together. Building Stronger Communities
                        </h3>
                        <p className="mt-3 mb-3">
                          There are many variations of passages of Lorem Ipsum
                          available, but thexyz ud majority have suffered
                          alteration in some form, by injected humour, or
                          randomised words which don't look even slightly
                          believable. If you are going to use a Bulidinnig
                        </p>
                        <h3>Project Goal</h3>
                        <p className="mt-3">
                          There are many variations of passages of Lorem Ipsum
                          available, but thexyz ud majority have suffered
                          alteration in some form, by injected humour,
                        </p>
                        <ul className="details-list">
                          <li>
                            <i className="fa-solid fa-circle-check" />
                            Proactively pontificate client-centered
                            relationships
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check" />
                            Release of Letraset sheets containing Lorem Ipsum
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check" />
                            Is there a waiting list for desired work to be
                            started
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check" />
                            Release of Letraset sheets containing Lorem Ipsum
                          </li>
                        </ul>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                      <div className="col-xl-5">
                        <div className="project-nformation">
                          <h4>Project Information</h4>
                          <ul>
                            <li>
                              Project Category:
                              <span>Rubix carabil tower</span>
                            </li>
                            <li>
                              Clients:
                              <span>David Malan</span>
                            </li>
                            <li>
                              Project Date:
                              <span>25 June, 2024</span>
                            </li>
                            <li>
                              Avenue End Date:
                              <span>08 July, 2024</span>
                            </li>
                            <li>
                              Locations:
                              <span>NewYork – 4648 Rocky, USA</span>
                            </li>
                            <li className="pb-0">
                              Price After:
                              <span>$10 Million</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 mb-3">Project Summery</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <p className="mb-4">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum,
                      </p>
                      <div className="details-image">
                        <Image
                          src="/assets/img/project/details-2.jpg"
                          alt="img"
                          width={570}
                          height={309}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-4">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum,
                      </p>
                      <div className="details-image">
                        <Image
                          src="/assets/img/project/details-3.jpg"
                          alt="img"
                          width={570}
                          height={309}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
