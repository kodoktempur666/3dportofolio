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
  const project4Ref = React.useRef(null);
  const project5Ref = React.useRef(null);
  const project6Ref = React.useRef(null);
  const project7Ref = React.useRef(null);
  const project8Ref = React.useRef(null);
  const project9Ref = React.useRef(null);

  // callback function
  useGSAP(() => {
    const project = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
      project7Ref.current,
      project8Ref.current,
      project9Ref.current,
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
        },
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
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
                src="/images/projek/rick.jfif"
                alt="Library Management Platform"
              />
            </div>
            <div className="text-content">
              <h2>Food Booking App</h2>
              <p className="text-content">
                This is a food booking app for ordering food. The app is used by
                users and sellers. Build with Flutter and Firebase.
              </p>
              <a
                href=""
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
          <div className="first-project-wrapper" ref={project4Ref}>
            <div className="text-content">
              <h2 className="text-content">
                Eduline{" "}
                <h1 className="text-xl font-bold">(PT Ardata Digital Asia)</h1>
              </h2>
              <p className="text-content">
                Backend API with Express.js and PostgreSQL for tutoring session
                scheduling and mentor payroll management.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper" ref={project5Ref}>
            <div className="text-content">
              <h2 className="text-content">Subscription-API</h2>
              <p className="text-content mt-4">
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
          <div className="project-list-wrapper" ref={project6Ref}>
            <div className="text-content">
              <h2 className="text-content">
                Performance Test{" "}
                <h1 className="text-xl font-bold">(Thesis Project)</h1>
              </h2>

              <p className="text-content mt-4">
                Research project for analyzing and optimizing the performance of
                Express.js and Fastify REST APIs under high concurrent request
                conditions. The benchmark uses an e-commerce API scenario with
                PostgreSQL, Redis, BullMQ, k6, Prometheus, and Grafana to
                evaluate latency, throughput, error rate, and server
                performance.
              </p>

              <a
                href="https://github.com/kodoktempur666/performance-test-thesis-express-fastify"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
        <div className="showcaselayout mt-10">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project7Ref}>
            <div className="text-content">
              <h2>
                CRM Order Management{" "}
                <h1 className="text-xl font-bold">(PT Luzie Berkah Mandiri)</h1>
              </h2>
              <p className="text-content">
                Developed a CRM frontend with Next.js for order management with
                REST API integration from an Express.js backend, multilingual
                support using i18next (Indonesian and English), user
                authentication, and a responsive interface using Tailwind CSS
                and Shadcn for managing orders and customer data.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper" ref={project8Ref}>
            <div className="text-content">
              <h2>
                Profile Website{" "}
                <h1 className="text-xl font-bold">(Dekopinwil Jawa Tengah)</h1>
              </h2>
              <p className="text-content mt-6">
                Developed an institutional profile website using Next.js,
                Express.js, Tailwind CSS, PostgreSQL, JWT, and Drizzle,
                featuring an admin panel for content management, SEO
                optimization, JWT-based authentication, and a REST API backend
                for content management
              </p>
              <a
                href="https://dekopinwiljateng.id"
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
          <div className="project-list-wrapper" ref={project9Ref}>
            <div className="text-content">
              <h2>
                POS Laundry{" "}
                <h1 className="text-xl font-bold">
                  (Central Laundry Express Purbalingga)
                </h1>
              </h2>
              <p className="text-content mt-6">
                Developed Laundry POS backend with Express.js and PostgreSQL
                with multi-branch, membership, payment gateway with midtrans,
                monthly financial reporting, order statistics, service
                management, and a secure, scalable REST API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
