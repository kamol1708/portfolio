import { useState, useEffect } from "react";
// import { Box, MenuItem, Select, FormControl } from "@mui/material";
import {FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // const [language, setLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // const languages = [
  //   { code: "EN", name: "English" },
  //   { code: "UZ", name: "O'zbek" },
  //   { code: "RU", name: "Русский" },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId : string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Animated Background Elements */}
      <div className="header-background">
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="header-glow"></div>
      </div>

      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-wrapper">
            <h2>M.Radjabova</h2>
            <div className="logo-dot"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="nav-text">{item.label}</span>
              <div className="nav-underline"></div>
            </button>
          ))}
        </nav>

        {/* Language Selector */}
        {/* <div className="language-selector">
          <FaGlobe className="global-icon" />
          <FormControl
            size="small"
            className="language-form"
          >
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Language selector' }}
              sx={{
                color: 'white',
                fontWeight: 600,
                '& .MuiSelect-select': {
                  padding: '8px 32px 8px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 'auto',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-icon': {
                  color: 'var(--accent)',
                  right: '8px',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'rgba(15, 15, 35, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    marginTop: '8px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    '& .MuiMenuItem-root': {
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 600,
                      padding: '12px 20px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:last-child': {
                        borderBottom: 'none',
                      },
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                      },
                      '&.Mui-selected': {
                        bgcolor: 'var(--gradient-2)',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'var(--gradient-2)',
                        },
                      },
                    },
                  },
                },
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Box className="language-item">
                    <span className="language-code">{lang.code}</span>
                    <span className="language-name">{lang.name}</span>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-background"></div>
        <nav className="mobile-nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="mobile-nav-text">{item.label}</span>
              <div className="mobile-nav-indicator"></div>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;