import { createBrowserRouter } from "react-router-dom";
import {AppLayout} from "app/layouts/AppLayout";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            }
        ]
    }
]);