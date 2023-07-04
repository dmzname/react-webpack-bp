import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            <div className={ cls.links }>
                <AppLink theme={ AppLinkTheme.SECONDARY } to="/" className={ cls['main-link'] }>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={ AppLinkTheme.RED } to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
