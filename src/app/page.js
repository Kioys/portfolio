
'use client';
import React, {useState, useEffect, useRef} from "react";
import Body from "./components/body/body";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  const [currentSection, setCurrentSection] = useState('');
  const [threshold, setThreshold] = useState(0.4);
  
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const linkRefs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const isMobile = () => window.innerWidth <= 768;

  const adjustThreshold = () => {
    const newThreshold = isMobile() ? 0.4 : 0.7;
    setThreshold(newThreshold);
  };

  useEffect(() => {

    adjustThreshold();
    window.addEventListener('resize', adjustThreshold);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold }
    );

    Object.values(sectionRefs).forEach(ref => {
      observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener('resize', adjustThreshold);
      Object.values(sectionRefs).forEach(ref => {
        observer.unobserve(ref.current);
      });
    };
  }, [threshold]);

  return (
    <div className="font-sans">
      <Header currentSection={currentSection} linkRefs={linkRefs}/>
      <Body sectionRefs={sectionRefs} />
      <Footer />
    </div>
  )
}
