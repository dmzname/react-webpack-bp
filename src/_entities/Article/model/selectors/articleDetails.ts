import { IRootState } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: IRootState) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: IRootState) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: IRootState) => state.articleDetails?.error;
