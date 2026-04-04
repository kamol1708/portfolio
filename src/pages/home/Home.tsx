import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent,
} from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiFolder,
  FiHome,
  FiLayers,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiMoon,
  FiPhone,
  FiSend,
  FiStar,
  FiSun,
  FiUser,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiFirebase,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiReact,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import "./home.css";

const profile = {
  name: "Kamol",
  role: "Frontend Developer",
  bio: "Men zamonaviy, tez va chiroyli web sahifalar yarataman. Dizayn va kod o'rtasidagi balansni saqlab, foydalanuvchi uchun yoqimli tajriba qurishga e'tibor beraman.",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  cvUrl: "#",
  email: "k.mamurov17@gmail.com",
  phone: "+998910843650",
  location: "Tashkent, Uzbekistan",
};

const navItems = [
  { id: "hero", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: HiOutlineSparkles },
  { id: "services", label: "Services", icon: FiLayers },
  { id: "portfolio", label: "Portfolio", icon: FiFolder },
  { id: "contact", label: "Contact", icon: FiMail },
];

const rotatingRoles = ["Frontend Developer", "UI Portfolio Builder", "React Developer"];

const skills = [
  { name: "React", level: 90, icon: SiReact },
  { name: "TypeScript", level: 84, icon: SiTypescript },
  { name: "Tailwind CSS", level: 88, icon: SiTailwindcss },
  { name: "Firebase", level: 80, icon: SiFirebase },
];

const techStack = [
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vite", icon: SiVite },
];

const services = [
  {
    title: "Landing Page Design",
    description:
      "Sotuvga yo'naltirilgan, chiroyli va tez ishlaydigan landing page'lar.",
    icon: FiMonitor,
  },
  {
    title: "React Development",
    description:
      "Reusable komponentlar va toza code structure bilan frontend development.",
    icon: FiCode,
  },
  {
    title: "Portfolio Websites",
    description:
      "Shaxsiy brend uchun mos, oson yangilanadigan portfolio website'lar.",
    icon: FiBriefcase,
  },
];

const timeline = [
  {
    year: "2026",
    title: "Advanced Frontend Projects",
    text: "Murakkab UI, animation va responsive portfolio'lar ustida ishlash.",
  },
  {
    year: "2025",
    title: "Dashboard & Admin UI",
    text: "React bilan ichki boshqaruv panellari va analitika interfeyslarini yig'ish.",
  },
  {
    year: "2024",
    title: "Freelance Landing Pages",
    text: "Mijozlar uchun promo website va personal portfolio sahifalar yaratish.",
  },
];

const projects = [
  {
    title: "Games Project",
    description:
      "Vercel'ga deploy qilingan interaktiv game project. Live holatda ko'rish va ishlatib ko'rish mumkin.",
    tags: ["React", "Vercel", "Game"],
    accent: "portfolio-card--cyan",
    preview: "preview-grid",
    image: "/game-hub-preview.svg",
    href: "https://games-pi-sepia.vercel.app/",
    github: "https://github.com/kamol1708/games",
    featured: true,
  },
  {
    title: "Task Manager UI",
    description:
      "Dashboard uslubidagi task management sahifasi, fokus va samaradorlik uchun ishlab chiqilgan.",
    tags: ["UI/UX", "Firebase", "Charts"],
    accent: "portfolio-card--violet",
    preview: "preview-kanban",
    href: "#",
    github: "#",
  },
  {
    title: "Creative Agency",
    description:
      "Xizmatlar, case'lar va call-to-action bloklari bilan boyitilgan agency website.",
    tags: ["Landing", "Branding", "Vite"],
    accent: "portfolio-card--gold",
    preview: "preview-showcase",
    href: "#",
    github: "#",
  },
];

const contactItems = [
  { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, icon: FiMapPin, href: "#" },
];

const socialLinks = [
  { label: "Telegram", icon: SiTelegram, href: "https://t.me/Champions_017" },
  { label: "Instagram", icon: SiInstagram, href: "https://instagram.com/username" },
  { label: "GitHub", icon: SiGithub, href: "https://github.com/kamol1708/games" },
  { label: "LinkedIn", icon: SiLinkedin, href: "https://linkedin.com/in/username" },
];

const mockupLines = new Array(4).fill(null);

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.2, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    const isCompleted = typedText === currentRole;
    const delay = isCompleted ? 1400 : isDeleting ? 45 : 85;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && typedText !== currentRole) {
        setTypedText(currentRole.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && isCompleted) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText.length > 0) {
        setTypedText(currentRole.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [typedText, isDeleting, roleIndex]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio inquiry from ${formData.name || "Website visitor"}`,
          _template: "table",
          _captcha: "false",
          _replyto: formData.email,
        }),
      });

      const data = (await response.json()) as { success?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitMessage(
        "Xabar yuborildi. Agar bu birinchi marta bo'lsa, pochtangizga kelgan confirm linkni bosing."
      );
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Xabar yuborilmadi. Iltimos qayta urinib ko'ring."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCardMove(event: MouseEvent<HTMLElement>, intensity = 14) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * intensity;
    const rotateX = (0.5 - y / rect.height) * intensity;

    card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
  }

  function handleCardLeave(event: MouseEvent<HTMLElement>) {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <div className="portfolio-backdrop" />

      <section id="hero" className="portfolio-panel portfolio-panel--hero">
        <aside className="floating-sidebar" aria-label="Section navigation">
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`floating-sidebar__item ${
                activeSection === id ? "is-active" : ""
              }`}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </aside>

        <div className="portfolio-panel__content hero-grid">
          <div className="hero-copy">
            <div className="hero-toolbar">
              <span className="eyebrow">Personal Portfolio</span>

              <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>

            <h1>
              Hi, I'm <span>{profile.name}</span>
            </h1>
            <p className="hero-role">
              I&apos;m a <span>{typedText}</span>
            </p>
            <p className="hero-bio">{profile.bio}</p>

            <div className="hero-actions">
              <a href="#portfolio" className="primary-btn">
                View My Work
              </a>
              <a href={profile.cvUrl} className="secondary-btn">
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-pill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>12+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>3+</strong>
                <span>Years practice</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-ring">
              <img src={profile.image} alt={profile.name} className="avatar" />
            </div>

            <div className="tech-orbit">
              {techStack.map(({ name, icon: Icon }) => (
                <div key={name} className="tech-orbit__badge" title={name}>
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-panel">
        <div className="portfolio-panel__content about-grid">
          <div className="about-card about-card--glow">
            <span className="eyebrow">About Me</span>
            <h2>Clean code, strong visuals, smooth experience.</h2>
            <p>
              Men portfolio, landing page, dashboard va admin panellarni zamonaviy
              usulda yig&apos;aman. Siz keyin ism, rasm va project ma&apos;lumotlarini oson
              almashtirishingiz uchun hammasini sodda structure bilan qoldirdim.
            </p>
          </div>

          <div className="about-card stats-grid">
            <div>
              <strong>3+</strong>
              <span>Years learning and building</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>UI concepts and client pages</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive layout focus</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Easy to customize structure</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-panel">
        <div className="portfolio-panel__content skills-grid">
          <div className="skills-visual">
            <div className="skills-illustration">
              <span className="skills-illustration__glow" />
              <div className="skills-icons">
                {techStack.map(({ name, icon: Icon }) => (
                  <div key={name} className="skills-icons__item">
                    <Icon />
                  </div>
                ))}
              </div>
              <div className="skills-illustration__hand" />
            </div>
          </div>

          <div className="skills-copy">
            <span className="eyebrow">Capabilities</span>
            <h2>
              My <span>Skills</span>
            </h2>
            <p>
              Frontend development, component architecture va responsive UI yaratishda
              e&apos;tiborim asosan tez ishlash, chiroyli ko&apos;rinish va qulay maintain
              qilishga qaratilgan.
            </p>

            <div className="skill-list">
              {skills.map(({ name, level, icon: Icon }) => (
                <div key={name} className="skill-row">
                  <div className="skill-row__label">
                    <span className="skill-row__icon">
                      <Icon />
                    </span>
                    <span>{name}</span>
                    <strong>{level}%</strong>
                  </div>
                  <div className="skill-row__bar">
                    <span style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="portfolio-panel">
        <div className="portfolio-panel__content">
          <div className="section-heading section-heading--left">
            <span className="eyebrow">Services</span>
            <h2>
              What I <span>Can Build</span>
            </h2>
            <p>Bu bo&apos;limga keyin o&apos;zingizning xizmatlaringizni yozib chiqishingiz mumkin.</p>
          </div>

          <div className="services-grid">
            {services.map(({ title, description, icon: Icon }) => (
              <article key={title} className="service-card">
                <div className="service-card__icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact" className="service-card__link">
                  Learn more
                  <FiArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-panel">
        <div className="portfolio-panel__content experience-grid">
          <div className="experience-copy">
            <span className="eyebrow">Experience</span>
            <h2>
              Learning path and <span>project growth</span>
            </h2>
            <p>
              Bu timeline ko&apos;rinishini xuddi resume kabi ishlatishingiz mumkin. Sana,
              kompaniya yoki kurs nomlarini o&apos;zingiznikiga almashtirib olasiz.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year + item.title} className="timeline-item">
                <span className="timeline-item__year">{item.year}</span>
                <div className="timeline-item__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-panel">
        <div className="portfolio-panel__content">
          <div className="section-heading">
            <span className="eyebrow">Selected Work</span>
            <h2>
              My <span>Portfolio</span>
            </h2>
            <p>A collection of recent UI concepts and website builds.</p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`portfolio-card ${project.accent} ${
                  project.featured ? "portfolio-card--featured" : ""
                }`}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="portfolio-card__preview-link"
                >
                  <div className="portfolio-card__preview">
                    {project.featured ? (
                      <span className="portfolio-card__badge">Featured Project</span>
                    ) : null}
                    {project.image ? (
                      <div className="portfolio-card__live-preview">
                        <div className="portfolio-card__live-bar">
                          <span />
                          <span />
                          <span />
                          <small>Project Preview</small>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="portfolio-card__image"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className={`mockup-window ${project.preview}`}>
                        <div className="mockup-window__bar">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="mockup-window__body">
                          {project.preview === "preview-kanban" && (
                            <div className="mockup-columns">
                              {new Array(3).fill(null).map((_, index) => (
                                <div key={index} className="mockup-column">
                                  {new Array(3).fill(null).map((__, itemIndex) => (
                                    <span key={itemIndex} />
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}

                          {project.preview !== "preview-kanban" && (
                            <>
                              <div className="mockup-hero" />
                              <div className="mockup-cards">
                                {mockupLines.map((_, index) => (
                                  <span key={index} />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </a>

                <div className="portfolio-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-card__actions">
                    <a
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                      className="portfolio-card__link"
                    >
                      View Project
                      <FiArrowUpRight />
                    </a>
                    <a
                      href={project.github}
                      target={project.github.startsWith("http") ? "_blank" : undefined}
                      rel={project.github.startsWith("http") ? "noreferrer" : undefined}
                      className="portfolio-card__link portfolio-card__link--ghost"
                    >
                      <SiGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-panel">
        <div className="portfolio-panel__content contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">Let&apos;s Work Together</span>
            <h2>Portfolio matnlari va rasmlarini keyin bemalol almashtirasiz.</h2>
            <p>
              Agar xohlasangiz keyingi bosqichda men bunga haqiqiy project rasmlari,
              admin panel preview yoki backend bilan yuboriladigan form ham qo&apos;sha olaman.
            </p>

            <div className="contact-list">
              {contactItems.map(({ label, value, icon: Icon, href }) => (
                <a key={label} href={href} className="contact-item">
                  <span className="contact-item__icon">
                    <Icon />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    <small>{value}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-pill">
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__rating">
              <span>
                <FiStar />
                Available for freelance work
              </span>
            </div>
            <h3>Need a similar website?</h3>
            <p>
              Quyidagi form demo ko&apos;rinishda ishlaydi. Submit bosilganda sizning email
              client&apos;ingiz orqali xabar yuborishga tayyorlaydi.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Project details"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="primary-btn primary-btn--inline"
                disabled={isSubmitting}
              >
                <FiSend />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage ? <p className="form-feedback form-feedback--success">{submitMessage}</p> : null}
              {submitError ? <p className="form-feedback form-feedback--error">{submitError}</p> : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
