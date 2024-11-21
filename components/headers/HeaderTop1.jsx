import React from "react";

export default function HeaderTop1() {
  return (
    <div className="header-top-section section-bg pt-3 pb-3">
      <div className="container-fluid">
        <div className="header-top-wrapper">
          <span>
            {/* <i className="fa-regular fa-clock"></i> 09:00 am - 06:00 pm */}
          </span>
          <div className="social-icon d-flex align-items-center">
            <span>Follow Us:</span>
            <a href="https://m.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.x.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
