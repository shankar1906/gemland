"use client";
import Nav from "./Nav";
import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
import Image from "next/image";
export default function Header1() {
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
                              <Nav />
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <div className="header__hamburger d-xl-none my-auto">
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
        <Nav />
      </Offcanvas>
    </>
  );
}
