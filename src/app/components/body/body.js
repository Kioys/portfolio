import React, { useState, useEffect } from 'react';
import './body.css';

export default function Home() {

    // Importar hooks adicionales según sea necesario
    // Importar componentes como Contact, PitchSlate, etc.


    // Estado y lógica similar a `data` y `computed` en Vue
    const [currentSection, setCurrentSection] = useState(/* valor inicial */);
    // ...otros estados

    // Efectos secundarios para manejar eventos de montaje y desmontaje
    useEffect(() => {
        // Montaje: Añadir event listeners, etc.

        return () => {
            // Desmontaje: Limpiar event listeners, etc.
        };
    }, []);

    // Métodos similares a Vue
    const goToSection = (/* parámetros */) => {
        // Lógica para navegar a una sección
    };

    // ...otros métodos

    // Renderizado
    return (
        <div id="body" className="flex flex-col py-10 lg:p-24 items-center">
            <section className='section flex flex-col lg:flex-row'>
                <div className='font-extrabold px-5 m-0 text-5xl sm:text-7xl lg:pr-20'>
                    <h1 className='txt-color5'>Full<span className="txt-color4">-</span>Stack</h1>
                    Developer<span className='txt-color4'>.</span>
                    <div className='text-lg sm:text-2xl font-normal pt-5 sm:pt-10'>
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
                    <img src='/pfp.jpeg' className='pfp'/>
                </div>
            </section>
            <section className='section'>Hello world</section>
            <section className='section'>Hello world</section>
        </div>
    );
};