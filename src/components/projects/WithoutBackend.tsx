import { useState, useEffect, useRef, type ReactElement } from 'react';
import './WithoutBackend.css';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaEye,
  FaUtensils,
  FaIceCream,
  FaStar
} from 'react-icons/fa';
import { 
  SiReact, 
  SiTypescript, 
  SiBootstrap,
  SiFigma,
  SiCss3,
  SiJavascript
} from 'react-icons/si';
import ProjectModal from './ProjectModal';

// flower shop project photos
import photo1 from "../../assets/Снимок экрана 2025-11-01 201302.png";
import photo2 from "../../assets/Снимок экрана 2025-11-01 201336.png";
import photo3 from "../../assets/Снимок экрана 2025-11-01 201350.png";
import photo4 from "../../assets/Снимок экрана 2025-11-01 201416.png";
import photo5 from "../../assets/Снимок экрана 2025-11-01 201436.png";
import photo6 from "../../assets/Снимок экрана 2025-11-01 201452.png";
import photo7 from "../../assets/Снимок экрана 2025-11-01 201506.png";
import photo8 from "../../assets/Снимок экрана 2025-11-01 201527.png";
import photo9 from "../../assets/Снимок экрана 2025-11-01 201540.png";
import photo10 from "../../assets/Снимок экрана 2025-11-01 201557.png";
import photo11 from "../../assets/Снимок экрана 2025-11-01 201618.png";
import photo12 from "../../assets/Снимок экрана 2025-11-01 201741.png";
import photo13 from "../../assets/Снимок экрана 2025-11-01 201804.png";
import photo14 from "../../assets/Снимок экрана 2025-11-01 201819.png";

// your meal project photos
import meal1 from "../../assets/Снимок экрана 2025-11-01 204005.png";
import meal2 from "../../assets/Снимок экрана 2025-11-01 204018.png";
import meal3 from "../../assets/Снимок экрана 2025-11-01 204037.png";
import meal4 from "../../assets/Снимок экрана 2025-11-01 204050.png";
import meal5 from "../../assets/Снимок экрана 2025-11-01 204108.png";
import meal6 from "../../assets/Снимок экрана 2025-11-01 204208.png";
import meal7 from "../../assets/Снимок экрана 2025-11-01 204223.png";

// ice cream shop project photos
import ice1 from "../../assets/Снимок экрана 2025-11-01 205140.png";
import ice2 from "../../assets/Снимок экрана 2025-11-01 205156.png";
import ice3 from "../../assets/Снимок экрана 2025-11-01 205209.png";
import ice4 from "../../assets/Снимок экрана 2025-11-01 205222.png";
import ice5 from "../../assets/Снимок экрана 2025-11-01 205241.png";
import ice6 from "../../assets/Снимок экрана 2025-11-01 205301.png";
import ice7 from "../../assets/Снимок экрана 2025-11-01 205325.png";
import ice8 from "../../assets/Снимок экрана 2025-11-01 205348.png";
import ice9 from "../../assets/Снимок экрана 2025-11-01 205415.png";
import ice10 from "../../assets/Снимок экрана 2025-11-01 205432.png";
import ice11 from "../../assets/Снимок экрана 2025-11-01 205529.png";
import { LuFlower } from 'react-icons/lu';
export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    liveLink: string;
    githubLink: string;
    icon: React.ReactElement;
    accentColor: string;
    category: string;
    features: string[];
}
export type TechIcons = {
  [key: string]: ReactElement;
};

function WithoutBackend() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const projectsData = [
        {
            id: 1,
            title: "Floral Elegance",
            description: "A sophisticated flower shop platform with elegant animations and seamless user experience. Features product catalog, shopping cart, and responsive design.",
            images: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14],
            technologies: ["React", "TypeScript", "CSS", "Bootstrap", "Figma"],
            liveLink: "",
            githubLink: "https://github.com/m-radjabova/vite-project.git",
            icon: <LuFlower />,
            accentColor: "#FF6F91",
        },
        {
            id: 2,
            title: "Culinary Master",
            description: "Modern meal planning application with recipe management and interactive features. Perfect for food enthusiasts and home cooks.",
            images: [meal1, meal2, meal3, meal4, meal5, meal6, meal7],
            technologies: ["React", "TypeScript", "CSS", "Bootstrap", "Figma"],
            liveLink: "",
            githubLink: "https://github.com/m-radjabova/vite-project.git",
            icon: <FaUtensils />,
            accentColor: "#4ECDC4",
            },
        {
            id: 3,
            title: "Frozen Delights",
            description: "Vibrant ice cream shop website with engaging animations and product showcases. Captures the joy and excitement of frozen treats.",
            images: [ice1, ice2, ice3, ice4, ice5, ice6, ice7, ice8, ice9, ice10, ice11],
            technologies: ["React", "TypeScript", "CSS", "Bootstrap", "Figma"],
            liveLink: "",
            githubLink: "https://github.com/m-radjabova/vite-project.git",
            icon: <FaIceCream />,
            accentColor: "#45B7D1",
        }
    ];

    const techIcons: TechIcons = {
        react: <SiReact />,
        typescript: <SiTypescript />,
        bootstrap: <SiBootstrap />,
        figma: <SiFigma />,
        css: <SiCss3 />,
        javascript: <SiJavascript />
    };

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

    const openProjectModal = (project: Project) => {
        setActiveProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'avto';
    };

    const closeProjectModal = () => {
        setActiveProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        if (activeProject) {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === activeProject.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (activeProject) {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <section className="without-backend-section" id="projects" ref={sectionRef}>
            {/* Animated Background */}
            <div className="projects-bg">
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="without-backend-container">
                {/* Projects Grid */}
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div 
                            key={project.id} 
                            className={`project-card ${isVisible ? 'animate-in' : ''}`}
                            onClick={() => openProjectModal(project as Project)}
                        >
                            {/* Card Glow Effects */}
                            <div className="card-glow-1"></div>
                            <div className="card-glow-2"></div>
                            
                            {/* Project Image with Enhanced Overlay */}
                            <div className="card-image-container">
                                <img 
                                    src={project.images[0]} 
                                    alt={project.title} 
                                    className="card-image"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="image-gradient"></div>
                                
                                {/* Hover Overlay */}
                                <div className="card-overlay">
                                    <div className="overlay-content">
                                        <button className="view-project-btn magnetic">
                                            <FaEye />
                                            <span>Explore Project</span>
                                        </button>
                                        <div className="image-stats">
                                            <div className="stat">
                                                <FaStar />
                                                <span>{project.images.length} Screenshots</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technology Stack */}
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
                                
                                <p className="project-description">
                                    {project.description}
                                </p>                                
                                {/* Card Actions */}
                                <div className="card-actions">
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
                                    {project.liveLink && (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-btn live-btn magnetic"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Interactive Border */}
                            <div className="interactive-border"></div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                activeProject={activeProject}
                open={!!activeProject}
                onClose={closeProjectModal}
                currentImageIndex={currentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
            />
        </section>
    );
}

export default WithoutBackend;