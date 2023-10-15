import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";
import { IProfileSchema } from "_entities/Profile";
import { AxiosInstance } from "axios";

export interface IRootState {
    user: IUserSchema;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
}

export type RootStateKey = keyof IRootState;

export interface IThunkExtraArg {
    api: AxiosInstance;
}