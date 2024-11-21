"use client";
import React, { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < 3 ? prev + 1 : 3)); // Adjust "3" to your maximum page number
  };

  return (
    <ul className="pagination">
      <li>
        <a
          className={`page-numbers icon ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevious}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </a>
      </li>
      {[1, 2, 3].map((page) => (
        <li key={page}>
          <a
            className={`page-numbers number ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page.toString().padStart(2, "0")}
          </a>
        </li>
      ))}
      <li>
        <a
          className={`page-numbers icon ${currentPage === 3 ? "disabled" : ""}`}
          onClick={handleNext}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </li>
    </ul>
  );
}
