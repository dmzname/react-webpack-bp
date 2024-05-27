import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "_entities/Article";

export interface IArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    isError?: string;

    view: ArticleView;

    //pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}