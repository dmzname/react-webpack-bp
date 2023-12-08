import { IProfile } from "_entities/Profile";
import { ValidateProfileError } from "_entities/Profile/model/types/profile";

export interface IProfileData {
    data?: IProfile;
    form?: IProfile;
    validateError?: ValidateProfileError[];
}