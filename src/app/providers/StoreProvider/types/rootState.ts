import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";
import { IProfileSchema } from "_entities/Profile";

export interface IRootState {
    user: IUserSchema;

    // Async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
}

export type RootStateKey = keyof IRootState;