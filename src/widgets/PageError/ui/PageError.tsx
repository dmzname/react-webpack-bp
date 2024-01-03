import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    function handleReload() {
        location.reload();
    }

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            <p>{t('Произошла непредвиденная ошибка.')}</p>
            <Button onClick={ handleReload }>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
