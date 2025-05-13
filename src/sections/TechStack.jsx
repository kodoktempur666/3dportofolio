import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import { techStackImgs } from "../constants";
import { useMediaQuery } from "react-responsive";

const TechStack = () => {
  // Animate the tech cards in the skills section
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useGSAP(() => {
    const baseAnimation = {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top center",
      },
    };

    if (isMobile) {
      gsap.fromTo(
        ".tech-card",
        { y: 100, opacity: 0, scale: 0.9 },
        { ...baseAnimation, y: 0, scale: 1 }
      );
    } else if (isTablet) {
      gsap.fromTo(
        ".tech-card",
        { y: 75, opacity: 0 },
        { ...baseAnimation, y: 0 }
      );
    } else {
      // Desktop
      gsap.fromTo(
        ".tech-card",
        { y: 50, opacity: 0, rotateX: -10 },
        { ...baseAnimation, y: 0, rotateX: 0 }
      );
    }
  }, [isMobile, isTablet]);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {isMobile || isTablet
            ? techStackImgs.map((techStackIcon, index) => (
                <div
                  key={index}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img src={techStackIcon.imgPath} alt="" />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))
            : techStackIcons.map((techStackIcon) => (
                <div
                  key={techStackIcon.name}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <TechIconCardExperience model={techStackIcon} />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
