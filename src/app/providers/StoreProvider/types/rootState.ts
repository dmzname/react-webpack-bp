import { ICounterSchema } from "_entities/Counter/model/types/counterSchema";
import { IUserSchema } from "_entities/User";
import { ILoginSchema } from "features/AuthByUsername/models/types/loginSchema";

export interface IRootState {
    counter: ICounterSchema;
    user: IUserSchema;
    loginForm?: ILoginSchema;
}