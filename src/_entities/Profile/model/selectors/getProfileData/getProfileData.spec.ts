import { IRootState } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from "_entities/Country";
import { Currency } from "_entities/Currency";

describe('getProfileData.test', () => {
    it('should return Profile Data', () => {
        const data = {
            first: "Dmitry",
            lastname: "Zabelin",
            age: 2,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: "Odessa",
            username: "admin",
        };
        const state: DeepPartial<IRootState> = {
            profile: { data },
        };
        expect(getProfileData(state as IRootState)).toEqual(data);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getProfileData(state as IRootState)).toEqual(undefined);
    });
});
