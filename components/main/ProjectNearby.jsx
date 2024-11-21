import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectNearby = ({ nearby = [] }) => {
  
  // Corrected logging
  console.log("Project nearby PAge ----->", nearby);

  const projectRefs = useRef([]);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(-1);

  const handleProjectHover = (index) => {
    if (hoveredProjectIndex >= 0) {
      projectRefs.current.forEach((el) => el && el.classList.remove("active"));
    }
    setHoveredProjectIndex(index);
    projectRefs.current[index]?.classList.add("active");
  };

  useEffect(() => {
    if (hoveredProjectIndex === -1 && nearby.length > 0) {
      handleProjectHover(0);
    }
  }, [nearby]);

  return (
    <div className="container">
      <div className="project-wrapper">
        <div className="main-box">
          {nearby?.map((e, i) => (
            <div
              ref={(el) => (projectRefs.current[i] = el)}  // Assigning refs correctly
              onMouseOver={() => handleProjectHover(i)}   // Handling hover
              key={i}
              style={{ backgroundImage: `url('${e.photoUrl}')` }}  // Using e.photoUrl from the array
              className={`box wow fadeInUp ${hoveredProjectIndex === i ? "active" : ""}`}
              data-wow-delay=".4s"
            >
              <div className="project-content">
                <h3 className='text-black'>{e.name}</h3> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectNearby;
