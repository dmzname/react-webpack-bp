import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from "app/providers/StoreProvider";
import { Article, ArticleView } from "_entities/Article";
import { IArticlePageSchema } from "pages/ArticlesPage";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<IRootState>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articlesAdapter.getInitialState<IArticlePageSchema>(
        {
            isLoading: false,
            isError: undefined,
            view: ArticleView.SMALL,
            ids: [],
            entities: {},
            page: 1,
            hasMore: true,
        }
    ),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isError = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    },
});

export const {
    reducer: articlePageReducer,
    actions: articlePageAction,
} = articlePageSlice;