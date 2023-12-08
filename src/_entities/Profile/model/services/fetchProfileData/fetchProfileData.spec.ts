import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Currency } from "_entities/Currency";
import { Country } from "_entities/Country";

const data = {
    first: "Dmitry",
    lastname: "Zabelin",
    age: 2,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: "Odessa",
    username: "admin",
};

describe('fetchProfileData.test', () => {
    it('success', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const res = await thunk.callThunk();


        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(data);
    });

    it('error', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const res = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('rejected');
    });
});
