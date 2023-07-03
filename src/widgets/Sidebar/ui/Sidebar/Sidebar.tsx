import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={ classNames(cls.root, { [cls.collapsed]: collapsed }, [ className ]) }
        >
            <Button onClick={ onToggle }>toggle</Button>
            <div className={ cls.switchers }>
                <ThemeSwitcher />
                <LangSwitcher className={ cls.lang }/>
            </div>
        </div>
    );
};
