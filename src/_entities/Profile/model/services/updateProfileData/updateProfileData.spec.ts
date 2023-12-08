import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Currency } from "_entities/Currency";
import { Country } from "_entities/Country";
import { ValidateProfileError } from "_entities/Profile/model/types/profile";

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
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { data }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const res = await thunk.callThunk(data);

        expect(thunk.api.put).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(data);
    });

    it('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { data }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const res = await thunk.callThunk(data);

        expect(thunk.api.put).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ]);
    });
});