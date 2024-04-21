import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { ISidebarItem } from '../../model/items';
import { useSelector } from "react-redux";
import { getUserAuthData } from "_entities/User";

interface ISidebarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();
    const user = useSelector(getUserAuthData);

    if (item.authOnly && !user) {
        return null;
    }

    const path = item.path.includes('profile') ? item.path + user?.id : item.path;

    return (
        <AppLink
            theme={ AppLinkTheme.SECONDARY }
            to={ path }
            className={ classNames(cls.item, { [cls.collapsed]: collapsed }) }
            title={ t(item.text) }
        >
            <item.Icon className={ cls.icon }/>
            <span className={ cls.link }>
                {t(item.text)}
            </span>
        </AppLink>
    );
});