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
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made simple powerfull</h2>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, placeat.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper" ref={project2Ref}>
            <div className="image-wrapper bg-[#2D3240]">
              <img
                src="/images/project2.png"
                alt="Library Management Platform"
              />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made simple powerfull</h2>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, placeat.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper" ref={project3Ref}>
            <div className="image-wrapper bg-[#2D3240]">
              <img src="/images/project3.png" alt="YC Directory" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made simple powerfull</h2>
              <p className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-4xl h-[300px] my-10">
          <iframe
            src="https://wakatime.com/share/@4213cd84-4eb2-440e-989d-ae1aa2511760/f69fce98-ff11-4657-8b0d-656f13411753.svg"
            className="w-full h-full"
            frameBorder="0"
            title="Wakatime Stats"
          />
        </div> */}
    </section>
  );
};

export default ShowCaseSection;
