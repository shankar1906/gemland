"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section fix section-padding bg-cover  scrollSpySection"
      style={{ backgroundImage: 'url("/assets/img/contact-bg.jpg")' }}
    >
      <div className="contact-image float-bob-x">
        <Image
          src="/assets/img/contact-img-shape.png"
          width={353}
          height={398}
          alt="img"
        />
      </div>
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="contact-items">
                <h3 className="splt-txt wow">
                  <AnimatedText text="Get in touch!" />
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-4 mt-md-0"
                >
                  <div className="row g-4">
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="email"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="write message . ."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".4s">
                      <button type="submit" className="theme-btn">
                        Send message <i className="fas fa-long-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title">
                  <h6 className="text-white wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    talk to us
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="text-white splt-txt wow">
                    <AnimatedText text="Building With Passion Ensuring Satisfactions" />
                  </h2>
                </div>
                <p
                  className="text-white mt-3 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  It is a long established fact that a reader will be distracted
                  the readable content of a page when looking at layout the
                  point of using lorem the is Ipsum less normal distribution of
                  letters.
                </p>
                <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span>call emergency</span>
                    <h4>
                      <a href="tel:+919159644555">+91 91596 44555</a>
                    </h4>
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
