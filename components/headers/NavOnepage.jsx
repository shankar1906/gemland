"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToElement } from "@/utlis/scrollToElement";
import { onepageLinks } from "@/data/menu";
import { closeMobilemenu } from "@/utlis/toggleMobilemenu";
export default function NavOnepage() {
  const [isDdOpen, setIsDdOpen] = useState(false);
  useEffect(() => {
    scrollToElement();
  }, []);

  return (
    <>
      <li className="has-dropdown active menu-thumb mobile-none">
        <Link href={`/`}>
          Home
          <i className="fa-regular fa-plus"></i>
        </Link>
        <ul className="submenu has-homemenu">
          <li>
            <div className="homemenu-items">
              <div className="homemenu">
                <div className="homemenu-thumb">
                  <Image
                    src="/assets/img/header/home-1.jpg"
                    width={240}
                    height={300}
                    alt="img"
                  />
                  <div className="demo-button">
                    <Link href={`/`} className="theme-btn">
                      Multi Page
                    </Link>
                    <Link href={`/home-1-one-page`} className="theme-btn">
                      One Page
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">Home 01</h4>
                </div>
              </div>
              <div className="homemenu">
                <div className="homemenu-thumb mb-15">
                  <Image
                    src="/assets/img/header/home-2.jpg"
                    width={240}
                    height={300}
                    alt="img"
                  />
                  <div className="demo-button">
                    <Link href={`/home-2`} className="theme-btn">
                      Multi Page
                    </Link>
                    <Link href={`/home-2-one-page`} className="theme-btn">
                      One Page
                    </Link>
                  </div>
                </div>
                <div className="homemenu-content text-center">
                  <h4 className="homemenu-title">Home 02</h4>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li className="has-dropdown active d-xl-none">
        <a onClick={() => setIsDdOpen((pre) => !pre)} className="border-none">
          Home
          <i className="fa-regular fa-plus"></i>
        </a>
        <ul className={`submenu ${isDdOpen ? "active" : ""}`}>
          <li>
            <Link href={`/`}>Home 01</Link>
          </li>
          <li>
            <Link href={`/home-2`}>Home 02</Link>
          </li>
        </ul>
      </li>
      {onepageLinks.map((link, index) => (
        <li key={index} className="onePageLink">
          <a onClick={() => closeMobilemenu()} href={link.href}>
            {link.text}
          </a>
        </li>
      ))}
    </>
  );
}
