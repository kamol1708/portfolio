import { useEffect, useRef, useState } from "react";
import myPhoto from "../../assets/photo_2025-11-03_08-23-39.jpg";
import TypewriterTitle from "./TypewriterTitle";

interface CustomStyle extends React.CSSProperties {
  "--mouse-x": string;
  "--mouse-y": string;
}

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const avatarRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);
    if (avatarRef.current) observer.observe(avatarRef.current);

    // Floating particles effect
    const createParticles = () => {
      const container = document.querySelector(".particles-container");
      if (!container) return;

      // Clear existing particles
      container.innerHTML = "";

      for (let i = 0; i < 25; i++) {
        const particle = document.createElement("div");
        particle.className = "floating-particle";

        const size = Math.random() * 8 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 15 + 15;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        // Random gradient colors
        const gradients = [
          "var(--gradient-1)",
          "var(--gradient-2)",
          "var(--gradient-3)",
          "var(--gradient-4)",
          "var(--gradient-5)",
        ];
        const randomGradient =
          gradients[Math.floor(Math.random() * gradients.length)];
        particle.style.background = randomGradient;

        container.appendChild(particle);
      }
    };

    createParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      {/* Advanced Animated Background */}
      <div
        className="animated-bg"
        style={
          {
            "--mouse-x": `${mousePosition.x}%`,
            "--mouse-y": `${mousePosition.y}%`,
          } as CustomStyle
        }
      >
        <div className="gradient-mesh"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        <div className="particles-container"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="grid-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <div className="text-content">
              <TypewriterTitle />

              <p
                ref={descriptionRef}
                className="hero-description animate-on-scroll"
              >
                I specialize in creating{" "}
                <span className="highlight">immersive digital experiences</span>{" "}
                that blend cutting-edge technology with elegant design.
                Transforming complex ideas into intuitive, user-friendly
                interfaces.
              </p>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years</div>
                </div>
              </div>

              <div ref={buttonsRef} className="hero-buttons animate-on-scroll">
                <a href="#projects" className="btn btn-primary magnetic">
                  <span className="btn-text">
                    <span className="btn-icon">🚀</span>
                    Explore Projects
                  </span>
                  <div className="btn-shine"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
           <div className="hero-right">
            <div className="avatar-container">
              <div ref={avatarRef} className="avatar-wrapper animate-on-scroll">
                <div className="avatar-glow"></div>
                <img
                  src={myPhoto}
                  alt="Muslima"
                  className="hero-avatar floating"
                />
                <div className="avatar-border"></div>
                <div className="tech-icons">
                  <div className="tech-icon react">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 841.9 595.3"
                      width="100"
                      height="100"
                    >
                      <g stroke="#61DAFB" fill="none" stroke-width="20">
                        <circle cx="420.9" cy="296.5" r="45.7" />
                        <ellipse
                          cx="420.9"
                          cy="296.5"
                          rx="250"
                          ry="100"
                          transform="rotate(60 420.9 296.5)"
                        />
                        <ellipse
                          cx="420.9"
                          cy="296.5"
                          rx="250"
                          ry="100"
                          transform="rotate(-60 420.9 296.5)"
                        />
                        <ellipse cx="420.9" cy="296.5" rx="250" ry="100" />
                      </g>
                    </svg>

                  </div>

                  <div className="tech-icon js">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 630 630"
                    >
                      <rect width="630" height="630" fill="#F7DF1E" />
                      <path d="M423 492c13 8 30 15 48 15 23 0 36-11 36-27 0-18-14-24-38-34l-13-6c-37-15-62-34-62-74 0-37 28-65 71-65 31 0 54 11 70 39l-38 24c-8-15-17-21-31-21-14 0-23 9-23 21 0 15 9 21 31 30l13 6c44 19 69 37 69 79 0 45-36 70-83 70-37 0-61-10-79-37l38-23zm-165 3c7 12 13 23 28 23 14 0 23-5 23-28V289h43v201c0 45-26 66-64 66-34 0-54-17-64-38l34-21z" />
                    </svg>
                  </div>

                  <div className="tech-icon css">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 124 141.53199999999998"
                    >
                      <path
                        fill="#1572B6"
                        d="M10.383 127.422L0 0h124l-10.383 127.398L61.965 141.53"
                      />
                      <path
                        fill="#33A9DC"
                        d="M62 131.861l41.91-11.623L113.617 9.14H62"
                      />
                      <path
                        fill="#fff"
                        d="M62 57.802H41.754l-1.44-16.147H62V25.73H23.543l.378 4.246 3.887 43.553H62V57.802zM62 97.926l-.07.02-17.06-4.61-1.09-12.206H27.44l2.14 23.972 32.347 8.985.07-.02v-16.14z"
                      />
                      <path
                        fill="#EBEBEB"
                        d="M61.965 57.802v15.925h18.812l-1.772 19.61-17.04 4.61v16.14l32.327-8.985.23-2.603 3.703-41.442.383-4.255H61.965zM61.965 25.73v15.925h38.604l.315-3.556.717-8.123.376-4.246H61.965z"
                      />
                    </svg>
                  </div>

                  <div className="tech-icon html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 124 141.53199999999998"
                    >
                      <path
                        fill="#E34F26"
                        d="M10.383 127.422L0 0h124l-10.383 127.398L61.965 141.53"
                      />
                      <path
                        fill="#EF652A"
                        d="M62 131.861l41.91-11.623L113.617 9.14H62"
                      />
                      <path
                        fill="#EBEBEB"
                        d="M62 57.802H41.754l-1.44-16.147H62V25.73H23.543l.378 4.246 3.887 43.553H62V57.802zM62 97.926l-.07.02-17.06-4.61-1.09-12.206H27.44l2.14 23.972 32.347 8.985.07-.02v-16.14z"
                      />
                      <path
                        fill="#fff"
                        d="M61.965 57.802v15.925h18.812l-1.772 19.61-17.04 4.61v16.14l32.327-8.985.23-2.603 3.703-41.442.383-4.255H61.965zM61.965 25.73v15.925h38.604l.315-3.556.717-8.123.376-4.246H61.965z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-thumb"></div>
          </div>
          <span className="scroll-text">Scroll to Discover</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;