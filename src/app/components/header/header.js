import React from 'react';
import './header.css';

export default function Header({ currentSection, linkRefs }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = React.useRef(null);
    const iconRef = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && !iconRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className="header-container">
            <header className="header">
                <nav className="text-center font-bold navigation select-none">
                    <img ref={iconRef} src="/icons/menu2.png" className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} alt="Menu" />
                    <ul ref={menuRef} className={`navigation-menu px-6 py-3 ${isMenuOpen ? 'show-menu' : ''}`}>
                        <a ref={linkRefs.hero} href="#hero" className={`${currentSection === "hero" && "highlight"}`}><li>Inicio</li></a>
                        <a ref={linkRefs.about} href="#about-me" className={`${currentSection === "about-me" && "highlight"}`}><li>Sobre mí</li></a>
                        <a ref={linkRefs.projects} href="#projects" className={`${currentSection === "projects" && "highlight"}`}><li>Proyectos</li></a>
                        <a ref={linkRefs.skills} href="#skills" className={`${currentSection === "skills" && "highlight"}`}><li>Habilidades</li></a>
                        <a ref={linkRefs.experience} href="#experience" className={`${currentSection === "experience" && "highlight"}`}><li>Experiencia</li></a>
                        <a ref={linkRefs.education} href="#education" className={`${currentSection === "education" && "highlight"}`}><li>Educación</li></a>
                        <a ref={linkRefs.contact} href="#contact" className={`${currentSection === "contact" && "highlight"}`}><li>Contacto</li></a>
                    </ul>
                </nav>
            </header>
        </section>
    );
}
