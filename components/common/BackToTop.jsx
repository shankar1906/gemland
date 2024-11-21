"use client";

import { useEffect } from "react";

export default function BackToTop() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const backTopButton = document.getElementById("back-top");

      if (window.scrollY > 20) {
        backTopButton.classList.add("show");
      } else {
        backTopButton.classList.remove("show");
      }
    });
  }, []);

  const backToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This ensures a smooth scrolling effect
    });
  };

  return (
    <button id="back-top" onClick={backToTop} className="back-to-top show">
      <i className="fa-regular fa-arrow-up go-top"></i>
    </button>
  );
}
