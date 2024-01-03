import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import RightArrow from 'shared/assets/icons/angle-right-solid.svg';
import LeftArrow from 'shared/assets/icons/angle-left-solid.svg';
import LogInIcon from 'shared/assets/icons/right-to-bracket-solid.svg';
import { LoginModal } from "features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "_entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarItemsList } from "../../model/items";
import { useNavigate } from "react-router";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [ collapsed, setCollapsed ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={ item }
            collapsed={ collapsed }
            key={ item.path }
        />
    )), [ collapsed ]);

    const onToggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logoutUser());
        setIsModalOpen(false);
        navigate('/');
    }, [ dispatch, navigate ]);

    return (
        <div
            data-testid="sidebar"
            className={ classNames(cls.root, { [cls.collapsed]: collapsed }, [ className ]) }
        >
            <Button
                className={ cls['collapse-btn'] }
                data-testid="sidebar-toggle"
                onClick={ onToggleSidebar }
                theme={ ButtonTheme.BACKGROUND }
                square
                size={ ButtonSize.L }
            >
                {collapsed ? <RightArrow className={ cls.arrow }/> : <LeftArrow className={ cls.arrow }/>}
            </Button>
            <div className={ cls.items }>
                {itemsList}
            </div>
            {authData ? (
                <Button onClick={ logoutHandler } className={ cls['login-btn'] } theme={ ButtonTheme.CLEAR }>
                    <LogInIcon className={ cls.icon }/>
                    <span className={ cls.link }>
                        {t('Выйти')}
                    </span>
                </Button>
            ) : (
                <>
                    <Button onClick={ () => setIsModalOpen(true) } className={ cls['login-btn'] } theme={ ButtonTheme.CLEAR }>
                        <LogInIcon className={ cls.icon }/>
                        <span className={ cls.link }>
                            {t('Войти')}
                        </span>
                    </Button>
                    <LoginModal isOpen={ isModalOpen } onClose={ () => setIsModalOpen(false) }/>
                </>
            )}
        </div>
    );
});
