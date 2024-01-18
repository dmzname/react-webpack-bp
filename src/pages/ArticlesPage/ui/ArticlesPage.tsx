import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from "react";

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: IArticlesPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(ArticlesPage);