// 'use client';
import React, { useState, useEffect } from 'react';
import './body.css';

export default function Home() {
    useEffect(() => {
        console.log("useEffect");

        // Creación del IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            console.log("observer");
            entries.forEach((entry) => {
                console.log("entry", entry)
                if (entry.isIntersecting) {
                    console.log("is intersecting")
                    entry.target.classList.add('show-section');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Usa el viewport como área de root
            rootMargin: '0px', // No hay margen
            threshold: 0.15 // 10% del elemento debe estar visible
        });

        // Obteniendo todos los elementos con la clase 'hidden'
        const hiddenElements = document.querySelectorAll('.hidden-section-l, .hidden-section-r');
        hiddenElements.forEach(element => observer.observe(element));

        // Función de limpieza
        return () => {
            console.log("cleanup");
            hiddenElements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div id="body" className="flex flex-col py-10 lg:p-24 items-center">
            <section className='section flex flex-col lg:flex-row'>
                <div className='font-extrabold px-5 m-0 text-5xl sm:text-7xl lg:pr-20'>
                    <h1 className='txt-color5'>Full<span className="txt-color4">-</span>Stack</h1>
                    <span>Developer</span><span className='txt-color4'>.</span>
                    <div className='text-lg sm:text-xl font-normal pt-5 sm:pt-10'>
                        <p>
                            Mi pasión radica en diseñar sistemas que sean intuitivos y elegantes
                            en su funcionalidad, donde cada componente tenga un propósito claro
                            y contribuya a una experiencia de usuario fluida y agradable. Creo
                            firmemente en el poder de lo simple para resolver problemas complejos,
                            buscando siempre la máxima eficacia con el mínimo de complicaciones.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center pt-24 lg:p-0'>
                    <img src='/pfp.jpeg' className='pfp' />
                </div>
            </section>
        </div>
    );
};

