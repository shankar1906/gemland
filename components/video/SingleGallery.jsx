"use client";
import React, { useEffect, useState } from "react";
import { services } from "@/data/services";
import AnimatedText from "@/components/common/AnimatedText";

export default function Services() {
    let [data, setData] = useState([]);

    useEffect(() => {
        const filterData = services.filter(item => [17, 18, 19].includes(item.id));
        setData(filterData);
    }, [services]);

    return (
        <section className="service-section fix py-5">
            <div className="container">
                <div className="section-title text-center">
                    {/* <h6 className="wow fadeInUp">
                        <i className="fa-regular fa-arrow-left-long"></i>
                        video gallery
                        <i className="fa-regular fa-arrow-right-long"></i>
                    </h6> */}
                    <h2 className="splt-txt wow" style={{ color: "#ffcd1f" }}>
                        <AnimatedText text="Explore Our Projects" /> <br />
                    </h2>
                </div>

                <div className="row">

                    <div
                        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay={'.02s'}
                    >
                        <div className="service-box-items2 items-bg">
                            <div className="service-thumb">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/7foutqIgzNc?si=pwLr4eCXHGibbjLs"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin">
                                </iframe>
                                <div className="content">
                                    <h3>Royal Castle</h3>
                                    <p>Kovilpalayam, Sathy Main Road</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay={'.02s'}
                    >
                        <div className="service-box-items2 items-bg">
                            <div className="service-thumb">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/lUw62H4-lqw?si=Lpre7qGiLpIBSGMh"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin">
                                </iframe>
                                <div className="content">
                                    <h3>Royal paradise</h3>
                                    <p>Sathy Road,Coimbatore</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay={'.02s'}
                    >
                        <div className="service-box-items2 items-bg">
                            <div className="service-thumb">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/rT5dZjnPcxs?si=bYVViB_sjLsuQ53F"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin">
                                </iframe>
                                <div className="content">
                                    <h3>Royal Village</h3>
                                    <p>Ellapalayam, Sathy Main Road</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
