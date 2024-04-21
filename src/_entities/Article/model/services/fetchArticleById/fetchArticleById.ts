import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { IThunkExtraArg } from "app/providers/StoreProvider";

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    {
        rejectValue: string,
        extra: IThunkExtraArg
    }
>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

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
