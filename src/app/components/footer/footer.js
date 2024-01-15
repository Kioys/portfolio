
export default function Footer() {
    return (
        <footer className="bg-secondary text-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center mt-5 mb-5">
                    <a href="https://www.linkedin.com/in/matias-arratibel/" target="_blank" rel="noopener noreferrer">
                        <img src='./icons/linkedin.png' className='transform transition duration-200 hover:scale-110 select-none cursor-pointer w-12 h-12 ml-3' />
                    </a>
                    <a href="https://twitter.com/MatiasArratibel" target="_blank" rel="noopener noreferrer">
                        <img src='./icons/twitter.png' className='transform transition duration-200 hover:scale-110 select-none cursor-pointer w-12 h-12 ml-3' />
                    </a>
                    <a href="https://github.com/kioys" target="_blank" rel="noopener noreferrer">
                        <img src='./icons/github.png' className='transform transition duration-200 hover:scale-110 select-none cursor-pointer w-12 h-12 ml-3' />
                    </a>
                </div>
                <div className="mb-2 font-light text-sm">
                    <p className="">© Matias Arratibel 2024 - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>)
}