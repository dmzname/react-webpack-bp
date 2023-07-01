import {ReactNode} from "react";
import {Outlet} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";

interface LayoutProps {
    className?: string;
    children?: ReactNode
}

export const Layout = (props: LayoutProps) => {
    const {className, children} = props;
    return (
        <div className={classNames('app', {}, [className])}>
            {children}
            <Outlet />
        </div>
    );
};