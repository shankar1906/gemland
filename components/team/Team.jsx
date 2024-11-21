import { teamMembers3 } from "@/data/team";
import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
export default function Team() {
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            our team members
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Our Professional Team" />
          </h2>
        </div>
        <div className="row">
          {teamMembers3.map((member) => (
            <div
              key={member.id}
              className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp${
                member.delay ? "" : ""
              }`}
              data-wow-delay={member.delay}
            >
              <div
                className={`team-box-items${member.isActive ? " active" : ""}`}
              >
                <div className="social-icon d-grid align-items-center">
                  {member.socials.map((link, index) => (
                    <a key={index} href={link.href}>
                      <i className={link.iconClass} />
                    </a>
                  ))}
                </div>
                <div className="team-image">
                  <Image
                    src={member.image}
                    width={240}
                    height={288}
                    alt="img"
                  />
                </div>
                <div className="team-content">
                  <h5>
                    <Link href={`/team-details/${member.id}`}>
                      {member.name}
                    </Link>
                  </h5>
                  <p>{member.role}</p>
                  <a href="team-details" className="icon">
                    <i className="fa-solid fa-link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
