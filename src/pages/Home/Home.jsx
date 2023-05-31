import { MyCarousel } from "../../components/Carousel/Carousel"
import { CasosDeExito } from "../../components/CasosDeExito/CasosDeExito"
import { Lema } from "../../components/Lema/Lema"
import { Procesos } from "../../components/Procesos/Procesos"
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
            <section className="bg-[#f2f2f2] h-screen flex justify-center">
                <div className="list">
                    <Tecnologias />
                </div>
            </section>
            <section className="bg-[#f2f2f2]">
                <Procesos />
            </section>
            <section className="bg-[#f2f2f2]">
                <CasosDeExito />
            </section>
            <section className="bg-black">
               <Lema /> 
            </section>
        </>
    )
}