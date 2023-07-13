import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={ classNames(cls.root, { [cls.collapsed]: collapsed }, [ className ]) }
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={ onToggle }>
                {t('Переключиться')}
            </Button>
            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LangSwitcher className={ cls.lang }/>
            </div>
        </div>
    );
};
