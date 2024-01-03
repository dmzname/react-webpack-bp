import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteObject } from "react-router";
import { RequireAuth } from "app/providers/routes/RequireAuth";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    // last route
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

    // last route
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <RequireAuth children={ <ProfilePage/> }/> // eslint-disable-line react/no-children-prop

    },

    // last route
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};
