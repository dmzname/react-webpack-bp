import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from "react";

interface IArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: IArticleDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {t('ARTICLE DETAILS PAGE')}
        </div>
    );
};

export default memo(ArticleDetailsPage);