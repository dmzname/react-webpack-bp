import { IRootState } from "app/providers/StoreProvider";
import { ArticleView } from "_entities/Article";

export const getArticlesPageView = (state: IRootState) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageIsLoading = (state: IRootState) => state.articlesPage?.isLoading;
export const getArticlesPageLimit= (state: IRootState) => state.articlesPage?.limit || 9;
export const getArticlesPage= (state: IRootState) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: IRootState) => {
    console.log(state.articlesPage?.hasMore);
    return state.articlesPage?.hasMore;
};