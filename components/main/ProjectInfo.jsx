import React from 'react'

const ProjectInfo = ({project}) => {
  return (
    <>
      <div className="project-counting py-4">
        <div className="container">
          <div className="row">
            <div className="property-detail-info-divst section-bg-1 mb-60">
              <div className="row property-row">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className='property-padding'>
                  <label>Site Range:</label>
                  <span>
                    <span className="count items">
                      {project.SiteRange}
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className='property-padding'>
                  <label>Total Units:</label>
                  <span>
                    <span className="count items">
                      {project.units}
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className='property-padding'>
                  <label>Land Area:</label>
                  <span>
                    <span className="items">
                      {project.landArea}
                    </span>{" "}
                  </span>
                </div>
              </div>
              {/* <div>
                <div>
                  <label>Starting at</label>
                  <span>
                    <span className="count items">
                      {project.totalArea}
                    </span>
                  </span>
                </div>
              </div> */}              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo