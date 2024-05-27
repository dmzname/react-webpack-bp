import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRootState, IThunkExtraArg } from "app/providers/StoreProvider";
import {
    getArticlesPage,
    getArticlesPageHasMore,
    getArticlesPageIsLoading
} from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { articlePageAction } from "pages/ArticlesPage/model/slice/ArticlePageSlice";

export const fetchNextArticlesList = createAsyncThunk<
    void,
    void,
    {
        rejectValue: string,
        extra: IThunkExtraArg
    }
>(
    'articlesPage/fetchNextArticlesList',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState() as IRootState);
        const page = getArticlesPage(getState() as IRootState);
        const isLoading = getArticlesPageIsLoading(getState() as IRootState);

        if (hasMore && !isLoading) {
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
            dispatch(articlePageAction.setPage(page + 1));
        }

    },
);
