//import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="bg-[#262626] text-white md:px-20 ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h4 className="font-bold mb-2">Nuestros Servicios</h4>
                        <p className="block mb-2">Creación de aplicaciones web y movile</p>
                        <p className="block mb-2">Creacion de diseños web y movile</p>
                        <p className="block mb-2">Creación de API'S REST</p>
                        <p className="block mb-2">Mejoras de sitios ya creados</p>
                        <p className="block mb-2">Re-diseño de aplicaciones</p>
                        <p className="block mb-2">Alojamiento de sitios</p>
                        <p className="block mb-2">Creacion de cuentas de correo personalizadas</p>

                        {/* ...añade más enlaces si los necesitas */}
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Contáctanos</h4>
                        <p className="mb-2">contacto@tuwebsoñada.com</p>
                        <p className="mb-2">+52 722 876 3378</p>
                        {/* ...añade más información de contacto si la necesitas */}
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Síguenos</h4>
                        {/* Asegúrate de reemplazar "#" con las URL reales de tus redes sociales */}
                        <a href="#" className="block mb-2">Facebook</a>
                        <a href="#" className="block mb-2">Twitter</a>
                        <a href="#" className="block mb-2">Instagram</a>
                        {/* ...añade más redes sociales si las necesitas */}
                    </div>
                </div>
                <div className="bg-[#212121] border-t border-white mt-5 pt-5">
                    <p className="text-center">2023 Tu web soñada.</p>
                </div>
            </footer>
        </>
    )
}