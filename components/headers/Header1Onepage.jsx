"use client";
import NavOnepage from "./NavOnepage";
import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
import Image from "next/image";
export default function Header1Onepage() {
  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="main-header-wrapper">
            <div className="logo-image">
              <Link href={`/`}>
                <Image
                  src="/assets/img/logo/logo.jpg"
                  width={149}
                  height={64}
                  alt="img"
                />
              </Link>
            </div>
            <div className="main-header-items">
              <div className="header-contact-info-area">
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <p>Office location</p>
                    <h3>4648 Rocky, New York</h3>
                  </div>
                </div>
                <div className="contact-info-items">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <p>send email</p>
                    <h3>
                      <a href="mailto:gemlandofficial@gmail.com">gemlandofficial@gmail.com</a>
                    </h3>
                  </div>
                </div>
                <div className="contact-info-items style-2">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <p>call emergency</p>
                    <h3>
                      <a href="tel:+919159644555">+91 91596 44555</a>
                    </h3>
                  </div>
                </div>
                <div className="header-button">
                  <Link href={`/contact`} className="theme-btn">
                    GET A QUOTE <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div id="header-sticky" className="header-1">
                <div className="mega-menu-wrapper">
                  <div className="header-main">
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
                    <div className="header-left">
                      <div className="mean__menu-wrapper">
                        <div className="main-menu">
                          <nav id="mobile-menu">
                            <ul>
                              <NavOnepage />
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <a
                        onClick={() =>
                          document
                            .getElementById("searchWrap")
                            .classList.add("active")
                        }
                        className="search-trigger search-icon"
                      >
                        <i className="fal fa-search"></i>
                      </a>
                      <div className="header__hamburger d-xl-block my-auto">
                        <div
                          onClick={() => openMobilemenu()}
                          className="sidebar__toggle"
                        >
                          <i className="fas fa-bars"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas>
        <NavOnepage />
      </Offcanvas>
    </>
  );
}
