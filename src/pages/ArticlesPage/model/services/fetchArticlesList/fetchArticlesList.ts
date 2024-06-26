import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRootState, IThunkExtraArg } from "app/providers/StoreProvider";
import { Article } from "_entities/Article";
import { getArticlesPageLimit } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

interface IFetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    IFetchArticlesListProps,
    {
        rejectValue: string,
        extra: IThunkExtraArg
    }
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState() as IRootState);

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
