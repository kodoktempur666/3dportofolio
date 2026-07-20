import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards, workExpCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const WorkExpCard = ({ card }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    el.style.setProperty("--start", angle + 60);
  };

  return (
    <div className="flex items-start relative">
      <div className="relative flex justify-center mr-6 md:mr-10">
        <div className="work-timeline absolute z-30 h-[110%] -top-10 w-14 md:w-28 bg-black" />
        <div className="gradient-line w-1 h-full relative z-20" />
      </div>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="card card-border rounded-xl p-10 flex-1"
      >
        <div className="glow" />
        <div className="expText relative z-20">
          <h1 className="font-semibold text-3xl">{card.title}</h1>
          <p className="text-[#839CB5] text-xl mt-2">{card.role}</p>
          <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
          <p className="text-[#839CB5] italic">What I Do</p>
          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
            {card.responsibilities.map((responsibility, i) => (
              <li key={i} className="text-lg">{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 60%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    gsap.utils.toArray(".timeline, .work-timeline").forEach((tl) => {
      gsap.to(tl, {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: tl,
          start: "top center",
          end: "70% center",
          onUpdate: (self) => {
            gsap.to(tl, {
              scaleY: 1 - self.progress,
            });
          },
        },
      });
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <>
      <section
        id="education"
        className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      >
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader title="Education" sub="🎓 My Education Overview" />
          <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
              {expCards.map((card) => (
                <div key={card.title} className="exp-card-wrapper">
                  <div className="xl:w-2/6">
                    <GlowCard card={card}>
                      <div>
                        <img src={card.imgPath} alt="exp-img" />
                      </div>
                    </GlowCard>
                  </div>
                  <div className="xl:w-4/6">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          <img src={card.logoPath} alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-3xl">
                            {card.title}
                          </h1>
                          <p className="my-5 text-white-50">
                            🗓️&nbsp;{card.date}
                          </p>
                          <p className="text-[#839CB5] italic">What I Learn</p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index} className="text-lg">
                                  {responsibility}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      >
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader title="Experience" sub="💼 My Work Experience" />
          <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
              {workExpCards.map((card, index) => (
                <WorkExpCard key={card.title} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
