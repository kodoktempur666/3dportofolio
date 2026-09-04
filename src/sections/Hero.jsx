import React from "react";
import { words, socialImgs } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/models/HeroModel/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProjectsTitle from "../components/ProjectsTitle";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 0.5,
        ease: "power4.out",
      },
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/*LEFT: HERO CONTENT*/}
        {/* pointer-events-none: teks tidak blokir drag canvas 3D */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5 relative z-20 pointer-events-none">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-2xl">
            {/* Badge status */}
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for Work
            </div>

            {/* Greeting */}
            <div className="hero-greeting">
              <p className="text-white-50 text-base md:text-lg font-medium tracking-wide">
                Hello, I'm
              </p>
              <h2 className="hero-name">Firman Maulana</h2>
            </div>

            {/* Title slider */}
            <div className="hero-text">
              <h1>
                As
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white-50 md:text-lg text-sm sm:text-base leading-relaxed max-w-xl">
              Passionate about building high-quality, reliable, and scalable web
              applications. Specializing in load testing with K6, API testing
              with Postman, and performance monitoring with Grafana &amp;
              Prometheus.
            </p>

            {/* Action buttons — pointer-events-auto agar tetap bisa diklik */}
            <div className="flex flex-wrap gap-8 sm:gap-3 md:gap-4 pt-1 pointer-events-auto">
              <Button
                className="md:w-80 md:h-16 w-full sm:w-60 h-12"
                text="View My Projects"
                href="#projects"
              />
              <Button
                className="md:w-80 md:h-16 w-full sm:w-60 h-12"
                text="Download CV"
                href="/Firman_Maulana_CV_EN.pdf"
                download="Firman_Maulana_CV_EN.pdf"
              />
            </div>

            {/* Social links — pointer-events-auto agar tetap bisa diklik */}
            <div className="hero-socials pointer-events-auto">
              {socialImgs.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  aria-label={social.name}
                >
                  <img src={social.imgPath} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </header>

        {/*RIGHT: 3D MODEL — z-index di bawah teks, tapi menerima pointer events */}
        <figure className="hero-3d-figure">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <ProjectsTitle />
    </section>
  );
};

export default Hero;
