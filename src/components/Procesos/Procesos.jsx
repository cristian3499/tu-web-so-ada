import { ProcessLine } from "../ProcessLine/ProcessLine";

export const Procesos = () => {

    const list = [
        {
            title: 'Flowbite Library v1.0.0',
            content: 'Get started with dozens of web components and interactive elements1.'
        },
        {
            title: 'Flowbite Library v2.0.0',
            content: 'Get started with dozens of web components and interactive elements2.'
        },
        {
            title: 'Flowbite Library v3.0.0',
            content: 'Get started with dozens of web components and interactive elements3.'
        },
        {
            title: 'Flowbite Library v4.0.0',
            content: 'Get started with dozens of web components and interactive elements4.'
        },
        {
            title: 'Flowbite Library v4.0.0',
            content: 'Get started with dozens of web components and interactive elements4.'
        },
    ];

    return (
        <>
            <h1>Nuestro proceso de desarrollo</h1>

            <ol className="items-center sm:flex">
                {
                    list.map((item, key) => (
                        <ProcessLine key={key} datas={item} />
                    ))
                }
            </ol>
        </>
    )
}