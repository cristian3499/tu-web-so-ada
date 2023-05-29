import { Carousel } from 'react-responsive-carousel';
import ImageOne from "../../assets/images/creacion-de-pagina-web-a-ls-medida.jpg";
import ImageTwo from "../../assets/images/creacion-de-app-movil-a-la-medida.jpg";

export const MyCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden"
        >
            <div className="relative h-full">
                <img src={ImageOne} className="w-full h-full object-cover" alt="Creación de aplicaciones web a medida" />
                <div className="absolute inset-0 flex flex-col items-center pt-20 bg-black bg-opacity-50 px-3">
                    <h1 className="text-6xl font-bold text-[#c29032] mb-4">Creación de aplicaciones web a medida</h1>
                    <h2 className="text-xl text-white mb-4">Desarrollo de aplicaciones a medida para hacer realidad tus sueños digitales</h2>
                    <img src={ImageOne} alt="Logo" className="image-carrousel-custom" />
                    <h1 className="text-5xl font-bold text-white mt-5"> <span className='text-[#c29032]'>Tu Web</span> Soñada</h1>
                </div>
            </div>
            <div className="relative h-full">
                <img src={ImageTwo} className="w-full h-full object-cover" alt="Creación de aplicaciones móviles a medida" />
                <div className="absolute inset-0 flex flex-col items-center pt-20 bg-black bg-opacity-50 px-3">
                    <h1 className="text-6xl font-bold text-[#c29032] mb-4">Creación de aplicaciones móviles a medida</h1>
                    <h2 className="text-xl text-white mb-4">Creación de aplicaciones móviles a medida</h2>
                    <img src={ImageOne} alt="Logo" className="image-carrousel-custom" />
                    <h1 className="text-5xl font-bold text-white mt-5"> <span className='text-[#c29032]'>Tu Web</span> Soñada</h1>
                </div>
            </div>
        </Carousel>





    );
}
