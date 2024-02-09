import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface IArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={ classNames(cls.root, {}, [ className ]) }>
            {block.title && (
                <Text title={ block.title } titleStyles={ cls.title }/>
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={ paragraph } text={ paragraph }/>
            ))}
        </div>
    );
});
