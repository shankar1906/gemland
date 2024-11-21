import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { faqs } from "@/data/faq";
export default function Faq() {
  return (
    <section
      className="faq-section fix py-5 section-bg-2 bg-cover"
      style={{ backgroundImage: 'url("/assets/img/faq/bg-shape.png")' }}
    >
      {/* <div className="track-shape float-bob-x">
        <Image src="/assets/img/track.png" width={163} height={79} alt="img" />
      </div> */}
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            <div className="col-lg-12">
            <div className="faq-content w-100">
                <div className="section-title d-flex flex-column justify-content-center align-items-center h-100">
                  <h2 className="splt-txt wow" style={{color: "#ffcd1f"}}>
                    <AnimatedText text="FAQ" />
                  </h2>
                </div>
              </div>
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div className="row">
                  {faqs.map((faq, index) => (
                    <div className="col-lg-6">
                    <div
                      key={faq.id}
                      className="accordion-item mb-3 wow fadeInUp"
                      data-wow-delay={faq.delay}
                    >
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button ${faq.expanded ? "" : "collapsed"
                            }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${faq.id}`}
                          aria-expanded={faq.expanded}
                          aria-controls={`faq${faq.id}`}
                        >
                          {faq.question}
                        </button>
                      </h5>
                      <div
                        id={`faq${faq.id}`}
                        className={`accordion-collapse collapse ${faq.expanded ? "show" : ""
                          }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                          </div>
                      </div>
                    </div>
                    </div>
                  ))}
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
