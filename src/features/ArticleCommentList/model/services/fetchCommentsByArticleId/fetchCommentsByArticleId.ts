import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkExtraArg } from "app/providers/StoreProvider";
import { IComment } from "_entities/Comment";

export const fetchArticleCommentsById = createAsyncThunk<
    IComment[],
    string | undefined,
    {
        rejectValue: string,
        extra: IThunkExtraArg
    }
>(
    'articleDetails/fetchArticleCommentsById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
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
