import  EndaNabani  from "../../assets/images/endanabani.jpg";
import { CardSuccessStories } from "../CardSuccessStories/CardSuccessStories"

export const CasosDeExito = () => {
    const list = [
        {
            urlLogo: EndaNabani,
            alt: 'Enda Nabani'
        },
        {
            urlLogo: EndaNabani,
            alt: 'Enda Nabani'
        },
        {
            urlLogo: EndaNabani,
            alt: 'Enda Nabani'
        },
        {
            urlLogo: EndaNabani,
            alt: 'Enda Nabani'
        },
    ]
    return(
        <>
            <h1>Nuestros casos de éxito</h1>
            <div className="flex items-center justify-center">
            {
                list.map((item, key) => (
                    <CardSuccessStories key={key} datas={item} />
                ))
            }
            </div>
        </>
    )
}