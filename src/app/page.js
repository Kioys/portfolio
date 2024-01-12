
'use client';
import React from "react";
import Body from "./components/body/body";
import Header from "./components/header/header";

export default function Home() {
  const [currentSection, setCurrentSection] = React.useState('');
  const [threshold, setThreshold] = React.useState(0.4);
  
  const sectionRefs = {
    hero: React.useRef(null),
    about: React.useRef(null),
    projects: React.useRef(null),
    skills: React.useRef(null),
    experience: React.useRef(null),
    education: React.useRef(null),
    contact: React.useRef(null),
  };

  const linkRefs = {
    hero: React.useRef(null),
    about: React.useRef(null),
    projects: React.useRef(null),
    skills: React.useRef(null),
    experience: React.useRef(null),
    education: React.useRef(null),
    contact: React.useRef(null),
  };

  const isMobile = () => window.innerWidth <= 768;

  const adjustThreshold = () => {
    const newThreshold = isMobile() ? 0.4 : 0.7;
    setThreshold(newThreshold);
  };

  React.useEffect(() => {

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
    </div>
  )
}
