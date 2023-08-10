import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';
import RightArrow from 'shared/assets/icons/angle-right-solid.svg';
import LeftArrow from 'shared/assets/icons/angle-left-solid.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import LogInIcon from 'shared/assets/icons/right-to-bracket-solid.svg';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "_entities/User";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [ collapsed, setCollapsed ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onToggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logoutUser());
        setIsModalOpen(false);
    }, [ dispatch ]);

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
                <AppLink theme={ AppLinkTheme.SECONDARY } to="/" className={ cls.item }>
                    <MainIcon className={ cls.icon }/>
                    <span className={ cls.link }>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink theme={ AppLinkTheme.SECONDARY } to="/about" className={ cls.item }>
                    <AboutIcon className={ cls.icon }/>
                    <span className={ cls.link }>
                        {t('О сайте')}
                    </span>
                </AppLink>
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
};
