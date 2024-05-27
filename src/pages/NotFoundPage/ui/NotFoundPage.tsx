import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { Page } from "shared/ui/Page";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={ classNames(cls.root, {}, [ className ]) }>
            {t('Страница не найдена')}
        </Page>
    );
};
