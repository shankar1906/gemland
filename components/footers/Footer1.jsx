"use client";
import Link from "next/link";
import Image from "next/image";
import { services4, services3 } from "@/data/services";
import { footerLinks } from "@/data/menu";
import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryImages } from "@/data/gallery";
import "photoswipe/dist/photoswipe.css";
import React from "react";
import "@/public/assets/css/main.css"
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { socialLinks } from "@/data/blogs";

export default function Footer1() {
  return (
    <footer
      className="footer-section bg-cover bg-cover"
      style={{ backgroundImage: 'url("/assets/img/footer/bg.jpg")' }}
    >
      <div className="container">
        <div className="footer-widgets-wrapper pb-3">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="contact-info-area2 mb-3">
                  <Link
                    href={`/`}
                    className="logo-img wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/assets/img/logo/logo.jpg"
                      width={149}
                      height={64}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="widget-head">
                  <h5>About Company</h5>
                </div>
                <div className="footer-content">
                  <p className="p-custom">
                    Explore premium plots and luxury villas in Coimbatore with Gemland Properties. Trusted for well-planned, secure, and comfortable residential spaces.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    {socialLinks.map((elm, i) => (
                      <a key={i} href={elm.href}>
                        <i className={elm.iconClass} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Quick Link</h5>
                </div>
                <ul className="list-area">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <i className="fa-solid fa-chevrons-right" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Projects</h5>
                </div>
                <ul className="list-area">
                  {services4.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.url}>
                        <i className="fa-solid fa-chevrons-right" />
                        {elm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget margin-left">
                <div className="widget-head">
                  <h5>Get In Touch</h5>
                </div>
                <div className="contact-info-area2">
                  <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="footer-content">
                      <p>
                        <a href="mailto:gemlandofficial@gmail.com">gemlandofficial@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume" />
                    </div>
                    <div className="footer-content">
                      <p>
                        <a href="tel:+919159644555">+91 91596 44555</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-items wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <i className="fa-sharp fa-solid fa-location-dot" />
                    </div>
                    <div className="footer-content footer-address">
                      <p>7/1A ADY's Residence,</p>
                      <p>Vaiyapuri nagar, Valiyampalayam,</p>
                      <p>Kalapatti, Coimbatore-641035</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Projects</h5>
                </div>
                <ul className="list-area">
                  {services3.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.url}>
                        <i className="fa-solid fa-chevrons-right" />
                        {elm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Projects</h5>
                </div>
                <ul className="list-area">
                  {services3.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.url}>
                        <i className="fa-solid fa-chevrons-right" />
                        {elm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Projects</h5>
                </div>
                <ul className="list-area">
                  {services3.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.url}>
                        <i className="fa-solid fa-chevrons-right" />
                        {elm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Projects</h5>
                </div>
                <ul className="list-area">
                  {services3.map((elm, i) => (
                    <li key={i}>
                      <Link href={elm.url}>
                        <i className="fa-solid fa-chevrons-right" />
                        {elm.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2024 Gemland Property, All Rights Reserved. Developed by <Link href={`https://thereciprocalsolutions.com/`}>The Reciprocal Solutions</Link>
          </p>
        </div>
      </div>
      {/* Floating Icons */}
      <FloatingWhatsApp
        phoneNumber="+919159644555"
        accountName="GemLand "
        allowEsc
        avatar="/assets/img/logo/gemland_logo.png"
        notification
        notificationSound
        statusMessage="Online"
      />
      <a href="tel:+919876543215" className="float1" target="_blank">
        <i className="fa fa-phone my-float" style={{ "padding": "10px" }}></i>
      </a>
    </footer>
  );
}
