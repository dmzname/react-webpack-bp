import { IProfile } from "_entities/Profile";
import { ValidateProfileError } from "_entities/Profile/model/types/profile";

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) return [ ValidateProfileError.NO_DATA ];
    const {
        first,
        lastname,
        age,
        country,
    } = profile;

    const validateErrors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        validateErrors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        validateErrors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        validateErrors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return validateErrors;
};