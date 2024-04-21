import { IRootState } from 'app/providers/StoreProvider';

export const getAddNewCommentText = (state: IRootState) => state.addNewComment?.text;
export const getAddNewCommentError = (state: IRootState) => state.addNewComment?.error;
