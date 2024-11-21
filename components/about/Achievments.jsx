import { achievements } from "@/data/facts";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../common/AnimatedText";
export default function Achievments() {
  return (
    <section className="achivements-section fix mt-5" >
      <div className="container">
        <div className="achivements-wrapper-2 section-padding " style={{ padding: '50px 0' }} >
          <div className="bg-shape">
            <Image
              src="/assets/img/achivements-shape.png"
              width={700}
              height={700}
              alt="img"
            />
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="achivements-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long"></i>ACHIEVEMENT
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </h6>
                  <h3 className="splt-txt wow d-none d-lg-block">
                    <AnimatedText text="Building Excellence, " /> <br />
                    <AnimatedText text="Delivering Milestones!" />
                  </h3>
                </div>
                <Link
                  href={`/contact`}
                  className="theme-btn mt-3 mt-md-0 wow fadeInUp d-none d-lg-block"
                  data-wow-delay=".4s"
                  style={{ maxWidth: "200px" }}
                >
                  GET A QUOTE
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="achivements-right-items">
                {achievements.map((elm, i) => (
                  <div className="achivements-item pb-2">
                    <div
                      key={i}
                      className="counter-items wow fadeInUp"
                      data-wow-delay={elm.delay}
                    >
                      <div className="icon">
                        <Image
                          src={elm.icon}
                          width={50}
                          height={50}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h3>
                          <span className="count">{elm.count}</span>+
                        </h3>
                        <p>{elm.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Link
                  href={`/contact`}
                  className="theme-btn mt-3 mt-md-0 wow fadeInUp d-block d-lg-none"
                  data-wow-delay=".4s"
                  style={{ maxWidth: "200px" }}
                >
                  GET A QUOTE
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="man-image float-bob-x">
        <Image src="/assets/img/man.png" width={343} height={413} alt="img" />
      </div> */}
    </section>
  );
}
