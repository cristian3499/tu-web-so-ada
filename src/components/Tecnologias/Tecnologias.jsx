import Accordion from "../Accordion/Accordion"
import { useState } from "react";


export const Tecnologias = () => {
    const [list, setList] =  useState([
        {
            title: 'Desarrollo Web',
            content: 'Iconos donde iran las tecnologias',
            active: 1
        },
        {
            title: 'Diseño UX/UI',
            content: 'Iconos donde iran las tecnologias'
        },
        {
            title: 'Desarrollo Movil',
            content: 'Iconos donde iran las tecnologias'
        },
        {
            title: 'Servicios Externos',
            content: 'Iconos donde iran las tecnologias'
        }
    ]);
    return(
        <>
            <h1>Nuestras tecnologías</h1>

            {
                list.map((item, key ) => (
                    <Accordion key={key} datas={item} />
                ))
            }
        </>
    )
}