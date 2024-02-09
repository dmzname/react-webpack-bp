import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from "_entities/Comment";
import { IRootState } from "app/providers/StoreProvider";
import { IArticleCommentsSchema } from "features/ArticleCommentList";
import { fetchArticleCommentsById } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: IComment) => comment.id,
});

export const getComments = commentsAdapter.getSelectors<IRootState>(
    (state) => state.articleComments || commentsAdapter.getInitialState()
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<IArticleCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {}
        }
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleCommentsById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleCommentsById.fulfilled, (
                state,
                action: PayloadAction<IComment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleCommentsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: commentsReducer } = commentsSlice;