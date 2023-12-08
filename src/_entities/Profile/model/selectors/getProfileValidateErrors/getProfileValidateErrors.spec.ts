import { IRootState } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from "_entities/Profile/model/types/profile";

describe('getProfileReadonly.test', () => {
    it('should return is true', () => {
        const state: DeepPartial<IRootState> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE
                ],
            },
        };
        expect(getProfileValidateErrors(state as IRootState)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    it('should work with empty state', () => {
        const state: DeepPartial<IRootState> = {};
        expect(getProfileValidateErrors(state as IRootState)).toEqual(undefined);
    });
});