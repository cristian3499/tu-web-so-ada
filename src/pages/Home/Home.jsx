import { MyCarousel } from "../../components/Carousel/Carousel"
import { Servicios } from "../../components/Servicios/Servicios"
import { Somos } from "../../components/Somos/Somos"
import { Tecnologias } from "../../components/Tecnologias/Tecnologias"


export const Home = () => {
    return(
        <>
            <section>
                <MyCarousel />
            </section>
            <section>
                <Somos />
            </section>
            <section>
                <Servicios />
            </section>
            <section className="bg-[#f2f2f2] h-screen flex justify-center items-center">
                <div className="list">
                    <Tecnologias />
                </div>
            </section>
        </>
    )
}