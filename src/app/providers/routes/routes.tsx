import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "app/layouts/AppLayout";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageError } from 'widgets/PageError/ui/PageError';
import { PageLoader } from 'widgets/PageLoader';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <PageError />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]);