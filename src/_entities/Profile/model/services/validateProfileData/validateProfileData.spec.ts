import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData.test', () => {
    it('without first and lastname', async () => {

        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);

    });

    it('incorrect age', async () => {

        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    it('incorrect country', async () => {

        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ]);
    });
});