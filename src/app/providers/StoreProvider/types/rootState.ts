import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";

export interface IRootState {
    user: IUserSchema;

    // Async reducers
    loginForm?: ILoginSchema;
}

export type RootStateKey = keyof IRootState;