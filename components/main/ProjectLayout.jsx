import React from 'react'

const ProjectLayout = ({ project }) => {
    return (
        <>
            <div className="main-sidebar">
                <div className="single-sidebar-widget">
                    <div className="wid-title">
                        <h3>Download</h3>
                    </div>
                    <div className="brochures-download-items">
                        <div className="brochures-items">
                            <div className="icon">
                                <i className="fal fa-file-pdf" />
                            </div>
                            <div className="content">
                                <h5>Project Brochure</h5>
                                <p>Download</p>
                            </div>
                        </div>
                        <a href={project?.Brochurephoto} target='_blank' className="download-btn" download='BrochurePDF'>
                            <i className="fa-light fa-download" />
                        </a>
                    </div>
                    <div className="brochures-download-items">
                        <div className="brochures-items">
                            <div className="icon">
                                <i className="fal fa-file-pdf" />
                            </div>
                            <div className="content">
                                <h5>Project Layout</h5>
                                <p>Download</p>
                            </div>
                        </div>
                        <a href={project?.projectLayoutURL} target='_blank' className="download-btn active" download='projectLayoutURL'>
                            <i className="fa-light fa-download" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectLayout