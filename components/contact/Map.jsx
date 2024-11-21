import React from "react";

export default function Map() {
  return (
    <div className="office-google-map-wrapper mt-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1855997537027!2d77.01891367590832!3d11.099541153148913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f90019101d67%3A0x2149990f239761c!2sAdy&#39;s%20Residence!5e0!3m2!1sen!2sin!4v1727177893501!5m2!1sen!2sin"
        style={{ border: 0,height: "450px", width: "100%" }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
}
