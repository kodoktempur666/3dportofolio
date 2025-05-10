import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = React.useRef(null);
  const project1Ref = React.useRef(null);
  const project2Ref = React.useRef(null);
  const project3Ref = React.useRef(null);

  // callback function
  useGSAP(() => {
    const project = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    project.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/projek/bs.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>Bank Sampah Desa Salem</h2>
              <p className="text-content">
                Website for bank sampah desa salem. The website is used by the
                waste collector for collecting waste from desa salem and payment
                for waste. Build with PHP native, Bootstrap and MySQL.
              </p>
              <a
                href="https://bssalem.com"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See The Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper" ref={project2Ref}>
            <div className="image-wrapper bg-[#2D3240]">
              <img
                src="/images/projek/lib.png"
                alt="Library Management Platform"
              />
            </div>
            <div className="text-content">
              <h2>Library Management Platform</h2>
              <p className="text-content">
                A website for library that can be used to manage books and
                users. Build with Next JS, Tailwind CSS, and Shadcn UI for
                frontend. Postgresql and Drizzle ORM for backend.
              </p>
              <a
                href="https://github.com/kodoktempur666/library.git"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See The Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="project-list-wrapper" ref={project3Ref}>
            <div className="image-wrapper bg-[#2D3240]">
              <img src="/images/projek/cell.png" alt="YC Directory" />
            </div>
            <div className="text-content">
              <h2>Muria Cellular Technology</h2>
              <p className="text-content">
                Company profile website for Muria Cellular Technology. Build
                with PHP native, Bootstrap and MySQL. Including admin panel for
                content management.
              </p>
              <a
                href="https://github.com/kodoktempur666/muriacell.git"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See The Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="showcaselayout mt-10">
          {/* LEFT */}

          {/* right */}
          <div className="project-list-wrapper" ref={project2Ref}>
            <div className="text-content">
              <h2>Subscription-API</h2>
              <p className="text-content">
                API for subscription reminder. Build with Express JS, Node JS,
                and MongoDB. With JWT authentication and Node Mailer for sending
                email.
              </p>
              <a
                href="https://github.com/kodoktempur666/subscription-API.git"
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>See The Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
