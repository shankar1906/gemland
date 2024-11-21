import React from 'react'
import Image from 'next/image';

const convertToImageName = (name) => {
  const newName = name
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
  return newName;
}

const ProjectAmenities = ({ project }) => {
  const amenities = project?.amenities?.map((amenity, index) => (
    <div className="grid-items" key={index}>
      <div className="counter-items2 style-2 wow fadeInUp">
        <div className="icon">
          <Image
            src={`/assets/img/amenities/${convertToImageName(amenity)}.png`}
            width={50}
            height={50}
            alt={amenity}
          />
        </div>
      </div>
      <p>{amenity}</p>
    </div>
  ));

  return (
    <div className="project-infor-wrapper">
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="project-nformation Project-Amenities">
            <div className="grid">{amenities}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectAmenities