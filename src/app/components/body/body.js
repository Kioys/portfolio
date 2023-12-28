// 'use client';
import React, { useState, useEffect } from 'react';
import './body.css';

export default function Home() {

    const createObserver = (newClassName, options) => {

        if (!window.IntersectionObserver) throw new Error('IntersectionObserver is not supported');

        if (!newClassName) throw new Error('newClassName is required');

        if (typeof newClassName !== 'string') throw new Error('newClassName must be a string');

        if (typeof options !== 'object') throw new Error('options must be an object');

        const observerOptions = options || {
            root: null,
            rootMargin: '0px',
            threshold: 0.30
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(newClassName);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        return observer;
    }

    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '-10%',
            threshold: 0
        }
        
        const observerLR = createObserver('show-section-lr', observerOptions);
        const observerTB = createObserver('show-section-tb', observerOptions);

        const hiddenElementsLR = document.querySelectorAll('.hidden-section-l, .hidden-section-r');
        hiddenElementsLR.forEach(element => observerLR.observe(element));

        const hiddenElementsTB = document.querySelectorAll('.hidden-section-t, .hidden-section-b');
        hiddenElementsTB.forEach(element => observerTB.observe(element));

        return () => {
            hiddenElementsLR.forEach(element => observerLR.unobserve(element));
            hiddenElementsTB.forEach(element => observerTB.unobserve(element));
        };
    }, []);

    return (
        <div id="body" className="flex flex-col lg:px-24 items-center">
            <HeroSection />
            <AboutMeSection />
            <ProjectsSection />
        </div>
    );
};

function HeroSection() {
    return (
        <section className="section flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left">
            <div className="pfp-container flex flex-column justify-center lg:justify-start w-full lg:w-1/2">
                <div className='flex flex-col items-center font-extrabold px-5 mb-10 text-2xl sm:text-5xl lg:pr-20'>
                    <img src="/images/pfp.jpeg" alt="Matias Arratibel" className="pfp" />
                    <h1 className='txt-detail '>Full<span className="txt-secondary">-</span>Stack</h1>
                    <span>Developer</span>
                </div>
            </div>
            <div className="intro-text w-full lg:w-1/2 px-5">
                <h1 className="text-3xl sm:text-5xl font-extrabold txt-detail">
                    Diseñando Sistemas Intuitivos y Elegantes
                </h1>
                <p className="text-lg sm:text-xl font-normal pt-5 sm:pt-10">
                    Mi pasión radica en diseñar sistemas que sean intuitivos y elegantes
                    en su funcionalidad, donde cada componente tenga un propósito claro
                    y contribuya a una experiencia de usuario fluida y agradable. Creo
                    firmemente en el poder de lo simple para resolver problemas complejos,
                    buscando siempre la máxima eficacia con el mínimo de complicaciones.
                </p>
            </div>
        </section>
    );
}

function AboutMeSection() {
    return (
        <section className="section flex flex-col lg:flex-row items-center justify-center min-h-screen">
            <div className="w-full lg:w-1/2 px-5">
                <div className="hidden-section-l">
                    <h2 className="text-4xl sm:text-6xl font-extrabold txt-detail">Sobre mí</h2>
                    <p className="text-lg sm:text-xl font-normal pt-5 sm:pt-10">
                        Desde pequeño, la tecnología capturó mi curiosidad,
                        iniciándose una pasión que me llevó al desarrollo
                        de software. Mi primera incursión fue crear un
                        autoclick para un juego, lo cual me introdujo
                        al maravilloso mundo de la programación.
                        A través de la autodidacta exploración de lenguajes
                        como C++, C# y JavaScript, desarrollé una base
                        sólida que me permitió dominar la programación
                        y adaptarme a nuevos lenguajes con facilidad.
                    </p>
                    <p className="text-lg sm:text-xl font-normal pt-5">
                        Esta jornada me condujo a la carrera de Ingeniería
                        en Informática, donde me gradué con la máxima distinción en 2022.
                        Desde entonces, he combinado mi carrera profesional
                        con proyectos personales, siempre buscando formas de
                        mejorar y expandir mis habilidades, particularmente
                        en colaboración con la inteligencia artificial para
                        potenciar mi productividad.
                    </p>
                    <p className="text-lg sm:text-xl font-normal pt-5">
                        Mis puntos fuertes como desarrollador incluyen una fuerte
                        capacidad para diseñar soluciones intuitivas,
                        un profundo entendimiento de mis códigos que me permite
                        depurar eficientemente, y una paciencia inquebrantable
                        que me mantiene enfocado y productivo durante largas
                        jornadas de desarrollo.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                {/* <!-- Aquí puedes incluir alguna imagen representativa o dejarlo para un diseño minimalista --> */}
            </div>
        </section>
    );
}

function ProjectsSection() {
    return (
        <section className="section py-20 flex justify-center items-center">
            <div className="container mx-auto">
                <h2 className="hidden-section-t text-4xl sm:text-6xl font-extrabold text-center txt-detail">Proyectos Destacados</h2>

                <div className=" flex flex-col md:flex-row md:flex-wrap justify-center items-center pt-10">
                    {/* Proyecto TGOL.IO */}
                    <div className="hidden-section-l w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="project-card bg-secondary p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-1">Atlas Dapp</h3>
                            <h4 className='text-md font-bold mb-3'>The Galaxy Of Lemuria</h4>
                            <p className="text-lg mb-3">
                                Contribución al desarrollo de una Dapp para TGOL, utilizando React, Ant Design y Ethereum para la gestión de blockchain. Por parte del backend con Node.js, Express, Parse Server y MongoDB, Pruebas Unitarias.
                            </p>
                            <a href="https://www.tgol.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                                <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                    Visitar sitio
                                </button>
                            </a>

                        </div>
                    </div>

                    {/* Proyecto Portafolio Personal */}
                    <div className="hidden-section-r w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="project-card bg-secondary p-6 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold mb-1">Portafolio Matias Arratibel</h3>
                            <h4 className='text-md font-bold mb-3'>Proyecto Personal</h4>
                            <p className="text-lg mb-3">
                                Desarrollo de mi portafolio profesional utilizando Next.js y Tailwind CSS para el frontend, con una implementación de Firebase en el backend para expandir funcionalidades de manera flexible y económica.
                            </p>
                            <div className='flex flex-row justify-start'>
                                <a href="https://matiasarratibel.web.app" target="_blank" rel="noopener noreferrer" className='mr-5'>
                                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                        Visitar sitio
                                    </button>
                                </a>
                                <a href="https://github.com/Kioys/portfolio" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                        Visitar repositorio
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
