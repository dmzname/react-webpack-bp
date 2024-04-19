import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from "react";
import { ArticleDetails } from "_entities/Article";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "features/ArticleCommentList";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { commentsReducer, getComments } from "features/ArticleCommentList/model/slices/articleCommentsSlice";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
    fetchArticleCommentsById
} from "features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useParams } from "react-router";

interface IArticleDetailsPageProps {
    className?: string;
}

const reducer: ReducersList = {
    articleComments: commentsReducer
};

const ArticleDetailsPage = ({ className }: IArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        dispatch(fetchArticleCommentsById(id));
    });

    return (
        <DynamicModuleLoader reducers={ reducer } removeAfterUnmount>
            <div className={ classNames(cls.root, {}, [ className ]) }>
                <ArticleDetails id={ id || '1' } className={ cls['article-details'] }/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);