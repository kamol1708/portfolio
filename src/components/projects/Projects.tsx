import { useEffect, useRef, useState } from "react";
import WithoutBackend from "./WithoutBackend";
import { FaCode } from "react-icons/fa";
import WithBackend from "./WithBackend";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="project-section" ref={sectionRef}>
      <div className="project-container">
        {/* Enhanced Background Elements */}
        <div className="section-background">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
        </div>

        {/* Projects Header */}
        <div className={`section-header ${isVisible ? "animate-in" : ""}`}>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <FaCode className="decoration-icon" />
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Crafting digital experiences that combine beautiful design with
            powerful functionality
          </p>
        </div>

        {/* WithoutBackend Component */}
        <div className={`projects-content ${isVisible ? "animate-in" : ""}`}>
          <WithoutBackend />
        </div>

        <div className={`projects-content ${isVisible ? "animate-in" : ""}`}>
          <WithBackend />
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="decorative-circle circle-1"></div>
          <div className="decorative-circle circle-2"></div>
          <div className="decorative-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;