import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const handleLang = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    return (

        <div className={ classNames(cls.root, {}, [ className ]) }>
            <Button className={ cls.btn } theme={ ThemeButton.CLEAR } onClick={ () => handleLang('ru') }>RU</Button>
            <Button className={ cls.btn } theme={ ThemeButton.CLEAR } onClick={ () => handleLang('ua') }>UA</Button>
            <Button className={ cls.btn } theme={ ThemeButton.CLEAR } onClick={ () => handleLang('en') }>EN</Button>
        </div>
    );
};
