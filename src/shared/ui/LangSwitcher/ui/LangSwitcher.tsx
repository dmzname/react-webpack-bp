import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { memo } from "react";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const handleLang = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    return (

        <div className={ classNames(cls.root, {}, [ className ]) }>
            <Button
                className={ classNames(cls.btn, { [cls.active]: i18n.language === 'ua' }) }
                theme={ ButtonTheme.CLEAR }
                onClick={ () => handleLang('ua') }>
                UA
            </Button>
            <Button
                className={ classNames(cls.btn, { [cls.active]: i18n.language === 'ru' }) }
                theme={ ButtonTheme.CLEAR }
                onClick={ () => handleLang('ru') }>
                RU
            </Button>
            <Button
                className={ classNames(cls.btn, { [cls.active]: i18n.language === 'en' }) }
                theme={ ButtonTheme.CLEAR }
                onClick={ () => handleLang('en') }>
                EN
            </Button>
        </div>
    );
});
