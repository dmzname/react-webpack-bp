import { Article } from '_entities/Article';

export interface IArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
