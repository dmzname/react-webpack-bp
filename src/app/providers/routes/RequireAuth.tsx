import { useSelector } from 'react-redux';
import { getUserAuthData } from '_entities/User';
import { useLocation } from 'react-router-dom';
import { JSX } from "react";
import { Navigate } from "react-router";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={ RoutePath.main } state={ { from: location } } replace/>;
    }

    return children;
}
