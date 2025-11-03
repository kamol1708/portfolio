import { useEffect, useMemo, useRef, useState } from 'react';

const TypewriterTitle = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const titleRef = useRef(null);

  const texts = useMemo(() => [
    "Muslima Radjabova",
    "a Frontend Developer",
    "a Backend Developer",
    "a UI/UX Designer",
    "a Creative Coder"
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            setTimeout(() => {
              setCurrentIndex(0);
              setDisplayText('');
              setIsDeleting(false);
            }, 500);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, texts]);

  return (
    <h1 ref={titleRef} className="hero-title animate-on-scroll">
      Hi, I'm{" "}
      <span className="typewriter-container">
        <span className="gradient-text typewriter-text">{displayText}</span>
        <span className="typewriter-cursor">|</span>
      </span>
    </h1>
  );
};

export default TypewriterTitle;