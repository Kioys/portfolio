// 'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './body.css';

export default function Home(props) {

    const { sectionRefs } = props;

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
                    entry.target.addEventListener('transitionend', function callback() {
                        entry.target.classList.remove('hidden-section-l', 'hidden-section-r');
                        entry.target.removeEventListener('transitionend', callback);
                    });
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
            <HeroSection sectionRef={sectionRefs.hero} />
            <AboutMeSection sectionRef={sectionRefs.about} />
            <ProjectsSection sectionRef={sectionRefs.projects} />
            <SkillsSection sectionRef={sectionRefs.skills} />
            <WorkExperienceSection sectionRef={sectionRefs.experience} />
            <EducationSection sectionRef={sectionRefs.education} />
            <ContactSection sectionRef={sectionRefs.contact} />
        </div>
    );
};

function HeroSection({ sectionRef }) {
    return (
        <section ref={sectionRef} id="hero" className="section flex flex-col lg:flex-row items-center justify-center min-h-screen text-center xl:text-left">
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

function AboutMeSection({ sectionRef }) {
    return (
        <section ref={sectionRef} id="about-me" className="section flex flex-col lg:flex-row items-center justify-center min-h-screen">
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
            <div className="hidden-section-r w-80 lg:w-1/2 flex flex-col items-center pt-10 xl:pt-24">
                <img src='/images/autoretrato.jpg' width={"400px"} className='rounded-xl' />
                <p className='font-light italic text-md'>Yo a los 17 años con mi perro Thor</p>
            </div>
        </section>
    );
}

function ProjectsSection({ sectionRef }) {
    return (
        <section ref={sectionRef} id="projects" className="section flex flex-col lg:flex-row items-center justify-center min-h-screen text-left">
            <div className="container mx-auto">
                <h2 className="hidden-section-t text-4xl sm:text-6xl font-extrabold text-center txt-detail">Proyectos Destacados</h2>
                <div className=" flex flex-col md:flex-row md:flex-wrap justify-center items-center pt-10">

                    <div className="hidden-section-l w-full xl:w-1/3 p-4 ">
                        <div className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col xl:max-h-96 xl:h-96 justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-1">Atlas Dapp</h3>
                                <h4 className='text-md font-bold mb-3'>The Galaxy Of Lemuria (TGOL)</h4>
                                <p className="text-lg mb-3 overflow-y-scroll max-h-44 scrollable-text">
                                    Contribución al desarrollo de una Dapp para TGOL de Lemuria Online, utilizando  de Lemuria Online, utilizando  de Lemuria Online, utilizando  de Lemuria Online, utilizando  de Lemuria Online, utilizando React, Ant Design y Ethereum para la gestión de blockchain. Por parte del backend con Node.js, Express, Parse Server y MongoDB, Pruebas Unitarias.
                                </p>
                            </div>
                            <div>
                                <a href="https://www.tgol.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                        Web
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden-section-r w-full xl:w-1/3 p-4 ">
                        <div className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col xl:max-h-96 xl:h-96 justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-1">Portafolio</h3>
                                <h4 className='text-md font-bold mb-3'>Proyecto Personal</h4>
                                <p className="text-lg mb-3 flex-grow overflow-y-scroll max-h-44 scrollable-text">
                                    Desarrollo de mi portafolio profesional utilizando Next.js con React.js y Tailwind CSS para el frontend.
                                </p>
                            </div>
                            <div className='flex flex-row justify-start'>
                                <a href="https://matiasarratibel.web.app" target="_blank" rel="noopener noreferrer" className='mr-5'>
                                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                        Web
                                    </button>
                                </a>
                                <a href="https://github.com/Kioys/portfolio" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-primary text-white font-bold py-2 px-4 rounded-md">
                                        Repositorio
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

function SkillsSection({ sectionRef }) {
    return (
        <section ref={sectionRef} id="skills" className="section flex flex-col lg:flex-row items-center justify-center min-h-screen text-center">
            <div className="container mx-auto">
                <h2 className="hidden-section-r txt-detail text-4xl sm:text-6xl font-extrabold text-center">Habilidades Técnicas</h2>
                <div className="flex flex-wrap justify-center text-center mt-10">
                    <div className="hidden-section-l w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">POO</h3>
                        <p className="text-lg">
                            Basta experiencia manejando lenguajes orientados a objetos, C#, Javascript, C++, Java.
                        </p>
                    </div>
                    <div className="hidden-section-r w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">Desarrollo Web</h3>
                        <p className="text-lg">
                            Experiencia desarrollando aplicaciones web con React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript, Node.js, Express, MongoDB, Firebase, Git, GitHub, etc.
                        </p>
                    </div>
                    <div className="hidden-section-l w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">React</h3>
                        <p className="text-lg">
                            Más de dos años de experiencia desarrollando aplicaciones robustas, incluyendo una Dapp para The Galaxy of Lemuria.
                        </p>
                    </div>
                    <div className="hidden-section-r w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">JavaScript</h3>
                        <p className="text-lg">
                            Amplia experiencia en JavaScript, aplicado en varios proyectos web, incluyendo Node.js y frameworks frontend.
                        </p>
                    </div>
                    <div className="hidden-section-l w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">Node.js</h3>
                        <p className="text-lg">
                            Experiencia en el desarrollo de back-end con Node.js, utilizando frameworks como <span className='txt-detail'>Express</span> y herramientas para la gestión de bases de datos y <span className='txt-detail'>APIs RESTful</span>.
                        </p>
                    </div>
                    <div className="hidden-section-r w-full md:w-1/2 lg:w-1/3 p-4">
                        <h3 className="txt-detail text-2xl font-bold mb-3">MongoDB</h3>
                        <p className="text-lg">
                            Experiencia manejando datos y creando estructuras de bases de datos no relacionales con MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkExperienceSection({ sectionRef }) {

    function calculateDateDiff(from, end = new Date()) {
        const start = new Date(from);
        const now = new Date(end);
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
            years--;
            months = 12 + months;
        }
        return `${start.getFullYear()}-${typeof end === "string" ? now.getFullYear() : "Actualidad"} (${years <= 0 ? "" : `${years} años ${months > 0 ? "y " : ""}`}${months <= 0 ? "" : `${months} meses`})`;
    }

    return (
        <section ref={sectionRef} id="experience" className="section flex flex-col lg:flex-row items-center justify-center min-h-screen text-center">
            <div className="container mx-auto">
                <h2 className="hidden-section-l text-4xl sm:text-6xl font-extrabold text-center txt-detail">Experiencia Profesional</h2>
                <div className="hidden-section-r mt-10 ">
                    <div className=" work-experience-card p-6 rounded-lg xl:px-40">
                        <span className=' txt-detail'><h3 className="text-2xl font-bold ">Desarrollador Full-Stack - Lemuria Online SpA<p className="text-lg font-bold txt-primary">
                            {calculateDateDiff('2021-11-01', '2022-02-01')}</p></h3></span>
                        <p className="text-lg mt-3 text-left">
                            En Lemuria Online SpA, trabajé como desarrollador full-stack, contribuyendo al desarrollo de una Dapp para The Galaxy of Lemuria, estuve a cargo de corregir y mejorar la interfaz de usuario en la pagina web y agregar funcionalidades basicas en el backend, desde la implementacion de la logica para el inicio de sesión hasta la recuperación de la cuenta del usuario.
                        </p>
                    </div>
                </div>
                <div className="hidden-section-l mt-10 ">
                    <div className="work-experience-card p-6 rounded-lg xl:px-40">
                        <span className='txt-detail'><h3 className="text-2xl font-bold ">Desarrollador Full-Stack - Lemuria Online SpA<p className="text-lg font-bold txt-primary">
                            {calculateDateDiff('2022-05-31')}</p></h3></span>
                        <p className="text-lg mt-3 text-left">
                            Mi carrera profesional dio un giro significativo al unirme por segunda vez a Lemuria Online SpA como practica y luego como Ingeniero en Informática titulado, donde he trabajado como desarrollador full-stack. Esta oportunidad fue fundamental para profundizar en el desarrollo de aplicaciones descentralizadas, un área en crecimiento y de gran importancia en el sector tecnológico.
                        </p>
                        <p className="text-lg mt-3 text-left">
                            A través de los desafíos y soluciones innovadoras, he adquirido experiencia valiosa en el desarrollo web desde conceptos básicos hasta aspectos avanzados, como el trabajo con blockchain. Los errores y los éxitos durante este tiempo han sido instructivos, proporcionando una base sólida para mi crecimiento continuo como desarrollador.
                        </p>
                        <p className="text-lg mt-3 text-left">
                            En mi rol de desarrollador full-stack, mis responsabilidades en la empresa incluyen colaborar en el desarrollo de sistemas de software e integrar soluciones individuales en sistemas de nivel superior. Formulo especificaciones y prototipos básicos de programas, transformo diseños y especificaciones de software en código de alto rendimiento en el lenguaje correspondiente. Realizo pruebas unitarias y de integración, depuro y corrijo errores en el código, evalúo y propongo mejoras en el mismo. Colaboro con los miembros del equipo para establecer metas y objetivos, diseño y desarrollo interfaces de usuario, y escribo documentación técnica para referencia y reportes. Me mantengo actualizado con las nuevas tecnologías y tendencias en el desarrollo de software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EducationSection({ sectionRef }) {
    const sololearnCertificates = {
        HTML: "https://www.sololearn.com/certificates/CT-UFNCRYN1",
        CSS: "https://www.sololearn.com/certificates/CT-PO1YLILS",
        JavaScript: "https://www.sololearn.com/certificates/CT-WZAATVSV",
        'C#': "https://www.sololearn.com/certificates/CT-FMH334FS",
        SQL: "https://www.sololearn.com/certificates/CT-AG31ZLYL",
        Java: "https://www.sololearn.com/certificates/CT-Y3ZFBU6O",
        Python: "https://www.sololearn.com/certificates/CC-4SSKKZT9"
    };

    return (
        <section ref={sectionRef} id="education" className="section flex flex-row items-center justify-center min-h-screen text-center">
            <div className="container mx-auto">
                <h2 className="hidden-section-r text-4xl sm:text-6xl font-extrabold text-center mb-10 txt-detail">Educación y Certificaciones</h2>
                <div className="hidden-section-l flex flex-wrap justify-center items-start pb-10">
                    <div className="px-6 xl:px-40">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold txt-detail">Ingeniería en Informática - IPCHILE</h3>
                            <p className="text-lg font-bold txt-primary">2019 - 2022 (Distinción Máxima)</p>
                            <p className="text-lg mt-3 text-left">
                                Como graduado con honores en IPCHILE, establecí una fuerte base en ingeniería informática. Destacándome en el proyecto A+S, ejercí como Scrum Master, donde mi gestión y soporte al equipo fueron clave para superar obstáculos en el desarrollo de la aplicación móvil. Logramos no solo alcanzar nuestras metas académicas, sino también captar el interés de inversores, subrayando el potencial comercial de nuestro proyecto.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className="hidden-section-l text-2xl font-bold txt-detail">Certificaciones</h3>
                <div className=" flex flex-row flex-wrap justify-center items-center xl:px-60">
                    {Object.entries(sololearnCertificates).map(([key, value], index) => (
                        <a key={value} href={value} target="_blank" rel="noopener noreferrer">
                            <div className={`${index % 2 == 0 ? "hidden-section-r" : "hidden-section-l"} transform transition duration-200 hover:scale-110 select-none cursor-pointer`}>
                                <div className="bg-secondary p-6 rounded-lg shadow-lg m-5 ">
                                    <h3 className="text-3xl font-bold">{key}</h3>
                                    <p className="text-sm font-bold">SoloLearn</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactSection({ sectionRef }) {
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = {
            email: form.email.value,
            subject: form.subject.value,
            name: form.name.value,
            message: form.message.value,
        };

        try {
            const response = await axios.post('/api/contact', data);
            console.log('Respuesta del servidor:', response);
            setIsSent(true)
        } catch (error) {
            console.error('Hubo un error al enviar el mensaje:', error);
            setIsError(true)
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left">
            <div className="container auto px-10">
                <p className="mb-4 text-4xl sm:text-6xl font-extrabold text-center txt-detail">Contactame</p>
                <p className="mb-5 text-lg font-light text-centersm:text-xl">Si estás interesado en trabajar conmigo o quieres hablar sobre un proyecto, por favor, utiliza el formulario a continuación para enviarme un correo directamente.</p>
                {isSent && !isError && (
                    <div class="mb-5 lg:mb-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">¡Enviado!</strong>
                        <span class="block sm:inline"> He recibido el mensaje con exito, gracias por contactarme.</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setIsSent(false) }}>
                            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                )}
                {isError && (
                    <div class="mb-5 lg:mb-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">¡Oops!</strong>
                        <span class="block sm:inline"> Algo salió mal al intentar enviar el mensaje, disculpa las molestias.</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setIsError(false) }}>
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre</label>
                        <input type="text" id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Nombre Apellido" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Tu email</label>
                        <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="ejemplo@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium">Asunto</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Dime en qué te puedo ayudar" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Tu mensaje</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Deja tu mensaje aquí..."></textarea>
                    </div>
                    <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-md">Enviar mensaje</button>
                </form>
            </div>
        </section>
    );
}
