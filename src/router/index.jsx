import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../Layout/LayoutPublic";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Trabajo } from "../pages/Trabajo/Trabajo";
import { Servicios } from "../pages/Servicios/Servicios";
import { Blog } from "../pages/Blog/Blog";
import { Cotiza } from "../pages/Cotiza/Cotiza";
import { MiCurricuum } from "../pages/MiCurriculum/MiCurriculum";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: 'nuestro-trabajo',
                element: <Trabajo />
            },
            {
                path: 'nuestro-servicio',
                element: <Servicios />
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: 'cotiza',
                element: <Cotiza />
            },
            {
                path: 'mi-curriculum',
                element: <MiCurricuum />
            }
        ],
    }
])