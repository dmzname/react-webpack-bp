import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRootState, IThunkExtraArg } from "app/providers/StoreProvider";
import { IComment } from "_entities/Comment";
import { getUserAuthData } from "_entities/User";
import { getArticleDetailsData } from "_entities/Article/model/selectors/articleDetails";
import {
    fetchArticleCommentsById
} from "features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    IComment,
    string,
    {
        rejectValue: string,
        extra: IThunkExtraArg
    }
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkApi;

        const userData = getUserAuthData(getState() as IRootState);
        const article = getArticleDetailsData(getState() as IRootState);

        if(!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchArticleCommentsById(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
