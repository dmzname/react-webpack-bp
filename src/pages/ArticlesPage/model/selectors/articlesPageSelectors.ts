import { IRootState } from "app/providers/StoreProvider";
import { ArticleView } from "_entities/Article";

export const getArticlesPageView = (state: IRootState) => state.articlesPage?.view || ArticleView.SMALL;