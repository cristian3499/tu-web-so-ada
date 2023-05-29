import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#000]">
                <div className="flex justify-between items-center p-5">
                    <div className="text-white">
                        <Link to='/'>
                            <h1 className="font-bold"><span className="text-[#c29032]">TU WEB</span> SOÑADA</h1>
                        </Link>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6 text-white"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <p className="text-white mx-3 md:block hidden">
                            Cambio de idioma
                        </p>
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row justify-center items-center p-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <p className="text-white mx-3 mb-3 md:hidden">
                        Cambio de idioma
                    </p>
                    <Link to="/nuestro-trabajo" className="text-white mx-8 mt-2 md:mt-0">
                        Nuestro trabajo
                    </Link>
                    <Link to='/nuestro-servicio' className="text-white mx-8 mt-2 md:mt-0">
                        Nuestros Servicios
                    </Link>
                    <Link to='/blog' className="text-white mx-8 mt-2 md:mt-0">
                        Blog
                    </Link>
                    <Link to='/cotiza' className="text-white mx-8 mt-2 md:mt-0">
                        Cotiza
                    </Link>
                    <Link to='/mi-curriculum' className="text-white mx-8 mt-2 md:mt-0">
                        Mi curriculum
                    </Link>
                </div>
            </nav>
        </>
    )
}