import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "_entities/Article/model/selectors/articleDetails";
import { fetchArticleById } from "_entities/Article/model/services/fetchArticleById/fetchArticleById";
import { ArticleBlock, ArticleBlockType } from "_entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "_entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "_entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "_entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from "shared/ui/Icon/Icon";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={ block.id }
                    block={ block }
                    className={ cls.block }
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={ block.id }
                    block={ block }
                    className={ cls.block }
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={ block.id }
                    className={ cls.block }
                    block={ block }
                />
            );
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <div className={ cls['avatar-wrapper'] }>
                    <Skeleton width="200px" height="200px" border="100%"/>
                </div>
                <Skeleton width="400px" height="30px" className={ cls.title }/>
                <Skeleton width="600px" height="30px" className={ cls.subtitle }/>
                <div className={ cls['article-info'] } style={ { marginBottom: "10px" } }>
                    <Skeleton width="200px" height="20px"/>
                </div>
                <div className={ cls['article-info'] } style={ { marginBottom: "30px" } }>
                    <Skeleton width="200px" height="20px"/>
                </div>
                <div className={ cls.block }>
                    <Skeleton width="300px" height="20px" className={ cls.title }/>
                    <Skeleton width="80%" height="210px"/>
                </div>
                <div className={ cls.block }>
                    <Skeleton width="300px" height="20px" className={ cls.title }/>
                    <Skeleton width="40%" height="210px"/>
                </div>
                <div className={ cls.block }>
                    <Skeleton width="300px" height="20px" className={ cls.title }/>
                    <Skeleton width="80%" height="210px"/>
                </div>
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={ TextAlign.CENTER }
                title={ t('Произошла ошибка при загрузке статьи.') }
            />
        );
    } else {
        content = (
            <>
                <div className={ cls['avatar-wrapper'] }>
                    <Avatar
                        size={ 200 }
                        src={ article?.img }
                        className={ cls.avatar }
                    />
                </div>
                <Text
                    title={ article?.title }
                    text={ article?.subtitle }
                    titleStyles={ cls.title }
                    textStyles={ cls.subtitle }
                />
                <div className={ cls['article-info'] }>
                    <Icon className={ cls.icon } Svg={ EyeIcon }/>
                    <Text text={ String(article?.views) }/>
                </div>
                <div className={ cls['article-info'] }>
                    <Icon className={ cls.icon } Svg={ CalendarIcon }/>
                    <Text text={ article?.createdAt }/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={ reducers } removeAfterUnmount>
            <div className={ classNames(cls.root, {}, [ className ]) }>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
