import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "app/layouts/AppLayout";
import { PageError } from 'widgets/PageError/ui/PageError';
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <PageError/>,
        children: Object.values(routeConfig)
    }
]);