import React from 'react'
import Image from 'next/image'
import AnimatedText from '../../common/AnimatedText'


const FuturesProject = () => {
  return (
    <>
      <div id="future-projects ps-4">
        <div className="container">
          <div className="row">
            <h2 className="splt-txt wow pb-4 d-block d-lg-none d-md-none" style={{ color: "#ffcd1f" }}>
              <AnimatedText text="OUR FUTURE GOALS" />
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-5 wow fadeInUp ps-lg-3" data-wow-delay=".2s">
              <div className="project-image">
                <Image
                  src="/assets/img/skills/1.png"
                  width={524}
                  height={320}
                  alt="Project Image"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="ps-lg-5">
                <h2 className="splt-txt wow pb-4 d-none d-lg-block d-md-block" style={{ color: "#ffcd1f" }}>
                  <AnimatedText text="OUR FUTURE GOALS" />
                </h2>
                <p className="mt-2 wow fadeInUp" data-wow-delay=".4s">
                  Our future projects aim to expand affordable, high-quality housing into new regions nationwide, blending modern amenities with sustainable design. We’re committed to creating communities that offer comfort, convenience, and value for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FuturesProject