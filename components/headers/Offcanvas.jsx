"use client";

import { closeMobilemenu } from "@/utlis/toggleMobilemenu";
import Link from "next/link";
import Image from "next/image";

export default function Offcanvas({ children }) {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info ">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/logo.jpg"
                      width={149}
                      height={64}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div
                  onClick={() => closeMobilemenu()}
                  className="offcanvas__close"
                >
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p> */}
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul style={{ display: "none" }}>{children}</ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                {/* <h4>Contact Info</h4> */}
                {/* <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                      7/1A ADY’s Residence, Vaiyapuri nagar, Valiyampalayam, Kalapatti, Coimbatore-641035
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">
                        <span className="mailto:gemlandofficial@gmail.com">
                        gemlandofficial@gmail.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+919159644555">91596 44555</a>
                    </div>
                  </li>
                </ul> */}
                <div className="header-button mt-4">
                  <a href="/contact" className="theme-btn active text-center">
                    <span>
                      Get A Quote
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://m.facebook.com" style={{backgroundColor:'white'}}>
                    <i className="fab fa-facebook-f"  />
                  </a>
                  <a href="https://www.x.com" style={{backgroundColor:'white'}}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.youtube.com" style={{backgroundColor:'white'}}>
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.linkedin.com" style={{backgroundColor:'white'}}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay " onClick={() => closeMobilemenu()} />
    </>
  );
}
