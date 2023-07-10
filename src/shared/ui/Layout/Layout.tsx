import { ReactNode, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { PageLoader } from 'widgets/PageLoader';

interface LayoutProps {
    className?: string;
    sidebarSlot?: ReactNode;
    navbarSlot?: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { className, sidebarSlot, navbarSlot } = props;
    return (
        <div className={ classNames('app', {}, [ className ]) }>
            {navbarSlot && navbarSlot}
            <div className="content-page">
                {sidebarSlot && sidebarSlot}
                <div className="page-wrapper">
                    <Suspense fallback={ <PageLoader /> }>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};