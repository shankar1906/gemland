"use client";

import { useEffect } from "react";

export default function Mouse() {
  useEffect(() => {
    function mouseCursor() {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");
      let clientX = 0;
      let clientY = 0;
      let isHovering = false;

      if (window.innerWidth < 768) {
        cursorInner.style.display = "none";
        cursorOuter.style.display = "none";
        return; 
      }

      window.addEventListener("mousemove", function (event) {
        clientX = event.clientX;
        clientY = event.clientY;

        if (!isHovering) {
          cursorOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
        }
        cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
      });

      document.body.addEventListener(
        "mouseenter",
        function (event) {
          if (event.target.matches("a, .cursor-pointer")) {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
          }
        },
        true
      );

      document.body.addEventListener(
        "mouseleave",
        function (event) {
          if (event.target.matches("a, .cursor-pointer")) {
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
          }
        },
        true
      );

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }

    // Initialize the custom cursor functionality
    mouseCursor();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
}
