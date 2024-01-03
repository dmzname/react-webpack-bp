import { useSelector } from 'react-redux';
import { getUserAuthData } from '_entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { JSX } from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={ RoutePath.main } state={ { from: location } } replace/>;
    }

    return children;
}
