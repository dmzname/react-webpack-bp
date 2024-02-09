import { IRootState } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: IRootState) => state.articleComments?.isLoading;
export const getArticleCommentsError = (state: IRootState) => state.articleComments?.error;
