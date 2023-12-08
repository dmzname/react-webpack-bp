import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";
import { IProfileSchema } from "_entities/Profile";
import { AxiosInstance } from "axios";
import { IProfileData } from "features/EditProfileData";

export interface IRootState {
    user: IUserSchema;
    editProfile: IProfileData;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
}

export type RootStateKey = keyof IRootState;

export interface IThunkExtraArg {
    api: AxiosInstance;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IRootState;
}