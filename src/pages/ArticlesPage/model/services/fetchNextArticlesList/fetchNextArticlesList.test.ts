import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlesList } from "pages/ArticlesPage/model/services/fetchNextArticlesList/fetchNextArticlesList";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock('../fetchArticlesList/fetchArticlesList');


describe('fetchProfileData.test', () => {
    it('success', async () => {

        const thunk = new TestAsyncThunk(fetchNextArticlesList, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });

    });
});
