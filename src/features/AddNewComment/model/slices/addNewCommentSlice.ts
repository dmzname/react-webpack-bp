import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddNewComment } from "../types/addNewComment";

const initialState: IAddNewComment = {
    text: '',
    error: ''
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
    extraReducers: builder => {
        /*builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });*/
    },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;