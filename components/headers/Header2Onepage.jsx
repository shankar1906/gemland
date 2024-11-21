"use client";
import NavOnepage from "./NavOnepage";
import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
import Image from "next/image";
export default function Header2Onepage() {
  return (
    <>
      <header className="header-section-2">
        <div className="container-fluid">
          <div className="header-top-wrapper-2">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-location-dot" />
                4648 Rocky, New York
              </li>
              <li>
                <i className="fa-regular fa-phone" />
                <a href="tel:2086660112">+208-666-0112</a>
              </li>
            </ul>
            <div className="top-right">
              <ul className="text-list">
                <li>
                  <Link href={`/contact`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={`/contact`}>Terms &amp; Conditions</Link>
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
                <a href="https://m.facebook.com">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.x.com">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.youtube.com">
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.linkedin.com">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div id="header-sticky" className="header-2">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href={`/`} className="header-logo">
                      <Image
                        src="/assets/img/logo/logo.jpg"
                        alt="logo-img"
                        width={149}
                        height={64}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <NavOnepage />
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link href={`/contact`} className="theme-btn">
                      GET A QUOTE <i className="fa-regular fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="search-item">
                    <a
                      onClick={() =>
                        document
                          .getElementById("searchWrap")
                          .classList.add("active")
                      }
                      className="search-trigger search-icon"
                    >
                      <i className="fal fa-search" />
                    </a>
                    <div className="header__hamburger d-xl-block my-auto">
                      <div
                        onClick={() => openMobilemenu()}
                        className="sidebar__toggle"
                      >
                        <i className="fas fa-bars" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <Offcanvas>
        <NavOnepage />
      </Offcanvas>{" "}
    </>
  );
}
