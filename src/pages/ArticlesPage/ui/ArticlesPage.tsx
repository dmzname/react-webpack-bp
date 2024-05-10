import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from "react";
import { ArticleList } from "_entities/Article/ui/ArticleList/ArticleList";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlePageAction, articlePageReducer, getArticles } from "pages/ArticlesPage/model/slice/ArticlePageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { useSelector } from "react-redux";
import { ArticleViewSelector } from "features/ArticleViewSelector/ArticleViewSelector";
import { getArticlesPageView } from "pages/ArticlesPage";
import { ArticleView } from "_entities/Article";

interface IArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = ({ className }: IArticlesPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageAction.initState());
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageAction.setView(view));
    }, [ dispatch ]);

    return (
        <DynamicModuleLoader reducers={ reducers }>
            <div className={ classNames(cls.root, {}, [ className ]) }>
                <ArticleViewSelector veiw={ view } onViewClick={ onChangeView }/>
                <ArticleList view={ view } articles={ articles } />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);