import { teamMembers } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
export default function Team() {
  return (
    <section
      id="team"
      className="team-section fix section-padding bg-cover  scrollSpySection"
      style={{ backgroundImage: 'url("/assets/img/team/bg-shape.png")' }}
    >
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            our team
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="Our Expert Team" />
            <br />
            <AnimatedText text="Members" />
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div
                className={`team-card-items ${member.active ? "active" : ""}`}
              >
                <div className="team-image">
                  <Image
                    src={member.image}
                    width={238}
                    height={294}
                    alt="img"
                  />
                  <div className="social-icon d-flex align-items-center">
                    {member.socials.map((link, index) => (
                      <a key={index} href={link.href}>
                        <i className={link.iconClass} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="team-content">
                  <span>{member.role}</span>
                  <h3>
                    <Link href={`/team-details/${member.id}`}>
                      {member.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
