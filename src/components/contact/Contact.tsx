import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { 
  FaEnvelope,
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaTelegram,
  FaHeart,
  FaCode,
  FaArrowUp
} from 'react-icons/fa';
import { SiGmail, SiReact } from 'react-icons/si';
interface CustomCSSProperties extends CSSProperties {
  '--social-color'?: string;
}

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'muslimarajabova1997@gmail.com',
      link: '',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bukhara, Uzbekistan',
      link: '#',
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: '',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/m-radjabova',
      color: '#333'
    },
    {
      icon: <FaTelegram />,
      name: 'Telegram',
      url: '',
      color: '#0088CC'
    },
    {
      icon: <SiGmail />,
      name: 'Gmail',
      url: '',
      color: '#D14836'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-footer" ref={sectionRef}>
      {/* Background Elements */}
      <div className="footer-bg">
        <div className="bg-wave"></div>
        <div className="bg-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className={`footer-section brand-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="brand-logo">
              <h3>M.Radjabova</h3>
              <div className="logo-dot"></div>
            </div>
            <p className="brand-description">
              Frontend Developer & UI/UX Designer passionate about creating 
              beautiful and functional digital experiences.
            </p>
            <div className="tech-stack">
              <span>Built with</span>
              <div className="stack-icons">
                <SiReact className="react-icon" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`footer-section links-section ${isVisible ? 'animate-in' : ''}`}>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`footer-section contact-section ${isVisible ? 'animate-in' : ''}`}>
            <h4>Get In Touch</h4>
            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="contact-method"
                >
                  <div className="method-icon">
                    {item.icon}
                  </div>
                  <div className="method-info">
                    <span className="method-title">{item.title}</span>
                    <span className="method-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div className={`footer-section cta-section ${isVisible ? 'animate-in' : ''}`}>
            <h4>Let's Work Together</h4>
            <p>Have a project in mind? Let's discuss it!</p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color } as CustomCSSProperties}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Muslima Radjabova. Made with 
                <FaHeart className="heart-icon" /> 
                and lots of 
                <FaCode className="code-icon" />
              </p>
            </div>
            
            <button className="scroll-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;