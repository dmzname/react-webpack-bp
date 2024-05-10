import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from "../../model/types/article";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ArticleTextBlockComponent } from "_entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router";
import { useCallback } from 'react';
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface IArticleListItemProps {
    className?: string;
    article: Article;
    veiw: ArticleView;
}

export const ArticleListItem = (props: IArticleListItemProps) => {
    const { t } = useTranslation();
    const {
        className,
        article,
        veiw,
    } = props;

    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [ article.id, navigate ]);

    if(veiw === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <Card className={ classNames(cls['root-big'], {}, [ className ]) }>
                <div className={ cls.header }>
                    <Avatar size={ 30 } src={ article.user.avatar } />
                    <Text text={ article.user.username } textStyles={ cls.username } />
                    <Text textTag="span" text={ article.createdAt } textStyles={ cls.date }/>
                </div>
                <Text title={ article.title } titleStyles={ cls.title } />
                <Text text={ article.type.join(', ') } textStyles={ cls.types } />
                <Text text={ String(article.views) } textStyles={ cls.views } />
                <Icon Svg={ EyeIcon } />
                <img src={ article.img } className={ cls.img } alt={ article.title } />
                {textBlock && (
                    <ArticleTextBlockComponent block={ textBlock } className={ cls.textBlock } />
                )}
                <div className={ cls.footer }>
                    <Button onClick={ onOpenArticle } theme={ ButtonTheme.OUTLINE }>
                        {t('Читать далее...')}
                    </Button>
                </div>
            </Card>
        );
    }

    return (
        <Card onClick={ onOpenArticle } className={ classNames(cls['root-small'], {}, [ className ]) }>
            <div className={ cls.image }>
                <img src={ article.img } alt={ article.title } />
                <Text textTag="span" text={ article.createdAt } textStyles={ cls.date }/>
            </div>
            <div className={ cls.info }>
                <Text text={ article.type.join(', ') } textStyles={ cls.types } />
                <Text text={ String(article.views) } textStyles={ cls.views } />
                <Icon Svg={ EyeIcon } />
            </div>
            <Text title={ article.title } titleTag="h3" titleStyles={ cls.title }/>
        </Card>
    );
};