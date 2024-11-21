"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";

export default function ContactForm() {
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", form.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
   <section
      id="contact"
      className="contact-section fix py-5 bg-cover mb-5 scrollSpySection"
      style={{ backgroundImage: 'url("/assets/img/contact-bg.jpg")' }}
    >
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-2 align-items-center">
            <div className="col-lg-6">
              <div className="contact-items">
                <h3 className="splt-txt wow">
                  <AnimatedText text="Get in touch!" />
                </h3>
                <form 
                  ref={form} onSubmit={sandMail}
                  className="mt-4 mt-md-0"
                >
                  <div className="row g-4">
                    <div
                      className="col-lg-12 col-md-12 wow fadeInUp"
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
                      className="col-lg-12 col-md-12 wow fadeInUp"
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
            <div className="col-lg-6 d-none d-lg-block">
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
                  Building with Passion, Ensuring Satisfaction. It's well-known that finding the right home or property can be overwhelming. At Gemland Properties, we focus on creating seamless experiences, where every detail is crafted to meet your needs. Our passion for quality ensures that your journey to owning the perfect property is as smooth and satisfying as possible.
                </p>
                <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span>call</span>
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
