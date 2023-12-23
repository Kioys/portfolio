import React from 'react';
import './header.css';

export default function Header() {
    return (
        <section className="header-container">
            <header className="header bg-color2 ">
                <nav className="text-center font-bold navigation">
                    <img src="/menu.png" className="menu-icon" alt="Menu" />
                    <ul className="navigation-menu p-3">
                        <a href="/"><li>Inicio</li></a>
                        <a href="/"><li>Acerca de</li></a>
                        <a href="/"><li>Contacto</li></a>
                    </ul>
                </nav>
            </header>
        </section>
    );
}
