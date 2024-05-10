import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from "_entities/User";
import { ISidebarItem } from "../types/sidebar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/house-solid.svg";
import AboutIcon from "shared/assets/icons/rectangle-list-solid.svg";
import ProfileIcon from "shared/assets/icons/user-solid.svg";
import ArticleIcon from "shared/assets/icons/newspaper-solid.svg";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: ISidebarItem[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
            },
        ];

        if(userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                }
            );
        }

        return sidebarItemsList;
    }

);