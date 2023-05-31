import Accordion from "../Accordion/Accordion"


export const Tecnologias = () => {
    const list = [
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
    ];
    return(
        <>
            <h1 className="text-black text-center" >Nuestras tecnologías</h1>

            <div className="justify-end">
                <p className="text-text-strong">
                Nos enorgullece presentar las herramientas y sistemas innovadores que utilizamos para llevar a cabo nuestros proyectos. 
                Combinamos la última tecnología con la excelencia operacional para ofrecer soluciones de alta calidad y rendimiento. 
                Desde lenguajes de programación de vanguardia hasta plataformas de infraestructura modernas, nuestros recursos tecnológicos 
                son clave para nuestro éxito.
                </p>
            </div>

            {
                list.map((item, key ) => (
                    <Accordion key={key} datas={item} />
                ))
            }
        </>
    )
}