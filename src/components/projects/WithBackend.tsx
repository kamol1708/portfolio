import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import useProjects from "../../hooks/useProjects";
import type { TechIcons } from "./WithoutBackend";
import {
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function normalizeUrl(url: string) {
  if (!url) return "";
  let trimmed = url.trim();

  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = "https://" + trimmed;
  }

  trimmed = trimmed.replace(/\/+$/, "");
  return trimmed;
}

function getPreviewSrc(demoLink: string) {
  const normalized = normalizeUrl(demoLink);
  if (!normalized) return "";

  return `https://image.thum.io/get/width/1200/${encodeURIComponent(
    normalized
  )}`;
}

function WithBackend() {
  const { projects, loading } = useProjects();

  const techIcons: TechIcons = {
    react: <SiReact />,
    typescript: <SiTypescript />,
    bootstrap: <SiBootstrap />,
    figma: <SiFigma />,
    css: <SiCss3 />,
    javascript: <SiJavascript />,
    tailwind: <SiTailwindcss />,
    firebase: <SiFirebase />,
  };

  if (loading) {
    return <div className="without-backend-container">Loading ..</div>;
  }

  return (
    <div className="without-backend-container">
      <div className="projects-grid">
        {projects.map((project) => {
          const previewSrc = getPreviewSrc(project.demoLink);

          return (
            <div key={project.id} className="project-card">
              {/* Card Glow Effects */}
              <div className="card-glow-1"></div>
              <div className="card-glow-2"></div>

              {/* Project Image */}
              <div className="card-image-container">
                <img
                  src={previewSrc}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22180%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22180%22%20fill%3D%22%23f3f4f6%22/%3E%3Ctext%20x%3D%22150%22%20y%3D%2295%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%20fill%3D%22%23999%22%3ENo%20preview%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Overlay va tech stack */}
                <div className="image-gradient"></div>
                <div className="tech-stack-project">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="tech-item-project"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      <div className="tech-icon-project">
                        {techIcons[tech.toLowerCase()] || <SiReact />}
                      </div>
                      <span className="tech-name-project">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-header">
                  <div className="title-section">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="card-actions">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn github-btn magnetic"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                  <a
                    href={normalizeUrl(project.demoLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn live-btn magnetic"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Border */}
              <div className="interactive-border"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WithBackend;
